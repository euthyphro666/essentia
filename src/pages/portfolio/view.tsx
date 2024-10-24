import { useCallback, useEffect, useState } from "react";
import { Card, Container, Typography } from "@mui/joy";
import type { PortfolioCard } from "../../types";
import portfolio from "../../assets/info.json";
import Canvas from "./canvas";

import styles from "./portfolio.module.scss";

export interface PortfolioProps {
  minScale: number;
  maxScale: number;
  scrollFactor: number;
  fadeThreshold: number;
}

export default function Portfolio({
  minScale = 1.0,
  maxScale = 3.0,
  scrollFactor = 800.0,
  fadeThreshold = 0.5,
}: PortfolioProps) {
  const [state, setState] = useState({ currentCard: 0, scroll: 800 });
  const updateScroll = useCallback(
    (event: WheelEventInit) => {
      setState(({ currentCard, scroll }) => {
        const minScroll = minScale * scrollFactor;
        const maxScroll = maxScale * scrollFactor;
        const delta = event.deltaY ? event.deltaY : 0;
        let newCard = currentCard;
        let newScroll = scroll + delta;
        if (newScroll < minScroll) {
          newScroll = maxScroll;
          newCard = --newCard < 0 ? newCard + portfolio.length : newCard;
        }
        if (newScroll > maxScroll) {
          newScroll = minScroll;
          newCard = ++newCard % portfolio.length;
        }
        return {
          scroll: newScroll,
          currentCard: newCard,
        };
      });
    },
    [minScale, maxScale, scrollFactor]
  );

  useEffect(() => {
    document.addEventListener("mousewheel", updateScroll);
    return () => document.removeEventListener("mousewheel", updateScroll);
  }, [updateScroll]);

  const nextCardIndex = trueMod(state.currentCard + 1, portfolio.length);
  const card = portfolio[state.currentCard];
  const nextCard = portfolio[nextCardIndex];

  const currentScale = state.scroll / scrollFactor;
  const progress = (currentScale - minScale) / (maxScale - minScale);
  const fade = Math.max(0, (progress - fadeThreshold) / (1.0 - fadeThreshold));
  return (
    <Container className={styles.container}>
      <Canvas />
      {fade > 0 ? (
        <Item
          index={nextCardIndex}
          card={nextCard}
          scale={progress * minScale}
          fade={0}
          className={styles.card}
        />
      ) : null}
      <Item
        index={state.currentCard}
        card={card}
        scale={currentScale}
        fade={fade}
        className={styles.card}
      />
    </Container>
  );
}

function Item(props: ItemProps) {
  const card = props.card ?? {};
  return (
    <Card
      className={props.className}
      sx={{
        transform: `scale(${props.scale})`,
        opacity: 1.0 - props.fade,
        // backgroundColor: 'primary.softBg',
        // borderColor: 'primary.border',
      }}
      color="primary"
    >
      <Typography level="h4" component="h1">
        {card.title}
      </Typography>
      <Typography level="h5" component="h1">
        {card.subtitle}
      </Typography>
      <Typography level="body-sm">{card.about}</Typography>
    </Card>
  );
}
interface ItemProps {
  index: number;
  scale: number;
  fade: number;
  className?: string;
  card: PortfolioCard;
}

const trueMod = (n: number, m: number) => ((n % m) + m) % m;

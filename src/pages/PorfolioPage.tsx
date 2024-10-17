import { useCallback, useEffect, useState } from "react";
import { Container, Sheet, Typography } from "@mui/joy";

import styles from "./portfolio.module.scss";

export interface PortfolioProps {
  min: number;
  max: number;
  fadeThreshold: number;
}

export default function Portfolio({
  min = 600,
  max = 2400,
  fadeThreshold = 0.85,
}: PortfolioProps) {
  const cards = [
    { title: "I do things", description: "So many things" },
    { title: "I do more things, too", description: "So many more things" },
  ];
  const [state, setState] = useState({ currentCard: 0, scroll: 0 });
  const updateScroll = useCallback(
    (event: WheelEventInit) => {
      setState(({ currentCard, scroll }) => {
        const delta = event.deltaY ? event.deltaY : 0;
        let newCard = currentCard;
        let newScroll = scroll + delta;
        if (newScroll < min) {
          newScroll = max;
          newCard = --newCard < 0 ? newCard + cards.length : newCard;
        }
        if (newScroll > max) {
          newScroll = min;
          newCard = ++newCard % cards.length;
        }
        return {
          scroll: newScroll,
          currentCard: newCard,
        };
      });
    },
    [min, max, cards.length]
  );

  useEffect(() => {
    document.addEventListener("mousewheel", updateScroll);
    return () => document.removeEventListener("mousewheel", updateScroll);
  }, [updateScroll]);

  const card = cards[(state.currentCard + cards.length) % cards.length];
  const nextCard = cards[(state.currentCard + 1 + cards.length) % cards.length];

  const fade = Math.max(
    0,
    (state.scroll - max * fadeThreshold) / (max - max * fadeThreshold)
  );
  return (
    <Container>
      {/* {fade > 0 ? ( */}
      <Card
        index={cards.indexOf(nextCard)}
        {...nextCard}
        scroll={state.scroll}
        fade={fade}
        className={styles.cardNext}
      />
      {/* ) : null} */}
      <Card
        index={cards.indexOf(card)}
        {...card}
        scroll={state.scroll}
        fade={fade}
        className={styles.card}
      />
    </Container>
  );
}

interface CardProps {
  index: number;
  title: string;
  description: string;
  scroll: number;
  fade: number;
  className?: string;
}
function Card({
  index,
  title,
  description,
  scroll,
  fade,
  className,
}: CardProps) {
  return (
    <Sheet
      className={className}
      sx={{
        transform: `scale(${scroll / 800.0})`,
        opacity: 1.0 - fade,
      }}
    >
      <Typography level="h4" component="h1">
        {title}
      </Typography>
      <Typography level="body-sm">
        {index}: {scroll}
      </Typography>
      <Typography level="body-sm">{description}</Typography>
    </Sheet>
  );
}

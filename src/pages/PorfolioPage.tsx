import { useCallback, useEffect, useState } from 'react';
import { Container, Sheet, Typography } from '@mui/joy';

import styles from './portfolio.module.scss';

export interface PortfolioProps {
  min: number;
  max: number;
}

export default function Portfolio({ min = 600, max = 2400 }: PortfolioProps) {
  const cards = [
    { title: 'I do things', description: 'So many things' },
    { title: 'I do more things, too', description: 'So many more things' },
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
    document.addEventListener('mousewheel', updateScroll);
    return () => document.removeEventListener('mousewheel', updateScroll);
  }, [updateScroll]);

  const card = cards[(state.currentCard + cards.length) % cards.length];
  return (
    <Container>
      <Sheet
        className={styles.card}
        sx={{ transform: `scale(${state.scroll / 800.0})` }}
      >
        <Typography level='h4' component='h1'>
          {card.title}
        </Typography>
        <Typography level='body-sm'>
          {state.currentCard}: {state.scroll}
        </Typography>
        <Typography level='body-sm'>{card.description}</Typography>
      </Sheet>
    </Container>
  );
}

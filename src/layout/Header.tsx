import { useColorScheme, Typography, Stack } from '@mui/joy';
import styles from './header.module.scss';
import pullcord from '../assets/pullcord.png';

export default function Header() {
  const { mode, setMode } = useColorScheme();

  return (
    <Stack
      direction='row'
      sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 8px',
      }}
    >
      <div />
      <Typography level='h1'> </Typography>
      <button
        className={styles.button}
        onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
      >
        <img src={pullcord} height={125} />
      </button>
    </Stack>
  );
}

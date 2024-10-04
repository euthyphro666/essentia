import { Container, Sheet, Typography } from "@mui/joy";

import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <Container>
      <Sheet className={styles.card}>
        <Typography level="h4" component="h1">
          I do things
        </Typography>
        <Typography level="body-sm">So many things</Typography>
      </Sheet>
    </Container>
  );
}

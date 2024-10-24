import { PropsWithChildren } from "react";
import { lazy, Suspense } from "react";
import Header from "./Header";
import { Box, Stack } from "@mui/joy";
// import Footer from "./Footer";

import styles from "./layout.module.scss";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <Stack className={styles.container} sx={{ backgroundColor: "primary" }}>
        {/* <Header /> */}
        <Box className={styles.inner}>{children}</Box>
        {/* <Footer /> */}
        <TanStackRouterDevtools />
      </Stack>
    </Suspense>
  );
}

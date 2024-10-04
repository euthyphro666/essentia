import { PropsWithChildren } from "react";
import { lazy, Suspense } from "react";
import Header from "./Header";
// import Footer from "./Footer";

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
      <Header />
      {children}
      {/* <Footer /> */}
      <TanStackRouterDevtools />
    </Suspense>
  );
}

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { routeTree } from "../routeTree.gen";
import { GlobalStyles } from "@mui/joy";
// import { githubTheme } from './theme';

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            height: "100%",
          },
          body: {
            height: "100%",
          },
          root: {
            height: "100%",
          },
        }}
      />
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

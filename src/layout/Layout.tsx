import { PropsWithChildren } from 'react';
import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <Stack sx={{ padding: '0', margin: '0', width: '100%', height: '100%' }}>
        {children}
        <TanStackRouterDevtools />
      </Stack>
    </Suspense>
  );
}

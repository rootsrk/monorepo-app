import { Card } from '@rootsrk/ui';
import { useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

export function Router() {
  const routeElements = useMemo(
    () =>
      createRoutesFromElements([
        <Route
          key="home"
          path="/"
          element={
            <Card>
              <h1>{`Home`}</h1>
            </Card>
          }
        />,
      ]),
    []
  );

  const router = useMemo(
    () => createBrowserRouter(routeElements),
    [routeElements]
  );
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

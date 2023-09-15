import { useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Product } from './modules/Product';
import { ProductWithoutTranslation } from './modules/ProductWithoutTranslation';

export function Router() {
  const routeElements = useMemo(
    () =>
      createRoutesFromElements([
        <Route key="home" path="/" element={<ProductWithoutTranslation />} />,
        <Route key="home" path="/translated" element={<Product />} />,
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

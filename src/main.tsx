import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router';
import TypeScriptAssert from './pages/TypeScriptAssert.tsx';
import Emoticon from './pages/Emoticon.tsx';
import VanillaExtract from './pages/VanillaExtract.tsx';

const RootLayout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/emoticon'}>emoticon</NavLink>
        </li>
        <li>
          <NavLink to={'/vanilla-extract'}>vanilla extract</NavLink>
        </li>
        <li>
          <NavLink to={'/typescript-assert'}>TypeScript Assert</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/typescript-assert" element={<TypeScriptAssert />} />
      <Route path="/emoticon" element={<Emoticon />} />
      <Route path="/vanilla-extract" element={<VanillaExtract />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

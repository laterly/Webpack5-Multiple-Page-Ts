import { ComponentType } from 'react';
import PageNotFound from '../pages/404/PageNotFound';
import Login from '../pages/home';
interface IRouter {
  title?: string;
  path: string;
  exact?: boolean;
  key?: string;
  isShow?: boolean;
  component: ComponentType<any>;
  children?: IRouter[];
  icon?: ComponentType<any>;
}

export const routes: IRouter[] = [
  {
    path: '/home',
    component: PageNotFound,
  },
  {
    path: '/login',
    component: Login,
  },
];

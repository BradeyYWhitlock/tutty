import { FC } from 'react';
import Home from '../components/home/Home';

export interface AppRoute {
  component: FC;
  path: string;
  exact?: boolean;
}
export default [
  {
    component: Home,
    path: '/',
    exact: true
  }
] as AppRoute[];

import { FC } from 'react';
import Home from '../components/home/Home';
import Unity from '../components/unity/Unity';

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
  },
  {
    component: Unity,
    path: '/unity',
    exact: true
  }
] as AppRoute[];

import { FC } from 'react';
import Home from '../components/home/Home';
import Unity from '../components/unity/Unity';
import Schedule from '../components/schedule/Schedule';

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
  },
  {
    component: Schedule,
    path: '/schedule',
    exact: true
  }
] as AppRoute[];

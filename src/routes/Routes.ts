import { FC } from 'react';
import Home from '../components/home/Home';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import ContactMe from '../components/contactMe/ContactMe';

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
    component: Home,
    path: '/home',
    exact: true
  },
  {
    component: Skills,
    path: '/skills',
    exact: true
  },
  {
    component: Projects,
    path: '/projects',
    exact: true
  },
  {
    component: ContactMe,
    path: '/contactMe',
    exact: true
  }
] as AppRoute[];

import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigation from '../../navigations/RootNavigation';
import registration from './registration';
import questions from './questions';
import answer from './answer';

const router = createNavigationReducer(RootNavigation);

const appReducer = {
  router,
  registration,
  questions,
  answer,
};

export default appReducer;

import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigation from './../../navigations/RootNavigation';
import auth from './authReducer';
import questions from './questionReducer';

const router = createNavigationReducer(RootNavigation);

const appReducer = {
  router,
  auth,
  questions
}

export default appReducer
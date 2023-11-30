import { createStore } from 'vuex';

import authModule from './auth';
import { AuthState } from './auth/state';

export interface StateInterface {
  auth: AuthState,
}

export default createStore<StateInterface>({
  modules: {
    auth: authModule,
  }
})
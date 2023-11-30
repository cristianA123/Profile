
import { GetterTree } from 'vuex';
import { AuthState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<AuthState, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;
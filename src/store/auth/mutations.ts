import { MutationTree } from 'vuex';
import { AuthState } from './state';
import { User } from '@/interfaces/user';


const mutation: MutationTree<AuthState> = {
    setUser( state,  user: User ) {
        state.user = user
        state.authetication = true
        state.authError= false
    },
    dropUser( state ) {
        state.user = null
        state.authetication = false
        state.authError= false
    },
    setError( state ) {
        state.user = null
        state.authetication = true
        state.authError= true
    },

}


export default mutation;
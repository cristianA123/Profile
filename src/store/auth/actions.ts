import { ActionTree } from 'vuex';
import { AuthState } from './state';
import { StateInterface } from '../index';
import { API } from '@/apis';
import { useRouter } from 'vue-router';

// const router = useRouter()

const actions: ActionTree<AuthState, StateInterface> = {
    async login( { commit }, {email, password} : {email:string, password: string} ) {

        try {
            const res =  await API.post('/auth/login', {
                correo: email,
                password: password
            })
    
            const { status, data } = res.data
    
            if ( status === 'success' ) {
                commit('setUser', data.user)
                localStorage.setItem('token', data.token)
            }
            
        } catch (error) {
            commit('setError')
        }


    },
    async logout( { commit }) {

        commit('dropUser')
        localStorage.removeItem('token')

    }
}



export default actions;
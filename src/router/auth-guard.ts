import store from '@/store';

const isAuthenticatedGuard = (to: any, from: any, next: any) => {

    const authetication : any = store.state.auth.authetication

    if (authetication){
        next()
    } 
    else {
        next('/auth/login')
    }

}

export default isAuthenticatedGuard
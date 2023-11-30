import { User } from "@/interfaces/user";

export interface AuthState {
    user: User | null;
    authetication: boolean;
    authError?: boolean
}

function state(): AuthState {
    return {
        user: null,
        authetication: false,
        authError: false
    }
}

export default state;
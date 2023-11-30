
import { useAuth } from "@/composables";
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
    name: 'AuthForm',
    setup() {
        const router = useRouter()

        const { login, authError, user } = useAuth();

        const email = ref<string>('c.quispe@culqi.com');
        const password = ref<string>('admin123');

        const onSubmit = async () => {
            await login(email.value, password.value)
        }


        watch( user, () => {
            if ( user.value ) router.push('/home');
        })

        return {
            email,
            password,
            authError,
            onSubmit,
        }
    }
});
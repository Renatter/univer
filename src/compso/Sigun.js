import {
    auth
} from "../firebase/index"
const signup = async (email, password) => {
    try {
        await auth.createUserWithEmailAndPassword(email, password)
    } catch (err) {

    }

}
const useSignup = async () => {

    return {
        error,
        signup
    }
}
export default useSignup
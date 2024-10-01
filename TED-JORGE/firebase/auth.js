import { getAuth, createUserWithEmailAndPassword } from 'database/auth'

export async function loginWithEmailAndPassword(userCredentials){
    const auth = getAuth();

    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            userCredentials.email,
            userCredentials.password
        );
    } catch (error) {
        
    }

}
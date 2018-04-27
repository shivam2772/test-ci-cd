import {firebaseAuth, googleProvider} from "../config/constants";

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
    
}
 
function loginWithFirebase(provider) {
    return firebaseAuth().signInWithRedirect(provider);
   
}

export function logout() {
    return firebaseAuth().signOut();
}


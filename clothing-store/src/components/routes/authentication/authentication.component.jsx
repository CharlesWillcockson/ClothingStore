import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, 
        signInWithGooglePopup, 
        signInWithGoogleRedirect, 
        createUserDocumentFromAuth } 
        from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

        return (
            <div>
                <h1>Sign In Page</h1>
                <SignInForm />
                <SignUpForm />
            </div>
        );
    };

    export default Authentication;
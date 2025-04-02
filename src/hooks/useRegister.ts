import { useState } from "react"
import { Profile } from "../model/Profile";
import { createPRofile } from "../services/auth-service";

export const useRegister = () => {
    const [error, setError] = useState<string>("");
    const [isLoading, setLoader] = useState<boolean>(false);
    const [toast, setToast] = useState<string>("");

    const signup = (profile: Profile) => {
        setLoader(true);
        createPRofile(profile)
        .then((response) => {
            if(response && response.status === 201) {
                setToast("Profile is successfully craeted");
            }
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoader(false));
    }
    return {error, isLoading, signup, toast};

}
import { useQuery, useMutation } from "@apollo/client";
import { SIGNIN, SIGNUP } from "../mutations/user";
import { GET_CURRENT_USER, GET_USER } from "../queries/user";


///// QUERY //////
export const GetUsers = () => {
    const { data, loading, error, refetch } = useQuery(GET_USER);
    const availableData = data && data.getUser;

    if (error) {
        console.log('error')
    }
    return {
        users: availableData,
        loading,
        error,
        refetch,
    };
};
export const GetProfile = () => {
    const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER);
    const availableData = data && data.getProfile;

    if (error) {
        console.log('error')
    }
    return {
        profile: availableData,
        loading,
        error,
        refetch,
    };
};



///// MUTATIONS //////
interface SignUpInput {
    email: string,
    password: string,
    username: string,
    // id: number
}
export const useSignin = () => {
    const [signinMutation] = useMutation(SIGNIN);
    return async (email: string, password: string) => {
        try {
            const { data } = await signinMutation({
                variables: {
                    email,
                    password,
                },
            });
            return {
                data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    };
};

export const useSignup = () => {
    const [signupMutation] = useMutation(SIGNUP);
    return async (dataInput: SignUpInput) => {
        try {
            const { data } = await signupMutation({
                variables: {
                    data: {
                        username: dataInput.username,
                        email: dataInput.email,
                        password: dataInput.password,
                    }
                }
            });
            return {
                data,
            };
        } catch (error) {
            return {
                error,
            };
        }
    };
};
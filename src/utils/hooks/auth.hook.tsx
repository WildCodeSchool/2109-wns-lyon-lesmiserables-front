import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GetProfile, useSignin, useSignup } from "../store/user";

export const AuthContext = createContext<{
  isConnected: boolean;
  setIsConnected: Function;
  checkLogin: Function;
  user: { id: number; email: string } | null;
  login: Function;
  register: Function;
  logout: Function;
} | null>(null);

interface singUpData {
    email: string;
    password: string;
    username: string;
    // id:number
  }
export function AuthProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const [isConnected, setIsConnected] = useState(false);
  const [failed, setFailed] = useState(false);
  const signIn = useSignin();
  const signUp = useSignup();
  const { profile, refetch } = GetProfile();
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("Connection status changed: ", !!profile);
    console.log("User data is: ", profile);
    if (profile) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [profile]);

  // should add signin, signup and signout here
  // login
  const login = async (email: string,password:string) => {
    const result = await signIn(email, password);
    if (result.data.signIn.accessToken) {
      localStorage.setItem("token", result.data.signIn.accessToken);
      refetch();
    } else {
      setFailed(true);
    }
  };
  const register = async (data:singUpData) => {
    const result = await signUp({
        username: data.username,
        email: data.email,
        password: data.password,
        // id: data.id
      });
      console.log("result", result);
  }
  const logout = (navigate: any) => {
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider
      value={{
        isConnected,
        setIsConnected,
        checkLogin: refetch,
        user: profile,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  try {
    if (authContext) {
      return authContext;
    } else {
      throw new Error("AuthContext not found");
    }
  } catch (error) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
}

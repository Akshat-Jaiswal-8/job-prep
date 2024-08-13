import {supabase} from "./supabase.js";
import toast from "react-hot-toast";

export async function signup({fullName, email, password}) {
    const {data, error} = await supabase.auth.signUp({
        fullName,
        email,
        password,
    });
    if (error) {
        toast.error(error.message);
    }
    return data;
}

export async function login({email, password}) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return {data};
}

export async function signInWithGitHub() {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: "github",
    });
    return {data};
}

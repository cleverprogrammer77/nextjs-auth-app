"use client";
import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg"
    >
      Sign in with Google
    </button>
  );
};

export default LoginButton;

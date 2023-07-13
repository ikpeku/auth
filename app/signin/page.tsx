"use client";

import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useLoginUserMutation} from "@/redux/api/authApi";
import {logout, setUser} from "@/redux/features/userSlice";
import { useRouter } from 'next/navigation'
import {useAppDispatch} from "@/redux/store";
import Link from "next/link";


export default function Login() {
    const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation()
    const route = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch()
    const data =
        localStorage.getItem("data") !== null
            ? JSON.parse(String(localStorage.getItem("data")))
            : dispatch(logout());

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!email || !password) {
            window.alert("invalid credentials")
            return
        }

        if(data?.user.email === email && data?.user.password === password){
            localStorage.setItem("data", JSON.stringify({ ...data, isLogin: true}))
            route.push("/")
        } else {
            window.alert("User not register")
        }

        loginUser({email, password})

    }


    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>

                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <Link className="underline" href="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}


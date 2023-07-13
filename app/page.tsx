"use client";

import React, { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {logout} from "@/redux/features/userSlice"
import Link from "next/link";


export default function Home() {
    const [data, setData] = useState({
        user: {
          email: "",
          password: "",
          firstName: "",
          lastName: ""
        },
        isLogin: false
      })
    

  

    const user = useAppSelector(state => state.userState.user)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

    useEffect(() => {
        const data =
        localStorage.getItem("data") !== null
            ? JSON.parse(String(localStorage.getItem("data")))
            : dispatch(logout());
        setData(data)
    }, [user])


  return (
    <main className="">
        <header>
<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between ">
        <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
                <span className="font-bold text-2xl">Home</span>

            </Link>
        </div>



        <div className="flex items-center gap-4 ml-auto">

             <div className="sm:flex sm:gap-4">
                {!data?.isLogin && 
                       <Link href={"/signin"}>
                    <p
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"

                    >
                        Login
                    </p>
                </Link>
}
{!data?.isLogin &&
                <div className="hidden sm:flex">
                    <Link href={"/signup"}>
                        <p
                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"

                        >
                            Register
                        </p>
                    </Link>
                </div>}
            </div>


            {data?.isLogin && <div className="flex items-center gap-5">
                {data?.user?.firstName && <p>Hello, {data?.user?.firstName}</p>}

                <button onClick={handleLogout}>logout</button>
            </div>}

        </div>
    </div>
    </div>
</header>

        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700">
                            Forever Home.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

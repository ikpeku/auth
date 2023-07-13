"use client";
import React from 'react';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {logout} from "@/redux/features/userSlice";

const Navbar = () => {
    const user = useAppSelector(state => state.userState.user)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    

    return (
        <header className="bg-black absolute z-50 h-12">

            <div>
                <h1>Home</h1>
            </div>
            <div></div>
            {/* <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between w-full bg-black">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <span className="font-bold text-2xl">Home</span>

                        </Link>
                    </div>



                    <div className="flex items-center gap-4 ml-auto">

                        {!user && <div className="sm:flex sm:gap-4">
                            <Link href={"/signin"}>
                                <p
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"

                                >
                                    Login
                                </p>
                            </Link>

                            <div className="hidden sm:flex">
                                <Link href={"/signup"}>
                                    <p
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"

                                    >
                                        Register
                                    </p>
                                </Link>
                            </div>
                        </div>}


                        {user && <div className="flex items-center">
                            <p>{user?.firstName}</p>

                            <button onClick={handleLogout}>logout</button>
                        </div>}
                    </div>
                </div>
            </div> */}
        </header>

    )
}

export default Navbar;
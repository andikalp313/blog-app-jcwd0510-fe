"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("blog-storage");
    dispatch(logoutAction());
    router.push("/login");
  };

  return (
    <nav className="bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link className="text-xl font-bold" href="/">
            Logo
          </Link>

          <div className="flex cursor-pointer items-center gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/">Profile</Link>
            {!user.id && <Link href="/login">sign in</Link>}
            {!!user.id && <p onClick={logout}> Logout</p>}
            {/* {user.id ? <p onClick={logout}>Logout</p> : <Link href="/login">sign in</Link>} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

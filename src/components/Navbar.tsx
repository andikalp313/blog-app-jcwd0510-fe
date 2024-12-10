"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("blog-storage");
    dispatch(logoutAction());
    router.push("/login");
  };

  return (
    <nav className="bg-slate-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="itemx-center flex justify-evenly gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>

            {!user.id && <Link href={"/login"}>Sign In</Link>}
            {!!user.id && (
              <p className="cursor-pointer" onClick={logout}>
                Logout
              </p>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { useAuth } from "../hooks/useAuth";
import { LucideShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="p-6 md:py-4 shadow-md  text-black w-full ">
      <div className="container mx-auto flex  md:flex-row justify-between items-center">
        <a
          href="/"
          className="text-xl  hover:text-indigo-600 rounded-md flex font-medium "
        >
          <LucideShoppingBag className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">E-com</span>
        </a>
        <Link
          href="/products"
          className=" hover:text-indigo-600 px-3 py-2 rounded-md  font-medium"
        >
          Products
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <p className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 cursor">
              {user?.name || "Admin"}
            </p>

            <Button
              variant="ghost"
              onClick={() => {
                logout();
              }}
              className=" hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/register"
              className=" hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
            >
              Register
            </Link>

            <Link
              href="/auth/login"
              className=" hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

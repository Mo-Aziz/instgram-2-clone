import Image from "next/image";
import {
  SearchIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left Section */}
        <div className="relative hidden lg:inline-grid  w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle Section serach input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className=" bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {/* Right Section icons*/}
        <div className=" flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute bg-red-500 rounded-full flex items-center justify-center animate-pulse -top-1 -right-2 tetx-xs text-white w-5  h-5 ">
                  3
                </div>
              </div>

              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <PlusCircleIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-16 w-16 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}> Sign In</button>
          )}

          {/* <div className=" absolute h-12 w-12  ml-5 navBtn">
            <image
              src={avatar}
              alt="profile pic"
              layout="fill"
              className="h-10 w-10 rounded-full cursor-pointer "
              height={150}
              width={150}
              priority
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

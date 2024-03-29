"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="rounded-lg border p-10 shadow-lg">
      <div>Id : {user.id}</div>
      <div>Name : {user.name}</div>
      <div>Email : {user.email}</div>
      <button
        className="mt-2 font-medium text-blue-600 hover:underline"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

import React from "react";
import { User } from "../../interfaces";
import Link from "next/link";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-1">@{user.username}</p>
      <p className="text-sm text-gray-600 mb-4">{user.email}</p>
      <Link href={`/users/${user.id}`}>
        <span className="text-blue-600 hover:underline font-medium cursor-pointer">
          View Profile →
        </span>
      </Link>
    </div>
  );
};

export default UserCard;

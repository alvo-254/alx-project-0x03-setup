// src/pages/users/index.tsx

import { GetServerSideProps } from "next";
import Layout from "@/components/layouts/Layout";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`}>
              <div className="bg-white shadow-md p-4 rounded-xl hover:bg-blue-50 transition">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">@{user.username}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;

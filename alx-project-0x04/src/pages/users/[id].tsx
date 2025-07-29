// src/pages/users/[id].tsx

import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { User } from "@/interfaces";
import Layout from "@/components/layouts/Layout";

interface UserDetailPageProps {
  user: User;
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ user }) => {
  return (
    <Layout>
      <Head>
        <title>{user.name} | User Profile</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600">@{user.username}</p>
        <p className="mt-4">Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>
          Website:{" "}
          <a
            className="text-blue-600 underline"
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>

        <div className="mt-6">
          <h2 className="font-semibold">Address:</h2>
          <p>
            {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Company:</h2>
          <p>{user.company.name}</p>
          <p className="italic">{user.company.catchPhrase}</p>
        </div>

        <div className="mt-6">
          <Link href="/users" className="text-blue-600 hover:underline">
            ← Back to Users
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const user: User = await res.json();

  return { props: { user } };
};

export default UserDetailPage;

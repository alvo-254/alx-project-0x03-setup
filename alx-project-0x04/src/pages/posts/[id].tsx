// src/pages/posts/[id].tsx

import { GetServerSideProps } from "next";
import Layout from "@/components/layouts/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  const post = await res.json();

  return { props: { post } };
};

export default PostPage;

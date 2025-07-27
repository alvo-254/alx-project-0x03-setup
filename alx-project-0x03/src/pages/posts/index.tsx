import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-200 bg-white"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.body.slice(0, 100)}...</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 underline mt-2 inline-block"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: Post[] = await res.json();

  return { props: { posts } };
};

export default PostsPage;

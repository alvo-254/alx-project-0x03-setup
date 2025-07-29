import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout";
import { PageRouteProps } from "../interfaces";
import Hero from "@/components/layouts/Hero";

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <Hero />
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to New Empire App!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>

        {/* AI Feature Buttons */}
        <div className="flex gap-6 flex-wrap justify-center mb-12">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/counter-app" })}
            buttonLabel="Contact Us"
            buttonBackgroundColor="orange"
          />
        </div>

        {/* State Management Comparison Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore State Management
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            See how state is handled using useState, Context API, and Redux.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              action={() => routeToNextPage({ pageRoute: "/counter-usestate" })}
              buttonLabel="useState Version"
              buttonBackgroundColor="blue"
            />
            <Button
              action={() => routeToNextPage({ pageRoute: "/counter-context" })}
              buttonLabel="Context API Version"
              buttonBackgroundColor="green"
            />
            <Button
              action={() => routeToNextPage({ pageRoute: "/counter-redux" })}
              buttonLabel="Redux Version"
              buttonBackgroundColor="orange"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

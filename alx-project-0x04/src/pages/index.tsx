import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout";
import { PageRouteProps } from "../interfaces"; // Adjusted import path to match the new structure
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

        {/* Navigation Buttons */}
        <div className="flex gap-6">
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
      </div>
    </Layout>
  );
}

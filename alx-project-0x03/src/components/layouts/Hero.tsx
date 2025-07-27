import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Empowering Devs to <span className="text-blue-600">Build Better</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
        This project helps you master advanced TypeScript, Next.js and UI principles with clean architecture and practical examples.
      </p>
      <Link href="/users">
        <Button buttonLabel="Explore Users" buttonBackgroundColor="blue" />

      </Link>
    </section>
  );
};

export default Hero;

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700">Counter Showcase</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
        <Link href="/counter-app" className="text-gray-700 hover:text-purple-600">useState</Link>
      </nav>
    </header>
  );
};

export default Header;

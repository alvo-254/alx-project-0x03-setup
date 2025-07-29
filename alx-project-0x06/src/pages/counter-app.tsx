import React from "react";
import Header from "@/components/common/Header";
import { useCounter } from "@/context/CounterContext";

const CounterApp: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  const getMessage = () => {
    if (count === 0) return "🙈 No clicks yet!";
    if (count % 10 === 0) return "🔥 You're on fire!";
    return "";
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-gradient-to-br from-green-200 to-green-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">🌿 Context Counter App</h1>

        <p className="text-lg font-medium mb-2">
          Current count: {count} {getMessage()}
        </p>

        <div className="text-6xl font-bold mb-6">{count}</div>

        <div className="flex gap-6">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Decrease 👎
          </button>
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Increase 🚀
          </button>
        </div>

        <p className="mt-8 text-sm opacity-80">
          Context power! ✨ No prop drilling needed!
        </p>
      </main>
    </>
  );
};

export default CounterApp;

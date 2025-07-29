import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";
import { RootState } from "@/store/store";

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 text-gray-900 p-6">
      <h1 className="text-5xl font-bold mb-10 tracking-tight text-indigo-800">Redux Counter</h1>
      <div className="flex items-center gap-8 bg-white rounded-xl shadow-lg px-10 py-6">
        <button
          onClick={() => dispatch(decrement())}
          className="text-xl px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          −
        </button>
        <span className="text-4xl font-bold w-20 text-center">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="text-xl px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          +
        </button>
      </div>
    </main>
  );
};

export default CounterRedux;

"use client";

import { fasterWay } from "@/utils/functions";

export default function Home() {
  const LIST_LENGTH = 100;
  const list = Array.from({ length: LIST_LENGTH }, (_, index) => index);

  return (
    <main className="container mx-auto my-10 px-6">
      <h3 className="text-4xl text-center mb-5">Correct way ✅</h3>
      <h3 className="text-4xl text-center mb-5">Length: {list.length}</h3>

      <div className="grid grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-4">
        {list.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-indigo-600 p-3 rounded-md cursor-pointer text-sm"
            onClick={() => fasterWay(list, idx)}
          >
            <span>Index: {idx}</span>
            <span>Post Description {idx + 1}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

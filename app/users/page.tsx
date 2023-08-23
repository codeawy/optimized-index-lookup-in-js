"use client";

import { generateArrayOfObjects, slowerWay } from "@/utils/functions";

const UsersPage = () => {
  const list = generateArrayOfObjects(10000);

  return (
    <main className="container mx-auto my-10 px-6">
      <h3 className="text-4xl text-center mb-5">Wrong way ❌❌❌</h3>
      <h3 className="text-4xl text-center mb-5">Length: {list.length}</h3>

      <div className="grid grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-4">
        {list.map(({ id, username }) => (
          <div
            key={id}
            className="flex flex-col bg-indigo-600 p-3 rounded-md cursor-pointer text-sm"
            onClick={() => slowerWay(list, id)}
          >
            <span>ID: {id}</span>
            <span>{username}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UsersPage;

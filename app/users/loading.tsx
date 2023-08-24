const Loading = () => {
  return (
    <div className="container mx-auto my-10 px-6">
      <div className="space-y-2 max-w-sm mx-auto mb-5">
        <div className=" bg-gray-200 rounded-md dark:bg-gray-700 h-6"></div>
        <div className=" bg-gray-200 rounded-md dark:bg-gray-700 h-6"></div>
        <div className=" bg-gray-200 rounded-md dark:bg-gray-700 h-6"></div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-4 animate-pulse">
        {Array.from({ length: 150 }, (_, idx) => (
          <div key={idx} className=" bg-gray-200 rounded-md dark:bg-gray-700 h-16"></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;

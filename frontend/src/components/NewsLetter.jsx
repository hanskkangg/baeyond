import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center bg-white my-10 pt-10 pb-10">
      {/* Title */}
      <p className="prata-regular text-4xl font-medium text-gray-800 dark:text-gray-100">
        Subscribe and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Nokia today announced that it has acquired Rapid’s technology assets,
        including the world’s largest API marketplace, and its highly skilled
        team.
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 dark:border-gray-700 pl-3 bg-white dark:bg-gray-800 rounded-md"
      >
        <input
          className="w-full sm:flex-1 outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-2 py-3"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button
          type="submit"
          className="bg-black dark:bg-white dark:text-black text-white text-xs px-10 py-4 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

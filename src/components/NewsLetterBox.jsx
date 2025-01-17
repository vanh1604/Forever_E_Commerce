import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-semibold text-gray-800">
        Subcribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore
        repellendus magni consequuntur non alias officia ut, sapiente voluptate,
        fugiat possimus dolores numquam necessitatibus deleniti autem blanditiis
        debitis. Omnis, alias?
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

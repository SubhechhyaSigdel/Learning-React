import React from "react";

function Card({ username, btnText = "visit me" }) {
  console.log(username);
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.pexels.com/photos/33230447/pexels-photo-33230447.jpeg"
        alt="Nature"
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          <h1>{username}</h1>
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{btnText}</h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;

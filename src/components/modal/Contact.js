import React from "react";

const Contact = () => {
  return (
    <form className="flex flex-col items-center justify-center w-full gap-2 mt-4">
      <input
        className="w-full p-2 bg-white bg-opacity-25 border border-gray-400 rounded shadow-xl backdrop-filter backdrop-blur-lg"
        type="text"
        placeholder="Your Email"
      />
      <textarea
        className="w-full p-2 bg-white bg-opacity-25 border border-gray-400 rounded shadow-xl backdrop-filter backdrop-blur-lg"
        name="message"
        placeholder="Your Message"
        cols="30"
        rows="10"
      ></textarea>
      <button className="w-full mt-8 text-white bg-green-500 rounded">
        Send
      </button>
    </form>
  );
};

export default Contact;

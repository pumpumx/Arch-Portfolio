import React from "react";

function AboutMePage() {
  return (
    <div className="w-full min-h-[75%] flex justify-center p-6 ">
      <div className="w-full max-w-3xl rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700">
        <div
          className="w-28 h-28 rounded-full bg-cover bg-center border-4 border-purple-500 shadow-lg transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url('https://via.placeholder.com/150')` }}
        ></div>

        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r exo-2-new from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm tracking-wide">
            Hieeeeeeeeeeeee 👋, I'm Naaz Manhas
          </h1>
          <p className="text-gray-300 text-lg italic">
            A Full Stack Developer 
          </p>
        </div>

        <ul className="text-gray-200 list-disc list-inside text-left w-full px-4 space-y-3 barlow-light text-base leading-relaxed">
          <li>🚀 I use Arch and Vim btw — because life wasn’t hard enough already.</li>
          <li>🌀 Wrote "Hello World" once. Still stuck in an existential loop.</li>
          <li>⚙️ My code works with 0 performance issues* <span className="text-xs text-gray-400 italic">*on my machine</span></li>
          <li>🐧 Linux user — yes, with actual friends (surprising, I know).</li>
          <li>♟️ Plays chess for character development.</li>
        </ul>

        <p className="text-sm text-gray-500 italic mt-4">
          "I love to code"
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;

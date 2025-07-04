
function AboutMePage() {
  return (
    <div className="w-full min-h-[75%] flex justify-center p-6 ">
      <div className="w-full max-w-[100%] max-h-[100%] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700">
        <div
          className="w-28 h-28 rounded-full bg-cover bg-center border-4 border-purple-500 shadow-lg transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url('src/assets/Mypfp.jpeg')` }}
        ></div>

        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r exo-2-new from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm tracking-wide">
            My name is  Naaz Manhas 👋
          </h1>
          <p className="text-gray-300 text-lg italic">
            A Full Stack Developer
          </p>
        </div>

        <ul className="text-gray-200 list-disc list-inside text-left w-full px-4 space-y-3 barlow-light text-base leading-relaxed">
          <li>🚀 I use Arch Linux — for the control, customization, and occasional challenge.</li>
          <li>🌀 First program was "Hello World" — still exploring what comes after.</li>
          <li>⚙️ My code runs smoothly* <span className="text-xs text-gray-400 italic">*tested and working on my setup</span></li>
          <li>🐧 Linux user with a genuine appreciation for open-source — and yes, a social life too.</li>
          <li>♟️ Enjoys chess — it sharpens focus and strategic thinking.</li>
        </ul>

        <p className="text-sm text-gray-500 italic mt-4">
          "I love to code"
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;

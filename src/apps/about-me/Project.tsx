import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  future?: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "🕵️ VANISH",
    tagline: "Ghost your ex in real-time.",
    description:
      "An anonymous chat app with Socket.IO for P2P real-time messaging. Once you delete a message, it's gone *forever*—just like your dignity after texting your ex at 3AM.",
    stack: ["TypeScript", "CSS", "Socket.IO", "HTML","React","Node"],
    link:"https://vanish-xj7x.onrender.com/",
    features: [
      "💬 Real-time anonymous chats",
      "🗑️ Deletes messages for both users (savage)",
      "📡 P2P comms with low latency",
    ],
    future: [
      "🔐 End-to-end encryption",
      "📱 Mobile responsiveness (finally)",
      "🛋️ Group chat",
    ],
  },
  {
    title: "💻 Arch-Portfolio",
    tagline: "BTW, I use Arch (in the browser).",
    description:
      "Simulated Arch Linux desktop in the browser.",
    link: "https://arch-portfolio-three.vercel.app/",
    stack: ["React", "TypeScript", "Tailwind", "HTML"],
    features: [
      "🖥️ Terminal mockups with fake CLI flex",
      "🪟 Windowed UI with draggable/resizable windows",
      "🎨 Linux-like aesthetic that says 'I drink pour-over coffee'",
    ],
    future: [
      "🧱 Tiling window manager (i3 vibes)",
      "🎭 Theme switching (Arch? i3? GNOME?)",
    ],
  },
  {
    title: "🏫 School API",
    tagline: "Find your nearest education. Tinder but for schools.",
    description:
      "RESTful API with JWT-based auth and geospatial queries to fetch the closest school to your location. ",
    stack: ["Node.js", "MongoDB", "GeoJSON", "JWT"],
    features: [
      "🧭 Geo-location powered search",
      "🔐 Auth system with role control",
      "🛠️ Clean REST architecture",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectShowcase: React.FC = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black h-full overflow-y-scroll text-white px-6 py-16 space-y-16 ">
      <h1 className="text-5xl font-extrabold text-center mb-10">🧪 Experimental Projects Lab</h1>
      {projects.map((proj, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 space-y-4 hover:scale-[1.01] transition-transform duration-300"
        >
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">{proj.title}</h2>
              <p className="text-sm text-gray-400 italic">{proj.tagline}</p>
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Live Demo ↗
              </a>
            )}
          </div>
          <p className="text-gray-300">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {proj.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-white/20 rounded-full px-3 py-1 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div>
            <h4 className="text-white font-semibold mt-4">✨ Features</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {proj.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
          {proj.future && (
            <div>
              <h4 className="text-white font-semibold mt-4">🔮 Roadmap</h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {proj.future.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectShowcase;

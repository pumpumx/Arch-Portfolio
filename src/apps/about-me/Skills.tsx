import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiTestinglibrary,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";

export default function SkillsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact className="text-sky-400" />, desc: "Component-based UI with hooks" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, desc: "SSR, routing, optimized frontend" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, desc: "Utility-first CSS framework" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, desc: "Static typing for JS" },
        { name: "Redux", icon: <SiRedux className="text-purple-400" />, desc: "Global state management" },
      ],
    },
    {
      category: "Backend & API",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "JavaScript runtime for backend" },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" />, desc: "Minimalist Node.js framework" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, desc: "NoSQL document database" },
        { name: "Socket.IO", icon: <SiSocketdotio className="text-white" />, desc: "Real-time communication" },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, desc: "Realtime DB, auth & hosting" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" />, desc: "Version control & collaboration" },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-purple-300" />, desc: "CI/CD workflows" },
        { name: "Docker", icon: <FaDocker className="text-blue-400" />, desc: "Containerized app deployment" },
        { name: "Vercel", icon: <SiVercel className="text-blue-400" />, desc: "Automated Web Deployments" },                                                                                                          
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        { name: "Jest", icon: <SiJest className="text-pink-500" />, desc: "Unit testing for JS/TS apps" },
        { name: "RTL", icon: <SiTestinglibrary className="text-red-300" />, desc: "Testing React components" },
        { name: "Postman", icon: <SiPostman className="text-orange-400" />, desc: "API testing & mocking" },
      ],
    },
    {
      category: "Other Skills",
      items: [
        { name: "Linux", icon: <FaLinux className="text-gray-300" />, desc: "Command line & server ops" },
        { name: "DSA", icon: <span className="text-white text-xl">⚙️</span>, desc: "Algorithms & problem solving" },
        { name: "Soft Skills", icon: <span className="text-white text-xl">🧠</span>, desc: "Collaboration & adaptability" },
      ],
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-8 md:p-10 rounded-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        Tech Stack & Skills
      </h2>

      <div ref={containerRef} className="space-y-12 max-w-6xl mx-auto">
        {skills.map((section) => (
          <div key={section.category}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white border-b border-white/10 pb-1">
              {section.category}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow hover:shadow-md transition"
                >
                  <div className="text-3xl shrink-0">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    <p className="text-sm text-white/70">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

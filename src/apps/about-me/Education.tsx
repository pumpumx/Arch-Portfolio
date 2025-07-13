import React from "react";
import { motion } from "framer-motion";

type Education = {
  title: string;
  institution: string;
  period: string;
  details?: string[];
};

const educationList: Education[] = [
  {
    title: "10th Grade",
    institution: "Rashtriya Military School, Chail",
    period: "2020 – 2021",
    details: [
      "Core academics with military discipline",
      "Sports participation: football & volleyball"
    ],
  },
  {
    title: "12th Grade – PCM",
    institution: "Rashtriya Military School, Chail",
    period: "2022 – 2023",
    details: [
      "Stream: Physics, Chemistry, Maths",
      "Sports Captain",
      "Best Player – Football & Volleyball"
    ],
  },
  {
    title: "B.Tech in Computer Science",
    institution: "Lovely Professional University (LPU)",
    period: "2023 – 2027",
    details: [
      "Focus: DSA, Operating Systems, Networking",
      "Sports Captain – organized inter-department tournaments",
      "Hackathons & team-based coding projects"
    ],
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EducationSection: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-y-scroll bg-[#0d0d11] text-white px-6 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-center">🎓 Education</h1>
      <div className="space-y-10">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
              <h2 className="text-2xl font-semibold">{edu.title}</h2>
              <span className="text-sm text-gray-400">{edu.period}</span>
            </div>
            <h3 className="text-lg text-gray-300 mb-2">{edu.institution}</h3>
            {edu.details && (
              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;

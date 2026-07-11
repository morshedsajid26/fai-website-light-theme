"use client";
import React, { useState } from "react";
import Header from "../Header";
import { FiMapPin, FiBriefcase, FiClock, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";

const jobPostings = [
  {
    id: 1,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$40k - $70k / year",
    about:
      "Join our design team to create stunning user interfaces. You will be working closely with our product and engineering teams to deliver the best possible user experience.",
    responsibilities: [
      "Create wireframes, user flows, process flows and site maps.",
      "Execute all visual design stages from concept to final hand-off.",
      "Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks.",
      "Establish and promote design guidelines, best practices and standards.",
    ],
    requirements: [
      "Proven UI experience.",
      "Solid experience in creating wireframes, storyboards, user flows, process flows and site maps.",
      "Proficiency in Figma or other visual design and wire-framing tools.",
      "Excellent visual design skills with sensitivity to user-system interaction.",
    ],
    niceToHave: [
      "Experience with Next.js or React.",
      "Knowledge of HTML/CSS and frontend basics.",
    ],
  },
  {
    id: 2,
    title: "APP Developer (Flutter)",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$50k - $80k / year",
    about:
      "Join our mobile team to build beautiful, responsive applications for iOS and Android.",
    responsibilities: [
      "Develop new user-facing features using Flutter.",
      "Build reusable components and front-end libraries for future use.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Optimize application for maximum speed and scalability.",
    ],
    requirements: [
      "Strong proficiency in Dart.",
      "Thorough understanding of Flutter and its core principles.",
      "Experience with popular state management solutions (e.g., Provider, Riverpod, BLoC).",
      "Familiarity with RESTful APIs.",
    ],
    niceToHave: [
      "Experience with native Android/iOS development.",
      "Published applications on App Store / Play Store.",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer (React)",
    location: "Dhaka",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$50k - $80k / year",
    about:
      "Join our frontend team to build beautiful, responsive, and performant user interfaces. You will be working with React, TypeScript, and Tailwind CSS.",
    responsibilities: [
      "Develop new user-facing features using React.js.",
      "Build reusable components and front-end libraries for future use.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
    ],
    requirements: [
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Flux or Redux).",
      "Familiarity with RESTful APIs.",
    ],
    niceToHave: [
      "Experience with Next.js.",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
      "Familiarity with modern front-end build pipelines and tools.",
    ],
  },
  {
    id: 4,
    title: "AI Engineer (Python / LLM)",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$80k - $120k / year",
    about:
      "Join our AI team to build innovative solutions using cutting-edge LLMs and machine learning techniques.",
    responsibilities: [
      "Design and implement AI models and pipelines.",
      "Fine-tune and deploy Large Language Models.",
      "Collaborate with backend engineers to integrate AI models into production systems.",
      "Stay up-to-date with the latest advancements in AI/ML.",
    ],
    requirements: [
      "Strong proficiency in Python.",
      "Experience with machine learning frameworks like PyTorch or TensorFlow.",
      "Solid understanding of NLP and LLM architectures.",
      "Experience in deploying machine learning models in production.",
    ],
    niceToHave: [
      "Experience with Hugging Face transformers.",
      "Experience with cloud platforms like AWS or GCP.",
    ],
  },
];

const JobApply = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const selectedJob = jobPostings.find((job) => job.id === selectedJobId);

  return (
    <section className=" text-[#09090b] py-16 min-h-screen relative overflow-hidden flex flex-col items-center">
      <Container className={`w-full`}>
        <div className="  px-4 sm:px-6 lg:px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Header
              titleText={`Open Position`}
              subtitleText={`Find your role & help us shape the future`}
            />
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col gap-4  mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {jobPostings.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-zinc-50 transition-colors cursor-pointer"
                onClick={() => setSelectedJobId(job.id)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#09090b] mb-3 font-space-grotesk ">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-zinc-400" /> {job.location}
                    </span>
                    <span className="text-zinc-400">&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <FiBriefcase className="text-zinc-400" /> {job.type}
                    </span>
                    <span className="text-zinc-400">&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <FiClock className="text-zinc-400" /> {job.experience}
                    </span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <button
                    className="px-8 py-2.5 rounded-full border border-zinc-300 text-sm font-bold font-space-grotesk text-[#09090b] hover:bg-[#09090b] hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJobId(job.id);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm"
              onClick={() => setSelectedJobId(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJobId(null)}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-[#09090b] bg-zinc-100/50 hover:bg-zinc-200/50 rounded-full transition-colors focus:outline-none z-50 pointer-events-auto"
              >
                <FiX size={20} />
              </button>

              <div className="p-8 pb-0 border-b border-zinc-200/50 relative">
                <h2 className="text-3xl font-bold text-[#09090b] mb-4 pr-10">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-zinc-400" />{" "}
                    {selectedJob.location}
                  </span>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <FiBriefcase className="text-zinc-400" /> {selectedJob.type}
                  </span>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="text-emerald-600 font-medium">
                    $ {selectedJob.salary}
                  </span>
                </div>
              </div>

              <div className="p-8 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 hover:[&::-webkit-scrollbar-thumb]:bg-zinc-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                {/* About the Role */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#09090b] mb-4">
                    About the Role
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    {selectedJob.about}
                  </p>
                </div>

                <div className="w-full h-px border-t border-dashed border-zinc-200 mb-8"></div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#09090b] mb-4">
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex text-sm text-zinc-600 leading-relaxed"
                      >
                        <span className="text-orange-500 mt-1.5 mr-3 text-xs">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#09090b] mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex text-sm text-zinc-600 leading-relaxed"
                      >
                        <span className="text-orange-500 mt-1.5 mr-3 text-xs">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nice to Have */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#09090b] mb-4">
                    Nice to Have
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.niceToHave.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex text-sm text-zinc-600 leading-relaxed"
                      >
                        <span className="text-gray-500 mt-1.5 mr-3 text-xs">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Area */}
              <div className="p-6 md:p-8 pt-0 mt-auto bg-white">
                <button className="w-full py-3.5 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-base transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-orange-500/20">
                  Apply for this Position
                </button>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  By applying, you agree to our Candidate Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JobApply;

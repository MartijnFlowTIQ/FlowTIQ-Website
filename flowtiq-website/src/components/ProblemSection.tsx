"use client";

import { motion } from "framer-motion";
import { GitMerge, AlertTriangle, Search } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: GitMerge,
      title: "De Administratieve Wirwar",
      description: "Medewerkers moeten op dagelijkse basis terugkerende, vaak complexe, registratiestappen uitvoeren in verschillende applicaties. Het werk wordt als belastend en inefficiënt ervaren.",
    },
    {
      icon: AlertTriangle,
      title: "De Foutgevoelige Keten",
      description: "Informatie moet snel en accuraat, vaak op verschillende plekken, vastgelegd worden. Fouten zorgen voor problemen en vertraging in het proces.",
    },
    {
      icon: Search,
      title: "Het Proces- en Applicatiedoolhof",
      description: "Nieuwe en bestaande collega's raken de weg kwijt in het complexe landschap van processen, instructies en handelingen in snel veranderende webapplicaties. Digitale vaardigheden kunnen de technologische ontwikkelingen niet bijbenen.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="bg-slate-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12"
        >
          Herken je dit? De werkdruk gaat pas omlaag als je het anders organiseert.
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] rounded-2xl p-6 lg:p-8"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="text-[#14B8A6]">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Afsluiter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto mt-12 font-medium text-slate-700 text-center text-lg"
        >
          Precies die uitdagingen lossen wij op. We versimpelen processen, vereenvoudigen het gebruik van applicaties en verminderen fouten en administratieve druk.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;



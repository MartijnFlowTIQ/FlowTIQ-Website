"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code2, Layers, Award } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Privacy First",
      description: "Data verlaat Nederland niet. FlowTIQ werkt binnen de muren van de organisatie of het datacenter waar de organisatie al gebruik van maakt.",
    },
    {
      icon: Code2,
      title: "Geen Black Box",
      description: "Wij gebruiken transparante Open Source technologie. We leggen je precies uit wat er gebeurt en waarom.",
    },
    {
      icon: Layers,
      title: "Extensie, geen invasie",
      description: "We passen je kernapplicaties niet aan. FlowTIQ ligt er als een flexibele schil overheen.",
    },
    {
      icon: Award,
      title: "Gecertificeerd",
      description: "Wij werken volledig conform AVG, ISO27001 en NEN7510 normen.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="bg-[#0F172A] py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-12 lg:mb-16"
        >
          Innovatie zonder concessies aan veiligheid.
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 border border-slate-700 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col space-y-4">
                  <div className="text-[#14B8A6]">
                    <Icon className="w-10 h-10 lg:w-12 lg:h-12" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Lees meer over onze techniek & security
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;


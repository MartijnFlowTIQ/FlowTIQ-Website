"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TeamSection = () => {
  const quotesRef = useRef(null);
  const teamRef = useRef(null);
  const quotesInView = useInView(quotesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  const quotes = [
    "Niet nóg een tool, maar technologie die verbindt wat er al is.",
    "Compliance zonder extra werkdruk.",
    "Maak het werk weer haalbaar.",
  ];

  const quotesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const quoteItemVariants = {
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
    <section className="bg-slate-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Deel 1: Quotes */}
        <motion.div
          ref={quotesRef}
          variants={quotesVariants}
          initial="hidden"
          animate={quotesInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              variants={quoteItemVariants}
              className="relative bg-[#14B8A6]/10 shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] rounded-2xl p-6 lg:p-8"
            >
              <span className="absolute -top-2 -left-2 text-6xl text-[#14B8A6]/20 font-serif leading-none">"</span>
              <p className="relative z-10 text-lg lg:text-xl text-slate-700 italic leading-relaxed">
                {quote}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Deel 2: Team Intro */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Tekst Links */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900">
              Wij zijn FlowTIQ. Aangenaam.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Wij zijn experts die snappen hoe weerbarstig de praktijk is. Met ervaring in de zorg, overheid en IT weten we dat technologie pas werkt als de mens centraal staat. Onze mentaliteit? Zeggen wat je doet en doen wat je zegt.
            </p>
          </div>

          {/* Foto Placeholder Rechts */}
          <div className="order-first lg:order-none">
            <div className="bg-slate-200 rounded-2xl shadow-md aspect-square flex items-center justify-center">
              <span className="text-slate-500 font-medium text-lg text-center px-4">
                Foto Oscar, Martijn, Tim & Daan
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;


"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const quotes = [
    "Niet nóg een tool, maar technologie die verbindt wat er al is.",
    "Compliance zonder extra werkdruk.",
    "Maak het werk weer haalbaar."
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-brand-flow/10 shadow-soft-xl rounded-2xl p-6 lg:p-8"
            >
              <span className="absolute -top-2 -left-2 text-6xl text-brand-flow/20 font-serif leading-none">
                &ldquo;
              </span>
              <p className="text-lg italic text-slate-700 relative z-10">
                {quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Wij zijn FlowTIQ. Aangenaam!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Wij zijn experts die snappen hoe weerbarstig de praktijk is. Met ervaring in de zorg, overheid en IT weten we dat technologie pas werkt als de mens centraal staat.
            </p>
            <p className="text-lg font-medium text-primary">
              Onze mentaliteit? Zeggen wat je doet en doen wat je zegt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            {/* Placeholder voor foto */}
            <div className="bg-white rounded-2xl aspect-[4/3] w-full flex items-center justify-center shadow-soft-xl relative overflow-hidden group border border-slate-100">
                <span className="text-slate-400 font-medium">Foto Oscar & Martijn</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
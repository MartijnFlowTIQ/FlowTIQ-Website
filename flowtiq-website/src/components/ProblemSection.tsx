"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitMerge, AlertTriangle, Search } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-heading font-bold text-center text-primary mb-12"
        >
          Herken je dit? De werkdruk gaat pas omlaag als je het anders organiseert.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GitMerge,
              title: "De Administratieve Wirwar",
              text: "Medewerkers moeten op dagelijkse basis terugkerende, vaak complexe, registratiestappen uitvoeren in verschillende applicaties. Het werk wordt als belastend en inefficiënt ervaren."
            },
            {
              icon: AlertTriangle,
              title: "De Foutgevoelige Keten",
              text: "Informatie moet snel en accuraat, vaak op verschillende plekken, vastgelegd worden. Fouten zorgen voor problemen en vertraging in het proces."
            },
            {
              icon: Search,
              title: "Het Proces- en Applicatiedoolhof",
              text: "Nieuwe en bestaande collega's raken de weg kwijt in het complexe landschap van processen, instructies en handelingen in snel veranderende webapplicaties."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-soft-xl rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="bg-brand-flow/10 p-4 rounded-full mb-6">
                <item.icon className="w-8 h-8 text-brand-flow" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-12 font-medium text-slate-700"
        >
          Precies die uitdagingen lossen wij op. We versimpelen processen, vereenvoudigen het gebruik van applicaties en verminderen fouten en administratieve druk.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Box, Layers, Award } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-primary py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-heading font-bold text-center mb-16"
        >
          Innovatie zonder concessies aan veiligheid.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Privacy First",
              text: "Data verlaat Nederland niet. FlowTIQ werkt binnen de muren van de organisatie of het datacenter waar de organisatie al gebruik van maakt."
            },
            {
              icon: Box,
              title: "Geen Black Box",
              text: "Wij gebruiken transparante Open Source technologie. We leggen je precies uit wat er gebeurt en waarom."
            },
            {
              icon: Layers,
              title: "Extensie, geen invasie",
              text: "We passen je kernapplicaties niet aan. FlowTIQ ligt er als een flexibele schil overheen."
            },
            {
              icon: Award,
              title: "Gecertificeerd",
              text: "Wij werken volledig conform AVG, ISO27001 en NEN7510 normen."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-slate-700 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-brand-flow mb-4">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="/oplossingen" className="inline-block border border-white/30 hover:bg-white hover:text-primary text-white font-medium px-8 py-3 rounded-full transition-all">
                Lees meer over onze techniek & security
            </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
// Force update fix
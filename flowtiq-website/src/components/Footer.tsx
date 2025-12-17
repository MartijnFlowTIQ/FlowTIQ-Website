"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <footer>
      {/* Onderdeel A: Finale CTA */}
      <section
        ref={ctaRef}
        className="bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Klaar om veilig, verantwoord en met vertrouwen te werken met AI?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            We starten niet met een factuur, maar met een analyse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#15803D" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16A34A] text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Doe de Flow-check
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <p className="text-white/80 text-sm">
              Vrijblijvend inzicht in jouw proces-potentieel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Onderdeel B: Echte Footer */}
      <section className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Links: Logo/Naam */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">FlowTIQ</h3>
              <p className="text-slate-400 text-sm">
                Intelligente laag over je webapplicaties die het repeterende werk automatiseert.
              </p>
            </div>

            {/* Midden: Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigatie</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/oplossingen"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Oplossingen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Werkwijze
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Over Ons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Rechts: Gegevens */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>FlowTIQ</p>
                <p>Nederland</p>
                <p className="mt-4">
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Privacyverklaring
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    KvK: [Nummer]
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm text-center">
              © 2024 FlowTIQ. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;


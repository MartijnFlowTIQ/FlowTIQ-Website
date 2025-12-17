"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animationPhase, setAnimationPhase] = useState<"chaos" | "connecting" | "ordered">("chaos");

  // Chaos posities - willekeurig verspreid
  const chaosPositions = [
    { x: 20, y: 30, rotation: -15 },
    { x: 60, y: 10, rotation: 25 },
    { x: 15, y: 70, rotation: 10 },
    { x: 75, y: 50, rotation: -20 },
    { x: 40, y: 80, rotation: 30 },
    { x: 85, y: 20, rotation: -10 },
  ];

  // Geordende posities - netjes op een rij
  const orderedPositions = [
    { x: 10, y: 40, rotation: 0 },
    { x: 30, y: 40, rotation: 0 },
    { x: 50, y: 40, rotation: 0 },
    { x: 70, y: 40, rotation: 0 },
    { x: 90, y: 40, rotation: 0 },
    { x: 50, y: 60, rotation: 0 },
  ];

  useEffect(() => {
    // Start met chaos
    const timer1 = setTimeout(() => setAnimationPhase("connecting"), 2000);
    const timer2 = setTimeout(() => setAnimationPhase("ordered"), 4000);
    
    // Reset na 8 seconden voor loop
    const timer3 = setTimeout(() => {
      setAnimationPhase("chaos");
      setTimeout(() => setAnimationPhase("connecting"), 2000);
      setTimeout(() => setAnimationPhase("ordered"), 4000);
    }, 8000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const getCurrentPositions = () => {
    if (animationPhase === "ordered") return orderedPositions;
    return chaosPositions;
  };

  const currentPositions = getCurrentPositions();

  return (
    <section className="min-h-screen bg-[#F1F5F9] flex items-center pt-24 pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Links: Tekst en CTA */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A]"
            >
              Geef medewerkers hun tijd én aandacht terug.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-[#0F172A]/80 leading-relaxed"
            >
              Verminder herhalende handmatige invoer, voorkom fouten en laat systemen eenvoudig samenwerken. FlowTIQ levert de intelligente laag over je webapplicaties die het repeterende werk automatiseert.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-[#14B8A6]/10 rounded-2xl p-6 italic text-[#0F172A] text-lg leading-relaxed border-l-4 border-[#14B8A6]"
            >
              <span className="absolute -top-2 -left-2 text-6xl text-[#14B8A6]/20 font-serif leading-none">"</span>
              <span className="relative z-10">Van veel registratietijd, klikken en corrigeren naar één effectieve, soepele en foutloze flow.</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#15803D" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#16A34A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Doe de Flow-check
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0F172A] border-2 border-[#0F172A]/20 px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Bekijk hoe het werkt
              </motion.button>
            </motion.div>
          </div>

          {/* Rechts: Animatie */}
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-8 overflow-hidden">
              {/* Abstracte blokken */}
              {chaosPositions.map((_, index) => {
                const initialPos = chaosPositions[index];
                const targetPos = currentPositions[index];

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{
                      left: `${initialPos.x}%`,
                      top: `${initialPos.y}%`,
                    }}
                    animate={{
                      left: `${targetPos.x}%`,
                      top: `${targetPos.y}%`,
                    }}
                    transition={{
                      duration: animationPhase === "connecting" ? 1.5 : animationPhase === "ordered" ? 2 : 0,
                      ease: animationPhase === "ordered" ? "easeOut" : "easeInOut",
                    }}
                    style={{
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="w-16 h-20 bg-gradient-to-br from-[#0F172A]/10 to-[#0F172A]/5 rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] border border-[#0F172A]/10"
                      initial={{
                        rotate: initialPos.rotation,
                      }}
                      animate={{
                        rotate: targetPos.rotation,
                      }}
                      transition={{
                        duration: animationPhase === "connecting" ? 1.5 : animationPhase === "ordered" ? 2 : 0,
                        ease: animationPhase === "ordered" ? "easeOut" : "easeInOut",
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Teal verbindingslijn - verschijnt tijdens connecting en ordered fase */}
              {(animationPhase === "connecting" || animationPhase === "ordered") && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 800 500"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={animationPhase === "ordered" 
                      ? `M ${(orderedPositions[0].x / 100) * 800} ${(orderedPositions[0].y / 100) * 500} 
                          L ${(orderedPositions[1].x / 100) * 800} ${(orderedPositions[1].y / 100) * 500}
                          L ${(orderedPositions[2].x / 100) * 800} ${(orderedPositions[2].y / 100) * 500}
                          L ${(orderedPositions[3].x / 100) * 800} ${(orderedPositions[3].y / 100) * 500}
                          L ${(orderedPositions[4].x / 100) * 800} ${(orderedPositions[4].y / 100) * 500}
                          M ${(orderedPositions[2].x / 100) * 800} ${(orderedPositions[2].y / 100) * 500}
                          L ${(orderedPositions[5].x / 100) * 800} ${(orderedPositions[5].y / 100) * 500}`
                      : `M ${(chaosPositions[0].x / 100) * 800} ${(chaosPositions[0].y / 100) * 500} 
                          L ${(chaosPositions[1].x / 100) * 800} ${(chaosPositions[1].y / 100) * 500}
                          L ${(chaosPositions[2].x / 100) * 800} ${(chaosPositions[2].y / 100) * 500}
                          L ${(chaosPositions[3].x / 100) * 800} ${(chaosPositions[3].y / 100) * 500}
                          L ${(chaosPositions[4].x / 100) * 800} ${(chaosPositions[4].y / 100) * 500}
                          L ${(chaosPositions[5].x / 100) * 800} ${(chaosPositions[5].y / 100) * 500}`
                    }
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </motion.svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

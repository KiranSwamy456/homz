"use client";

// Client component: project gallery with use-case filter
// Used on the Projects / Portfolio page

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectUseCase } from "@/lib/data/projects";

const ALL_USE_CASES_DISPLAY: ("All" | ProjectUseCase)[] = [
  "All",
  "Homes",
  "Offices",
  "Hotels",
  "Schools",
  "Hospitals",
  "Commercial",
];

interface ProjectsGalleryProps {
  projects: Project[];
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeUseCase, setActiveUseCase] = useState<"All" | ProjectUseCase>("All");

  const filtered =
    activeUseCase === "All"
      ? projects
      : projects.filter((p) => p.useCase === activeUseCase);

  return (
    <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_USE_CASES_DISPLAY.map((uc) => (
            <button
              key={uc}
              onClick={() => setActiveUseCase(uc)}
              className={`font-sans text-[11px] px-4 py-2 border transition-colors ${
                activeUseCase === uc
                  ? "bg-[#1B7E8C] text-white border-[#1B7E8C]"
                  : "text-[#555] border-[#ddd] hover:border-[#1B7E8C] hover:text-[#1B7E8C] bg-white"
              }`}
            >
              {uc === "All" ? "All Projects" : uc}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUseCase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-sans text-center text-[#888] py-24">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

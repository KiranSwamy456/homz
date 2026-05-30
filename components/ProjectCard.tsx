// Project / portfolio card — image with hover overlay

import Image from "next/image";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F5F0EB]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Use-case chip — always visible */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-white/90 backdrop-blur-sm font-sans text-[9px] font-bold uppercase tracking-widest text-[#1B7E8C] px-2.5 py-1">
          {project.useCase}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
        <span className="font-sans text-[9px] text-white/60 uppercase tracking-widest mb-1">
          {project.location}
        </span>
        <h3 className="font-serif text-lg text-white font-normal leading-snug">
          {project.title}
        </h3>
        <p className="font-sans text-xs text-white/75 mt-1.5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

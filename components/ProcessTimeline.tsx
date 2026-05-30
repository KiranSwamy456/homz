// Manufacturing process timeline — horizontal on desktop, vertical on mobile

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Horizontal connector line — desktop only */}
      <div
        className="hidden md:block absolute top-5 left-0 right-0 h-px bg-[#E0EAEC] z-0"
        style={{ top: "1.25rem" }}
      />

      <div
        className="grid grid-cols-1 gap-0"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-start md:items-center text-left md:text-center px-4 pb-8 md:pb-0"
          >
            {/* Vertical connector line — mobile only */}
            {idx < steps.length - 1 && (
              <div className="md:hidden absolute left-[1.125rem] top-10 bottom-0 w-px bg-[#E0EAEC] z-0" />
            )}

            {/* Step circle */}
            <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#1B7E8C] bg-white flex items-center justify-center mb-5 shrink-0">
              <span className="font-sans text-xs font-bold text-[#1B7E8C]">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="md:px-3">
              <h3 className="font-sans text-sm font-semibold text-[#1A1A1A] mb-1.5 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-[#666] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

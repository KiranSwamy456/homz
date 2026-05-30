// ─────────────────────────────────────────────────────────────
//  HomzIndia — Company Stats
// ─────────────────────────────────────────────────────────────

export interface CompanyStat {
  value: string;
  label: string;
  sublabel?: string;
}

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: "2008",
    label: "Year Founded",
    sublabel: "Started in Hyderabad",
  },
  {
    value: "30,000",
    label: "Sq. Ft. Facility",
    sublabel: "Manufacturing space",
  },
  {
    value: "750+",
    label: "Sets / Month",
    sublabel: "Production capacity",
  },
  {
    value: "55+",
    label: "Skilled Employees",
    sublabel: "On-ground team",
  },
  {
    value: "1,38,000+",
    label: "Sets Delivered",
    sublabel: "Across India",
  },
  {
    value: "24 Mo.",
    label: "Warranty",
    sublabel: "On every product",
  },
];

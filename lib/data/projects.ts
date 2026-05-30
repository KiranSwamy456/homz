// ─────────────────────────────────────────────────────────────
//  HomzIndia — Portfolio / Projects Data
// ─────────────────────────────────────────────────────────────

export type ProjectUseCase =
  | "Homes"
  | "Offices"
  | "Hotels"
  | "Schools"
  | "Hospitals"
  | "Commercial";

export interface Project {
  id: string;
  title: string;
  useCase: ProjectUseCase;
  location: string;
  description: string;
  image: string;
}

export const ALL_USE_CASES: ("All" | ProjectUseCase)[] = [
  "All",
  "Homes",
  "Offices",
  "Hotels",
  "Schools",
  "Hospitals",
  "Commercial",
];

export const PROJECTS: Project[] = [
  {
    id: "proj-001",
    title: "Luxury Villa Living Room",
    useCase: "Homes",
    location: "Hyderabad",
    description:
      "Custom pure leather L-shape sofa with matching accent chairs for a premium villa interior in Jubilee Hills.",
    image: "/images/case-1.png",
  },
  {
    id: "proj-002",
    title: "Corporate Office Seating",
    useCase: "Offices",
    location: "Hyderabad",
    description:
      "Complete office seating solution — executive chairs, reception sofas, and lounge furniture for a tech company.",
    image: "/images/solution-office.png",
  },
  {
    id: "proj-003",
    title: "Boutique Hotel Lobby",
    useCase: "Hotels",
    location: "Hyderabad",
    description:
      "Premium lobby furniture featuring imported leather sofas and custom accent chairs for a 4-star hotel.",
    image: "/images/solution-hospitality.png",
  },
  {
    id: "proj-004",
    title: "School Administrative Block",
    useCase: "Schools",
    location: "Secunderabad",
    description:
      "Bulk supply of faculty seating, waiting-area sofas, and conference room furniture for a leading school.",
    image: "/images/solution-education.png",
  },
  {
    id: "proj-005",
    title: "Multi-Specialty Hospital Waiting",
    useCase: "Hospitals",
    location: "Hyderabad",
    description:
      "Durable and easy-to-clean waiting-area sofas and chairs for a multi-specialty hospital in Banjara Hills.",
    image: "/images/solution-healthcare.png",
  },
  {
    id: "proj-006",
    title: "Fine Dining Restaurant Lounge",
    useCase: "Commercial",
    location: "Hyderabad",
    description:
      "Custom upholstered dining chairs and lounge sofas, designed to complement the restaurant's premium interior.",
    image: "/images/solution-restaurant.png",
  },
  {
    id: "proj-007",
    title: "Master Bedroom Suite",
    useCase: "Homes",
    location: "Hyderabad",
    description:
      "Custom leather bed with matching side tables and bedroom seating for a luxury apartment in Gachibowli.",
    image: "/images/bedroom-new-collection.png",
  },
  {
    id: "proj-008",
    title: "Furniture Showroom Display",
    useCase: "Commercial",
    location: "Hyderabad",
    description:
      "Premium imported sofa collection and display seating furniture for a high-end furniture showroom.",
    image: "/images/case-3.png",
  },
  {
    id: "proj-009",
    title: "Residential Living Room Makeover",
    useCase: "Homes",
    location: "Hyderabad",
    description:
      "Recliner sofa in custom pure leather with a warm earth-tone finish for a family living room in Madhapur.",
    image: "/images/case-2.png",
  },
];

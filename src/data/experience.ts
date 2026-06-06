export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  url?: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Finstack",
    role: "Technical Lead",
    location: "Amsterdam, North Holland, Netherlands",
    start: "Apr 2024",
    end: "Present",
    url: "https://finstack.io",
    description:
      "Finstack helps scale-ups speed up their month-end closing with its automated reporting, consolidation, and collaboration platform. No fuss, no complexity.",
    highlights: [],
  },
  {
    company: "Finstack",
    role: "Senior Developer",
    location: "Hoedspruit, Limpopo, South Africa · Remote",
    start: "Apr 2023",
    end: "Mar 2024",
    url: "https://finstack.io",
    description:
      "Finstack helps scale-ups speed up their month-end closing with its automated reporting, consolidation, and collaboration platform. No fuss, no complexity.",
    highlights: [],
  },
  {
    company: "Vesper",
    role: "Senior Developer",
    location: "Amsterdam, North Holland, Netherlands",
    start: "Sep 2021",
    end: "Dec 2022",
    url: "https://vespertool.com",
    description:
      "Vesper is the fastest growing commodity platform in the market. Whether you're checking the market moves from the boardroom or the airport, Vesper keeps you informed and in control. Mixing the traditional world of commodities with the latest technology available.",
    highlights: [],
  },
  {
    company: "RoomRaccoon",
    role: "Lead Developer",
    location: "Breda, North Brabant, Netherlands",
    start: "May 2021",
    end: "Jun 2021",
    url: "https://roomraccoon.com",
    description:
      "All-in-one hotel software made for independent hotels, hostels and vacation rentals.",
    highlights: [],
  },
  {
    company: "CLEVVA",
    role: "Lead DevOps Engineer",
    location: "Avontuur Estate, Somerset West, South Africa",
    start: "Jun 2014",
    end: "May 2021",
    url: "https://clevva.com",
    description:
      "CLEVVA is a technology business that has specialised in the art and science of Intelligence Augmentation — enabling companies to effectively capture and scale their sales, support, system, process and technical expertise.",
    highlights: [
      "Designed and implemented a complete CI/CD pipeline for the core product",
      "Built infrastructure for auto-provisioning of dev, QA, and staging environments",
      "Deployed applications across AWS, Azure, and on-premise Linux and Windows Server",
      "Built CLI tools for database porting, automated builds, and code obfuscation",
      "Introduced formal incident management and Agile adoption for the development team",
    ],
  },
  {
    company: "Customer Loyalty Consultants",
    role: "Software Developer",
    location: "Centurion, South Africa",
    start: "Aug 2013",
    end: "May 2014",
    url: "https://www.customerloyalty.co.za",
    description:
      "CLC has flourished since its establishment in 1998 and is considered to be a leader in service delivery, innovative product development and in assisting brokers, UMA's, administrators and underwriters to be more efficient. Today, Customer Loyalty Consultants services over 400,000 clients and is considered to be one of the most reputable financial service providers in the insurance industry.",
    highlights: [
      "Developed a Claim Management System for the insurance industry",
      "Built an issue management mechanism for continuous application optimisation",
      "Designed a training and assessment module for consultant evaluation",
    ],
  },
];

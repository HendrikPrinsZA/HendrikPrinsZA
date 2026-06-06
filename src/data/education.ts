export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  url?: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "University of Pretoria",
    degree: "BSc IT — Software Development",
    location: "Gauteng, South Africa",
    start: "2010",
    end: "2013",
    url: "https://www.up.ac.za",
    description:
      "Design and development of systems within a chosen IT application environment, with adequate domain knowledge for consulting work.",
  },
  {
    institution: "Hoërskool Kempton Park",
    degree: "Matric",
    location: "Gauteng, South Africa",
    start: "2005",
    end: "2009",
    description:
      "Mathematics, Information Technology, Physical Science, Engineering Graphics and Design.",
  },
];

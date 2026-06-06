export type EventEntry = {
  name: string;
  organizer: string;
  location: string;
  date: string;
  url?: string;
  description: string;
};

export const events: EventEntry[] = [
  {
    name: "Microsoft Tech Summit Cape Town",
    organizer: "Microsoft",
    location: "Cape Town, South Africa",
    date: "Feb 2018",
    description:
      "Technical learning event covering Azure and Microsoft 365 with Microsoft's top cloud engineers.",
  },
  {
    name: "ScaleConf",
    organizer: "Africa's Premier Ruby Conference",
    location: "Cape Town, South Africa",
    date: "Mar 2017",
    url: "https://scaleconf.org",
    description:
      "International and local experts sharing experience scaling websites and services using modern technologies.",
  },
  {
    name: "RubyFuza",
    organizer: "Africa's Premier Ruby Conference",
    location: "Cape Town, South Africa",
    date: "Feb 2017",
    description:
      "Ruby conference fostering the Ruby programming language and its community in Africa.",
  },
  {
    name: "Microsoft Dev Day",
    organizer: "Microsoft",
    location: "Cape Town, South Africa",
    date: "Sep 2015",
    description:
      "In-depth sessions on building next-generation cloud solutions using Microsoft Azure and the Universal Windows Platform.",
  },
  {
    name: "Developing for Microsoft Azure",
    organizer: "Microsoft",
    location: "Cape Town, South Africa",
    date: "Oct 2015",
    description:
      "Focus on the Microsoft roadmap and developing for Windows and Cloud platforms, including monetisation options.",
  },
];

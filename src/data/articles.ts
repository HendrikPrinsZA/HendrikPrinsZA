export type ArticleEntry = {
  title: string;
  url: string;
  date: string;
  description: string;
};

export const articles: ArticleEntry[] = [
  {
    title: "Practical Guide: How to Build a Web Scraper with Laravel Actions",
    url: "https://medium.com/@hendrikprinsza/practical-guide-how-to-build-a-web-scraper-with-laravel-actions",
    date: "Mar 2023",
    description:
      "A walkthrough for building a simple web scraper from scratch using Laravel Actions.",
  },
  {
    title:
      "Laravel Kata: A Practical Way to Experiment with Performance Techniques",
    url: "https://medium.com/@hendrikprinsza/laravel-kata-a-practical-way-to-experiment-with-performance-techniques",
    date: "Mar 2023",
    description:
      "Using A/B testing to find the most optimal solution in native PHP, SQL, Laravel, Eloquent, and Redis.",
  },
  {
    title: "Automate Your Resume on GitHub",
    url: "https://medium.com/@hendrikprinsza/automate-your-resume-on-github",
    date: "Mar 2023",
    description:
      "With realtime updates and an interactive interface hosted for free.",
  },
  {
    title: "Uncovering the Fascinating Evolution of PHP",
    url: "https://medium.com/@hendrikprinsza/uncovering-the-fascinating-evolution-of-php-from-humble-beginnings-to-dominating-the-web",
    date: "Mar 2023",
    description: "A brief history of PHP from 1995 to 2023.",
  },
];

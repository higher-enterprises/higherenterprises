export type Enterprise = {
  name: string;
  eyebrow: string;
  description: string;
  logo?: string;
  hero?: string;
  href?: string;
};

export const enterprises: Enterprise[] = [
  { name: "RealSite", eyebrow: "Digital", description: "Digital infrastructure, websites, and business systems built for real-world companies.", logo: "/assets/enterprises/realsite-logo.png", hero: "/assets/enterprises/realsite-hero.png", href: "https://getarealsite.com" },
  { name: "Brick-And-Mortar", eyebrow: "Commerce", description: "Customer-first strategy for building, testing, and growing physical businesses.", logo: "/assets/enterprises/brick-and-mortar-logo.png", hero: "/assets/enterprises/brick-and-mortar-hero.png" },
  { name: "Waymaker Data", eyebrow: "Data", description: "Data systems and intelligence designed to turn information into clearer decisions.", logo: "/assets/enterprises/waymaker-data-logo.png", hero: "/assets/enterprises/waymaker-data-hero.png" },
  { name: "Shiloh Networks", eyebrow: "Networks", description: "Connected infrastructure and network services built to support organizations and communities.", logo: "/assets/enterprises/shiloh-networks-logo.png", hero: "/assets/enterprises/shiloh-networks-hero.png" },
  { name: "Spartan Industries", eyebrow: "Industry", description: "Operating company for products, services, and scalable industrial opportunities.", logo: "/assets/enterprises/spartan-industries-logo.png", hero: "/assets/enterprises/spartan-industries-hero.png" },
  { name: "Ultraists Media", eyebrow: "Media", description: "Media, storytelling, and creative production built around ideas worth carrying forward.", logo: "/assets/enterprises/ultraists-media-logo.png", hero: "/assets/enterprises/ultraists-media-hero.png" },
  { name: "Higher Company", eyebrow: "Strategy", description: "Corporate strategy and consulting for organizations building what comes next.", logo: "/assets/enterprises/higher-company-logo.png", hero: "/assets/enterprises/higher-company-hero.png" },
  { name: "Blue Eagle Venture Capital", eyebrow: "Capital", description: "Capital formation and investment infrastructure supporting the broader HIGHER ecosystem.", logo: "/assets/enterprises/blue-eagle-vc-logo.png", hero: "/assets/enterprises/blue-eagle-vc-hero.png" },
  { name: "Ogans Holdings", eyebrow: "Holdings", description: "Long-term ownership and stewardship of operating assets and strategic interests.", logo: "/assets/enterprises/ogans-holdings-logo.png", hero: "/assets/enterprises/ogans-holdings-hero.png" },
  { name: "Sibz Corporation", eyebrow: "Family + Youth", description: "Entertainment, products, and experiences created for children, siblings, and families.", logo: "/assets/enterprises/sibz-corporation-logo.png", hero: "/assets/enterprises/sibz-corporation-hero.png" },
  { name: "Above Worldwide", eyebrow: "Technology", description: "Emerging technology company exploring new ways to see, understand, and interact with the world.", logo: "/assets/enterprises/above-worldwide-logo.png", hero: "/assets/enterprises/above-worldwide-hero.png" },
  { name: "Alpha 7", eyebrow: "Enterprise", description: "An operating platform for building and extending new business opportunities.", logo: "/assets/enterprises/alpha7-logo.png", hero: "/assets/enterprises/alpha7-hero.png" },
];

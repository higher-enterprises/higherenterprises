export const stages = [
  { name:"Ideation", color:"#bdeff1" },{ name:"Validation", color:"#8bdde1" },{ name:"Conception", color:"#58cbd1" },{ name:"Formation", color:"#25b5bd" },{ name:"Acceleration", color:"#0b9ca8" },{ name:"Expansion", color:"#08798d" },{ name:"Acquisition", color:"#07546f" },
] as const;
export const studioOptions = [{"name": "SIBZ.VENTURES", "mark": "SI"}, {"name": "BLUEEAGLE.VENTURES", "mark": "BL"}, {"name": "CLEAVE.VENTURES", "mark": "CL"}, {"name": "BELOVED.VENTURES", "mark": "BE"}, {"name": "D2X.VENTURES", "mark": "D2"}, {"name": "TENTMAKER.VENTURES", "mark": "TE"}, {"name": "ACTS.VENTURES", "mark": "AC"}, {"name": "THANKWORTHY.VENTURES", "mark": "TH"}, {"name": "RAZED.VENTURES", "mark": "RA"}, {"name": "FLYY.VENTURES", "mark": "FL"}, {"name": "BLACK EAGLE.VENTURES", "mark": "BL"}, {"name": "ALPHA7.VENTURES", "mark": "AL"}] as const;
export const impacts = ["Economic Mobility", "Food & Nutrition", "Health & Wellbeing", "Learning & Opportunity", "Energy & Resilience", "Meaningful Work", "Innovation & Infrastructure", "Equity & Access", "Thriving Communities", "Justice & Strong Institutions", "Family & Relationships", "Faith & Spiritual Formation", "Youth Development", "Arts, Culture & Storytelling", "Entrepreneurship & Ownership", "Technology for Good", "Community Restoration"] as const;
export const tagOptions = ["AI", "B2B", "B2C", "Community", "Creator Economy", "Faith", "Family", "Global", "Government", "IoT", "Local", "Marketplace", "Mobile", "Physical + Digital", "SaaS", "Social Impact", "Youth"] as const;
export type Stage=typeof stages[number]["name"]; export type Impact=typeof impacts[number];
export type CompanyGalleryImage = { src: string; alt: string };
export type VentureBrief = { label?: string; href: string };
export type Company={name:string;studio:string;industry:string;stage:Stage;impacts:Impact[];description:string;image:string;logo?:string;tags:string[];businessModel?:string;customerType?:string;featured?:boolean;hero?:string;gallery?:CompanyGalleryImage[];ventureBrief?:VentureBrief};
export const companies:Company[]=[
{
    "name": "Scheddy",
    "studio": "BRICK-AND-MORTAR",
    "industry": "Business Software",
    "stage": "Formation",
    "impacts": [
      "Economic Mobility"
    ],
    "description": "Vertical scheduling and business-management software built specifically for tattoo artists and tattoo-industry workflows; being incubated through RealSite Ventures with an industry founder.",
    "image": "/assets/companies/registry/scheddy-card.png",
    "logo": "/assets/companies/registry/scheddy-logo.png",
    "tags": [
      "SaaS"
    ],
    "businessModel": "Software",
    "customerType": "B2B",
    "featured": true,
    "hero": "/assets/home/featured/scheddy-hero.png",
  },
{
    "name": "Real Site",
    "studio": "Higher",
    "industry": "Digital Transformation",
    "stage": "Expansion",
    "impacts": [
      "Economic Mobility"
    ],
    "description": "",
    "image": "/assets/companies/registry/real-site-card.png",
    "logo": "/assets/companies/registry/real-site-logo.png",
    "tags": [
      "SaaS"
    ],
    "businessModel": "Digital",
    "customerType": "B2B",
    "featured": false,
    "hero": "/assets/home/featured/real-site-hero.png",
  },
// {
//     "name": "Adopt-a-Meal",
//     "studio": "THANKWORTHY.VENTURES",
//     "industry": "Food & Hospitality",
//     "stage": "Ideation",
//     "impacts": [
//       "Food & Nutrition"
//     ],
//     "description": "Food-support venture enabling individuals, groups, or organizations to sponsor meals for people in need; exact operating model still to be refined.",
//     "image": "/assets/companies/registry/adopt-a-meal-card.jpg",
//     "logo": "/assets/companies/registry/adopt-a-meal-logo.png",
//     "tags": [
//       "B2C",
//       "Social Impact"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Agree.legal",
//     "studio": "CLEAVE.VENTURES",
//     "industry": "Legal Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Justice & Strong Institutions",
//       "Innovation & Infrastructure"
//     ],
//     "description": "Legal technology designed to help people negotiate, reach, structure, and document agreements, emphasizing resolution rather than adversarial litigation.",
//     "image": "/assets/companies/registry/agree-legal-card.jpg",
//     "logo": "/assets/companies/registry/agree-legal-logo.png",
//     "tags": [
//       "B2C"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Alpha7",
//     "studio": "ALPHA7.VENTURES",
//     "industry": "Health & Wellness",
//     "stage": "Validation",
//     "impacts": [
//       "Health & Wellbeing"
//     ],
//     "description": "Wellness platform bringing together tools, resources, experiences, and services that support personal well-being.",
//     "image": "/assets/companies/registry/alpha7-card.jpg",
//     "logo": "/assets/companies/registry/alpha7-logo.png",
//     "tags": [
//       "SaaS",
//       "Social Impact"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Altconomy",
//     "studio": "ALPHA7.VENTURES",
//     "industry": "Financial Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Backend token and transaction network designed to enable and account for non-cash economic exchanges across participating platforms and communities.",
//     "image": "/assets/companies/registry/altconomy-card.jpg",
//     "logo": "/assets/companies/registry/altconomy-logo.png",
//     "tags": [
//       "Marketplace",
//       "SaaS"
//     ],
//     "businessModel": "Marketplace, Software, Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Ballot",
//     "studio": "BLACK EAGLE.VENTURES",
//     "industry": "Civic Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Justice & Strong Institutions"
//     ],
//     "description": "Digital voting platform for conducting elections, polls, organizational votes, and other structured decision-making.",
//     "image": "/assets/companies/registry/ballot-card.jpg",
//     "logo": "/assets/companies/registry/ballot-logo.png",
//     "tags": [
//       "SaaS",
//       "Government"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Beautiful Repair",
    "studio": "BELOVED.VENTURES",
    "industry": "Health & Wellness",
    "stage": "Conception",
    "impacts": [
      "Health & Wellbeing",
      "Community Restoration"
    ],
    "description": "Mental-health and personal-restoration platform inspired by kintsugi, using visible repair and restoration as a framework for healing, storytelling, and community.",
    "image": "/assets/companies/registry/beautiful-repair-card.png",
    "logo": "/assets/companies/registry/beautiful-repair-logo.png",
    "tags": [
      "SaaS",
      "Community"
    ],
    "businessModel": "Software, Network",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/beautiful-repair-hero.png",
  },
// {
//     "name": "BlackLivesMattered",
//     "studio": "RAZED.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Ideation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Venture/concept in the incubator portfolio; exact product and operating definition still to be refined.",
//     "image": "/assets/companies/registry/blacklivesmattered-card.jpg",
//     "logo": "/assets/companies/registry/blacklivesmattered-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "BlessedPacks",
//     "studio": "THANKWORTHY.VENTURES",
//     "industry": "Emerging Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Innovation & Infrastructure",
//       "Community Restoration"
//     ],
//     "description": "Technology-enabled backpack and provision system for people experiencing homelessness, combining essential supplies with wearable/connected technology to better understand ongoing provision needs.",
//     "image": "/assets/companies/registry/blessedpacks-card.jpg",
//     "logo": "/assets/companies/registry/blessedpacks-logo.png",
//     "tags": [
//       "IoT",
//       "B2C",
//       "Social Impact",
//       "Physical + Digital"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "BlueChristmas",
//     "studio": "TENTMAKER.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Ideation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Venture/concept in the incubator portfolio; exact product and operating definition still to be refined.",
//     "image": "/assets/companies/registry/bluechristmas-card.jpg",
//     "logo": "/assets/companies/registry/bluechristmas-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "CALEB.AI",
//     "studio": "CLEAVE.VENTURES",
//     "industry": "Legal Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Family & Relationships",
//       "Justice & Strong Institutions"
//     ],
//     "description": "AI-powered platform connected to the family-law ecosystem, designed to help people understand, organize, and navigate complex family and legal situations.",
//     "image": "/assets/companies/registry/caleb-ai-card.jpg",
//     "logo": "/assets/companies/registry/caleb-ai-logo.png",
//     "tags": [
//       "AI",
//       "SaaS",
//       "Family",
//       "B2C"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "CLEAVE",
    "studio": "ACTS",
    "industry": "Family Technology",
    "stage": "Validation",
    "impacts": [
      "Family & Relationships"
    ],
    "description": "Dating app and social network centered on intentional courtship, marriage, and helping people form relationships with marriage as the objective.",
    "image": "/assets/companies/registry/cleave-card.jpg",
    "logo": "/assets/companies/registry/cleave-logo.png",
    "tags": [
      "Mobile",
      "Community",
      "Family",
      "B2C"
    ],
    "businessModel": "Network",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/cleave-hero.png",
  },
// {
//     "name": "Clothed",
//     "studio": "BELOVED.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Clothing-access platform connecting donated or available clothing with people who need it.",
//     "image": "/assets/companies/registry/clothed-card.jpg",
//     "logo": "/assets/companies/registry/clothed-logo.png",
//     "tags": [
//       "SaaS",
//       "B2C",
//       "Social Impact"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "CollectAgain",
//     "studio": "BLUEEAGLE.VENTURES",
//     "industry": "Commerce & Marketplace",
//     "stage": "Validation",
//     "impacts": [
//       "Entrepreneurship & Ownership"
//     ],
//     "description": "Collectibles ownership, trading, marketplace, provenance, and custody ecosystem connecting collectors and hobby shops through digital collections, local exchanges, Hobby Addresses, secure boxes, Vaults, and related services.",
//     "image": "/assets/companies/registry/collectagain-card.jpg",
//     "logo": "/assets/companies/registry/collectagain-logo.png",
//     "tags": [
//       "Marketplace",
//       "Local"
//     ],
//     "businessModel": "Marketplace",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Confectionate",
//     "studio": "BELOVED.VENTURES",
//     "industry": "Commerce & Marketplace",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "On-demand confection and sweets delivery platform connecting consumers with desserts, candy, baked goods, and confection providers.",
//     "image": "/assets/companies/registry/confectionate-card.jpg",
//     "logo": "/assets/companies/registry/confectionate-logo.png",
//     "tags": [
//       "SaaS",
//       "B2C"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "CropGap",
//     "studio": "RAZED.VENTURES",
//     "industry": "Climate & Energy",
//     "stage": "Ideation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Agriculture-related venture/concept in the incubator portfolio; exact product and operating definition still to be refined.",
//     "image": "/assets/companies/registry/cropgap-card.jpg",
//     "logo": "/assets/companies/registry/cropgap-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Dump Pass",
    "studio": "BLACK EAGLE.VENTURES",
    "industry": "Civic Technology",
    "stage": "Validation",
    "impacts": [
      "Justice & Strong Institutions",
      "Innovation & Infrastructure"
    ],
    "description": "QR-code distribution technology and municipal software helping local governments facilitate authorized resident waste disposal, dump access, verification, and related services.",
    "image": "/assets/companies/registry/dump-pass-card.png",
    "logo": "/assets/companies/registry/dump-pass-logo.png",
    "tags": [
      "SaaS",
      "Government",
      "Local"
    ],
    "businessModel": "Software",
    "customerType": "B2B",
    "featured": true,
    "hero": "/assets/home/featured/dump-pass-hero.png"
  },
// {
//     "name": "Dwelll",
//     "studio": "CLEAVE.VENTURES",
//     "industry": "Housing & Built Environment",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Housing discovery platform for finding available housing across multiple housing categories rather than limiting discovery to traditional apartments or homes for sale.",
//     "image": "/assets/companies/registry/dwelll-card.jpg",
//     "logo": "/assets/companies/registry/dwelll-logo.png",
//     "tags": [
//       "SaaS"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Electronogy",
//     "studio": "SIBZ.VENTURES",
//     "industry": "Education Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Learning & Opportunity",
//       "Youth Development",
//       "Innovation & Infrastructure",
//       "Community Restoration"
//     ],
//     "description": "Technology learning and maker community where children learn, experiment, and build with electronics and emerging technologies.",
//     "image": "/assets/companies/registry/electronogy-card.jpg",
//     "logo": "/assets/companies/registry/electronogy-logo.png",
//     "tags": [
//       "Community",
//       "Youth"
//     ],
//     "businessModel": "Network",
//     "customerType": "B2C",
//     "featured": true
//   },
// {
//     "name": "eTithes",
//     "studio": "ACTS.VENTURES",
//     "industry": "Faith Technology",
//     "stage": "Formation",
//     "impacts": [
//       "Faith & Spiritual Formation",
//       "Innovation & Infrastructure"
//     ],
//     "description": "Digital giving and tithing technology for churches, ministries, and their communities.",
//     "image": "/assets/companies/registry/etithes-card.jpg",
//     "logo": "/assets/companies/registry/etithes-logo.png",
//     "tags": [
//       "Faith"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2B",
//     "featured": false
//   },
// {
//     "name": "FatherhoodPlaybooks",
//     "studio": "D2X.VENTURES",
//     "industry": "Family Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Family & Relationships"
//     ],
//     "description": "Sports-themed fatherhood and mentorship platform providing practical playbooks for guiding sons and daughters, supported by a broader network of fathers and mentors.",
//     "image": "/assets/companies/registry/fatherhoodplaybooks-card.jpg",
//     "logo": "/assets/companies/registry/fatherhoodplaybooks-logo.png",
//     "tags": [
//       "SaaS",
//       "Family",
//       "Social Impact"
//     ],
//     "businessModel": "Software, Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Funner.Digital",
//     "studio": "FLYY.VENTURES",
//     "industry": "Emerging Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Innovation & Infrastructure"
//     ],
//     "description": "Interactive development studio creating digital experiences, interactive products, applications, and experiential technology.",
//     "image": "/assets/companies/registry/funner-digital-card.jpg",
//     "logo": "/assets/companies/registry/funner-digital-logo.png",
//     "tags": [
//       "Mobile",
//       "Creator Economy"
//     ],
//     "businessModel": "Media/IP",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Greenwood Technology",
//     "studio": "RAZED.VENTURES",
//     "industry": "Climate & Energy",
//     "stage": "Formation",
//     "impacts": [
//       "Innovation & Infrastructure"
//     ],
//     "description": "Emerging-technology company focused on applying new technologies to agriculture and agricultural communities.",
//     "image": "/assets/companies/registry/greenwood-technology-card.jpg",
//     "logo": "/assets/companies/registry/greenwood-technology-logo.png",
//     "tags": [
//       "Mobile"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Haggl",
//     "studio": "BLUEEAGLE.VENTURES",
//     "industry": "Emerging Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "AI-powered negotiation platform allowing buyers and sellers to negotiate deals digitally rather than relying entirely on fixed pricing.",
//     "image": "/assets/companies/registry/haggl-card.jpg",
//     "logo": "/assets/companies/registry/haggl-logo.png",
//     "tags": [
//       "AI",
//       "SaaS"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Handsy",
    "studio": "D2X",
    "industry": "Technology & Services",
    "stage": "Validation",
    "impacts": [
      "Community Restoration"
    ],
    "description": "Social DIY and handyman platform connecting do-it-yourselfers, skilled community members, and professional service providers around projects, instruction, and help.",
    "image": "/assets/companies/registry/handsy-card.png",
    "logo": "/assets/companies/registry/handsy-logo.png",
    "tags": [
      "SaaS",
      "Community"
    ],
    "businessModel": "Software, Network",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/handsy-hero.png"
  },
// {
//     "name": "Headless",
//     "studio": "ACTS.VENTURES",
//     "industry": "Faith Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Faith & Spiritual Formation"
//     ],
//     "description": "Connected church-management platform designed to link churches through shared digital infrastructure while allowing individual congregations to retain their identities and systems.",
//     "image": "/assets/companies/registry/headless-card.jpg",
//     "logo": "/assets/companies/registry/headless-logo.png",
//     "tags": [
//       "SaaS",
//       "Faith"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2B",
//     "featured": false
//   },
// {
//     "name": "HeyFam",
//     "studio": "CLEAVE.VENTURES",
//     "industry": "Family Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Family & Relationships"
//     ],
//     "description": "Private social network exclusively for family and relatives, with hosted/cloud or private on-premise deployment options.",
//     "image": "/assets/companies/registry/heyfam-card.jpg",
//     "logo": "/assets/companies/registry/heyfam-logo.png",
//     "tags": [
//       "Community",
//       "Family"
//     ],
//     "businessModel": "Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "HIM.Camp",
//     "studio": "D2X.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Leadership-development camp and experience designed specifically to develop men.",
//     "image": "/assets/companies/registry/him-camp-card.jpg",
//     "logo": "/assets/companies/registry/him-camp-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Hungry Neighbor",
//     "studio": "THANKWORTHY.VENTURES",
//     "industry": "Food & Hospitality",
//     "stage": "Validation",
//     "impacts": [
//       "Food & Nutrition",
//       "Economic Mobility",
//       "Community Restoration"
//     ],
//     "description": "Hyperlocal food-assistance platform connecting people who need food with neighbors, organizations, businesses, and available food resources nearby.",
//     "image": "/assets/companies/registry/hungry-neighbor-card.jpg",
//     "logo": "/assets/companies/registry/hungry-neighbor-logo.png",
//     "tags": [
//       "SaaS",
//       "Community",
//       "B2B",
//       "B2C",
//       "Local"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2B",
//     "featured": false
//   },
{
    "name": "Sippin",
    "studio": "BELOVED",
    "industry": "Food & Hospitality",
    "stage": "Validation",
    "impacts": [
      "Innovation & Infrastructure",
      "Community Restoration"
    ],
    "description": "Wine discovery, community, tourism, and winery technology platform connecting consumers with wineries, wine trails, events, experiences, and regional wine destinations.",
    "image": "/assets/companies/registry/sippin-card.png",
    "logo": "/assets/companies/registry/sippin-logo.png",
    "tags": [
      "SaaS",
      "Community",
      "B2C"
    ],
    "businessModel": "Software, Network",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/sippin-hero.png",
  },
// {
//     "name": "JesusFound.Me",
//     "studio": "TENTMAKER.VENTURES",
//     "industry": "Faith Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Faith & Spiritual Formation"
//     ],
//     "description": "Physical-to-digital testimony network using mini Jesus figurines placed in communities. Finders scan a QR code to view someone's testimony or inspiration, while the network maps where figures have been placed and found.",
//     "image": "/assets/companies/registry/jesusfound-me-card.jpg",
//     "logo": "/assets/companies/registry/jesusfound-me-logo.png",
//     "tags": [
//       "Faith",
//       "Physical + Digital"
//     ],
//     "businessModel": "Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "JourneyStep",
//     "studio": "TENTMAKER.VENTURES",
//     "industry": "Faith Technology",
//     "stage": "Conception",
//     "impacts": [
//       "Faith & Spiritual Formation"
//     ],
//     "description": "Global Christian identity and authentication network providing believers with a portable digital identity/passport that can authenticate them online and offline across participating faith-based systems.",
//     "image": "/assets/companies/registry/journeystep-card.jpg",
//     "logo": "/assets/companies/registry/journeystep-logo.png",
//     "tags": [
//       "Faith",
//       "Global"
//     ],
//     "businessModel": "Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Kalombay Solar",
//     "studio": "BLACK EAGLE.VENTURES",
//     "industry": "Climate & Energy",
//     "stage": "Validation",
//     "impacts": [
//       "Innovation & Infrastructure"
//     ],
//     "description": "African solar-energy company developing and deploying solar and related energy solutions for African communities and markets.",
//     "image": "/assets/companies/registry/kalombay-solar-card.jpg",
//     "logo": "/assets/companies/registry/kalombay-solar-logo.png",
//     "tags": [
//       "Global"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Kamp",
//     "studio": "BLUEEAGLE.VENTURES",
//     "industry": "Housing & Built Environment",
//     "stage": "Validation",
//     "impacts": [
//       "Innovation & Infrastructure"
//     ],
//     "description": "IoT-enabled camping platform for discovering available campsites, identifying where people are camping, and connecting physical camping locations through networked technology.",
//     "image": "/assets/companies/registry/kamp-card.jpg",
//     "logo": "/assets/companies/registry/kamp-logo.png",
//     "tags": [
//       "SaaS",
//       "IoT",
//       "B2C"
//     ],
//     "businessModel": "Software, Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Laughology",
//     "studio": "FLYY.VENTURES",
//     "industry": "Entertainment & Media",
//     "stage": "Validation",
//     "impacts": [
//       "Arts, Culture & Storytelling"
//     ],
//     "description": "Comedy creator and entertainment network combining a TikTok-like comedy experience with AI tools designed to help aspiring stand-up comedians develop material and grow as performers.",
//     "image": "/assets/companies/registry/laughology-card.jpg",
//     "logo": "/assets/companies/registry/laughology-logo.png",
//     "tags": [
//       "AI",
//       "Creator Economy"
//     ],
//     "businessModel": "Network, Media/IP",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Locataria",
//     "studio": "RAZED.VENTURES",
//     "industry": "Commerce & Marketplace",
//     "stage": "Validation",
//     "impacts": [
//       "Economic Mobility"
//     ],
//     "description": "Local-commerce advocacy and rewards platform encouraging consumers to eat, shop, buy, and participate locally while rewarding those behaviors.",
//     "image": "/assets/companies/registry/locataria-card.jpg",
//     "logo": "/assets/companies/registry/locataria-logo.png",
//     "tags": [
//       "SaaS",
//       "B2C",
//       "Local"
//     ],
//     "businessModel": "Software, Commerce",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "LOOOT",
//     "studio": "BLUEEAGLE.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Location-based treasure-hunting and geocaching platform that turns real-world places into interactive discovery experiences involving digital and physical rewards.",
//     "image": "/assets/companies/registry/looot-card.jpg",
//     "logo": "/assets/companies/registry/looot-logo.png",
//     "tags": [
//       "SaaS"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Mentor180",
    "studio": "THANKWORTHY",
    "industry": "Technology & Services",
    "stage": "Validation",
    "impacts": [
      "Technology for Good"
    ],
    "description": "Mentorship software for establishing, managing, measuring, and supporting mentor/mentee relationships and programs.",
    "image": "/assets/companies/registry/mentor180-card.png",
    "logo": "/assets/companies/registry/mentor180-logo.png",
    "tags": [
      "SaaS",
      "Social Impact"
    ],
    "businessModel": "Software",
    "customerType": "B2C",
    "featured": false,
     "hero": "/assets/home/featured/mentor180-hero.png",
  },
{
    "name": "Sibz Corporation",
    "studio": "HIGHER",
    "industry": "Education Technology",
    "stage": "Validation",
    "impacts": [
      "Learning & Opportunity",
      "Youth Development"
    ],
    "description": "Education SaaS platform giving parents organized access to their children's complete student records while helping schools manage and deliver cumulative-file information digitally.",
    "image": "/assets/companies/registry/sibz-card.png",
    "logo": "/assets/companies/registry/sibz-logo.png",
    "tags": [
      "SaaS",
      "Youth"
    ],
    "businessModel": "Software",
    "customerType": "B2C",
    "featured": false,
    "hero": "/assets/home/featured/sibz-hero.png"
  },
// {
//     "name": "Meronothite",
//     "studio": "FLYY.VENTURES",
//     "industry": "Entertainment & Media",
//     "stage": "Validation",
//     "impacts": [
//       "Arts, Culture & Storytelling"
//     ],
//     "description": "Game studio developing original video games and interactive entertainment properties.",
//     "image": "/assets/companies/registry/meronothite-card.jpg",
//     "logo": "/assets/companies/registry/meronothite-logo.png",
//     "tags": [
//       "Creator Economy"
//     ],
//     "businessModel": "Media/IP",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "MetroBarter",
//     "studio": "RAZED.VENTURES",
//     "industry": "Financial Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Economic Mobility"
//     ],
//     "description": "Business-to-business barter network enabling businesses to exchange products, services, inventory, and unused capacity without requiring conventional cash for every exchange.",
//     "image": "/assets/companies/registry/metrobarter-card.jpg",
//     "logo": "/assets/companies/registry/metrobarter-logo.png",
//     "tags": [
//       "Marketplace",
//       "B2B"
//     ],
//     "businessModel": "Marketplace, Network",
//     "customerType": "B2B",
//     "featured": false
//   },
// {
//     "name": "Musickal",
//     "studio": "TENTMAKER.VENTURES",
//     "industry": "Faith Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Faith & Spiritual Formation",
//       "Arts, Culture & Storytelling",
//       "Community Restoration"
//     ],
//     "description": "Gospel music streaming platform and community built around discovering, listening to, sharing, and engaging with gospel music and its creators.",
//     "image": "/assets/companies/registry/musickal-card.jpg",
//     "logo": "/assets/companies/registry/musickal-logo.png",
//     "tags": [
//       "SaaS",
//       "Community",
//       "Faith",
//       "Creator Economy"
//     ],
//     "businessModel": "Software, Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "NoAllowance",
//     "studio": "SIBZ.VENTURES",
//     "industry": "Education Technology",
//     "stage": "Formation",
//     "impacts": [
//       "Youth Development",
//       "Economic Mobility",
//       "Entrepreneurship & Ownership"
//     ],
//     "description": "Children's entrepreneurship platform combining startup software with physical/digital business kits that help kids create and operate real businesses.",
//     "image": "/assets/companies/registry/noallowance-card.jpg",
//     "logo": "/assets/companies/registry/noallowance-logo.png",
//     "tags": [
//       "SaaS",
//       "Youth",
//       "B2B"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2B",
//     "featured": false
//   },
// {
//     "name": "OpenCloset",
//     "studio": "BELOVED.VENTURES",
//     "industry": "Commerce & Marketplace",
//     "stage": "Validation",
//     "impacts": [
//       "Entrepreneurship & Ownership"
//     ],
//     "description": "Clothing-sharing and rental marketplace allowing people to make underused clothing available to others rather than requiring every garment to be individually purchased.",
//     "image": "/assets/companies/registry/opencloset-card.jpg",
//     "logo": "/assets/companies/registry/opencloset-logo.png",
//     "tags": [
//       "Marketplace",
//       "B2C"
//     ],
//     "businessModel": "Marketplace",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Partsy, Inc.",
    "studio": "D2X",
    "industry": "Commerce & Marketplace",
    "stage": "Acceleration",
    "impacts": [
      "Entrepreneurship & Ownership"
    ],
    "description": "AI-powered parts discovery and marketplace where users photograph or describe a needed part and receive identification, fit/compatibility analysis, provider inventory, and external sourcing options.",
    "image": "/assets/companies/registry/partsy-card.png",
    "logo": "/assets/companies/registry/partsy-logo.png",
    "tags": [
      "AI",
      "Marketplace"
    ],
    "businessModel": "Marketplace",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/partsy-hero.png"
  },
// {
//     "name": "PoppinFinancial",
//     "studio": "SIBZ.VENTURES",
//     "industry": "Education Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Learning & Opportunity",
//       "Youth Development",
//       "Economic Mobility"
//     ],
//     "description": "Financial-literacy platform providing children with education, tools, and practical experiences for learning how money and personal finance work.",
//     "image": "/assets/companies/registry/poppinfinancial-card.jpg",
//     "logo": "/assets/companies/registry/poppinfinancial-logo.png",
//     "tags": [
//       "SaaS",
//       "Youth"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Pro-Per Legal",
//     "studio": "CLEAVE.VENTURES",
//     "industry": "Legal Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Justice & Strong Institutions",
//       "Innovation & Infrastructure"
//     ],
//     "description": "Legal technology platform for self-represented litigants, providing information, organization, workflows, and AI-assisted tools for navigating the legal system without traditional full-service representation.",
//     "image": "/assets/companies/registry/pro-per-legal-card.jpg",
//     "logo": "/assets/companies/registry/pro-per-legal-logo.png",
//     "tags": [
//       "SaaS"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Provenance",
//     "studio": "ALPHA7.VENTURES",
//     "industry": "Financial Technology",
//     "stage": "Ideation",
//     "impacts": [
//       "Economic Mobility",
//       "Entrepreneurship & Ownership"
//     ],
//     "description": "Shared asset identity, ownership, custody, transaction, and history infrastructure capable of supporting CollectAgain, Partsy, TradeBowl, MetroBarter, and other marketplaces; final company/brand name remains to be determined.",
//     "image": "/assets/companies/registry/provenance-card.jpg",
//     "logo": "/assets/companies/registry/provenance-logo.png",
//     "tags": [
//       "Marketplace",
//       "Social Impact"
//     ],
//     "businessModel": "Marketplace",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "RAMP",
//     "studio": "BLACK EAGLE.VENTURES",
//     "industry": "Technology & Services",
//     "stage": "Ideation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Venture currently in the incubator portfolio; exact product and operating definition still to be refined.",
//     "image": "/assets/companies/registry/ramp-card.jpg",
//     "logo": "/assets/companies/registry/ramp-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Red Panda Technology",
//     "studio": "SIBZ.VENTURES",
//     "industry": "Entertainment & Media",
//     "stage": "Validation",
//     "impacts": [
//       "Arts, Culture & Storytelling",
//       "Innovation & Infrastructure"
//     ],
//     "description": "Consumer technology company developing a handheld gaming system centered on classic and retro-style video games.",
//     "image": "/assets/companies/registry/red-panda-technology-card.jpg",
//     "logo": "/assets/companies/registry/red-panda-technology-logo.png",
//     "tags": [
//       "B2C",
//       "Physical + Digital"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "ReverseTab",
//     "studio": "THANKWORTHY.VENTURES",
//     "industry": "Financial Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Food & Nutrition"
//     ],
//     "description": "Pay-it-forward restaurant and coffee-shop network allowing someone to purchase a meal or drink for another person to redeem later.",
//     "image": "/assets/companies/registry/reversetab-card.jpg",
//     "logo": "/assets/companies/registry/reversetab-logo.png",
//     "tags": [],
//     "businessModel": "Network",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "ShovelFlag",
//     "studio": "BLACK EAGLE.VENTURES",
//     "industry": "Emerging Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Innovation & Infrastructure"
//     ],
//     "description": "Connected shovel/field device incorporating IoT and LoRa-type communications technology to establish decentralized communications nodes, with deployable flags providing visible physical markers.",
//     "image": "/assets/companies/registry/shovelflag-card.jpg",
//     "logo": "/assets/companies/registry/shovelflag-logo.png",
//     "tags": [
//       "IoT",
//       "Physical + Digital"
//     ],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "StudioJadon",
//     "studio": "FLYY.VENTURES",
//     "industry": "Entertainment & Media",
//     "stage": "Conception",
//     "impacts": [
//       "Arts, Culture & Storytelling"
//     ],
//     "description": "Biblical anime and IP studio developing faith-centered characters, worlds, stories, animation, games, and related entertainment properties.",
//     "image": "/assets/companies/registry/studiojadon-card.jpg",
//     "logo": "/assets/companies/registry/studiojadon-logo.png",
//     "tags": [
//       "Creator Economy"
//     ],
//     "businessModel": "Media/IP",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Teeny Builders",
//     "studio": "RAZED.VENTURES",
//     "industry": "Housing & Built Environment",
//     "stage": "Validation",
//     "impacts": [
//       "Technology for Good"
//     ],
//     "description": "Tiny-home company focused on designing, building, and potentially deploying accessible small-footprint housing.",
//     "image": "/assets/companies/registry/teeny-builders-card.jpg",
//     "logo": "/assets/companies/registry/teeny-builders-logo.png",
//     "tags": [],
//     "businessModel": "Service / Platform",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "Thankworthy App",
//     "studio": "THANKWORTHY.VENTURES",
//     "industry": "Financial Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Faith & Spiritual Formation",
//       "Economic Mobility"
//     ],
//     "description": "Missionary-support platform connecting missionaries with individuals and communities that want to financially and practically support their work.",
//     "image": "/assets/companies/registry/thankworthy-app-card.jpg",
//     "logo": "/assets/companies/registry/thankworthy-app-logo.png",
//     "tags": [
//       "SaaS",
//       "Mobile",
//       "Faith",
//       "B2C",
//       "Social Impact"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2C",
//     "featured": false
//   },
// {
//     "name": "The Daddy Store",
//     "studio": "D2X.VENTURES",
//     "industry": "Education Technology",
//     "stage": "Validation",
//     "impacts": [
//       "Youth Development",
//       "Entrepreneurship & Ownership"
//     ],
//     "description": "Online store network where dads operate stores that reward their children and others while giving children practical entrepreneurship experience through retail management, selling, and creating their own products and services.",
//     "image": "/assets/companies/registry/the-daddy-store-card.jpg",
//     "logo": "/assets/companies/registry/the-daddy-store-logo.png",
//     "tags": [
//       "SaaS",
//       "Youth"
//     ],
//     "businessModel": "Network, Commerce",
//     "customerType": "B2C",
//     "featured": false
//   },
{
    "name": "Trade Bowl",
    "studio": "FLYY.VENTURES",
    "industry": "Financial Technology",
    "stage": "Validation",
    "impacts": [
      "Economic Mobility",
      "Entrepreneurship & Ownership"
    ],
    "description": "Consumer peer-to-peer barter marketplace enabling people to exchange products and services directly rather than requiring money for every transaction.",
    "image": "/assets/companies/registry/tradebowl-card.png",
    "logo": "/assets/companies/registry/tradebowl-logo.png",
    "tags": [
      "Marketplace",
      "B2C"
    ],
    "businessModel": "Marketplace",
    "customerType": "B2C",
    "featured": true,
    "hero": "/assets/home/featured/tradebowl-hero.png",
  },
// {
//     "name": "Velman",
//     "studio": "D2X.VENTURES",
//     "industry": "Business Software",
//     "stage": "Validation",
//     "impacts": [
//       "Economic Mobility"
//     ],
//     "description": "Vertical operating system for barbershops, bringing the core functions needed to operate and grow a modern barber business into one platform.",
//     "image": "/assets/companies/registry/velman-card.jpg",
//     "logo": "/assets/companies/registry/velman-logo.png",
//     "tags": [
//       "SaaS"
//     ],
//     "businessModel": "Software",
//     "customerType": "B2B",
//     "featured": false
//   },
{
    "name": "Wee Worker",
    "studio": "SIBZ.VENTURES",
    "industry": "Education Technology",
    "stage": "Ideation",
    "impacts": [
      "Youth Development",
      "Entrepreneurship & Ownership"
    ],
    "description": "Youth work and entrepreneurship platform within the broader children's economic-development ecosystem; exact product definition still needs refinement.",
    "image": "/assets/companies/registry/wee-worker-card.png",
    "logo": "/assets/companies/registry/wee-worker-logo.png",
    "tags": [
      "SaaS",
      "Youth"
    ],
    "businessModel": "Software",
    "customerType": "B2C",
    "featured": false,
    "hero": "/assets/home/featured/wee-worker-hero.png",
  },
] as Company[];
export const industries=["ALL",...Array.from(new Set(companies.map(c=>c.industry)))];

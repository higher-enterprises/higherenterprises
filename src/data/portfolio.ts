export type PortfolioItem = {
  name: string;
  studio: string;
  category: string;
  stage: string;
  description: string;
};

export const portfolio: PortfolioItem[] = [
  { name:"SIBZ", studio:"SIBZ.VENTURES", category:"Youth", stage:"Building", description:"A venture ecosystem designed to let K–12 creators build together by contribution and capability." },
  { name:"CollectAgain", studio:"SIBZ.VENTURES", category:"Marketplace", stage:"MVP", description:"A provenance-first collectibles marketplace and local exchange network." },
  { name:"Partsy", studio:"BLUEEAGLE.VENTURES", category:"Automotive", stage:"MVP", description:"A visual and conversational marketplace for finding the right part from multiple sources." },
  { name:"World Rebuilders", studio:"FLYY.VENTURES", category:"Interactive", stage:"Concept", description:"A digital world where player activity connects to measurable real-world rebuilding." },
  { name:"Meronothite Interactive", studio:"FLYY.VENTURES", category:"Games", stage:"Building", description:"Interactive entertainment focused on world rebuilding and meaningful play." },
  { name:"CALEB.AI", studio:"CLEAVE.VENTURES", category:"Family", stage:"Concept", description:"Technology exploring healthier family relationships and support." },
  { name:"Agree.legal", studio:"CLEAVE.VENTURES", category:"Legal", stage:"Concept", description:"Tools intended to reduce conflict and improve agreement-centered family processes." },
  { name:"Greenwood Labs", studio:"RAZED.VENTURES", category:"Economic Development", stage:"Building", description:"A venture-building platform for historically razed and disinvested communities." },
  { name:"Tentmaker", studio:"TENTMAKER.VENTURES", category:"Faith + Business", stage:"Building", description:"A venture studio for entrepreneurs integrating business, vocation and ministry." },
  { name:"ACTS", studio:"ACTS.VENTURES", category:"Church Enterprise", stage:"Concept", description:"A studio helping churches develop sustainable enterprises and economic capacity." },
  { name:"Thankworthy", studio:"THANKWORTHY.VENTURES", category:"Social Enterprise", stage:"Concept", description:"A studio for nonprofit and mission-driven venture creation." },
  { name:"Alpha7", studio:"ALPHA7.VENTURES", category:"Corporate Innovation", stage:"Concept", description:"Corporate venture creation, innovation and spinout development." }
];

export const studios = [
  "ALL",
  "SIBZ.VENTURES",
  "BLUEEAGLE.VENTURES",
  "CLEAVE.VENTURES",
  "BELOVED.VENTURES",
  "D2X.VENTURES",
  "TENTMAKER.VENTURES",
  "ACTS.VENTURES",
  "THANKWORTHY.VENTURES",
  "RAZED.VENTURES",
  "FLYY.VENTURES",
  "BLACK EAGLE.VENTURES",
  "ALPHA7.VENTURES"
];

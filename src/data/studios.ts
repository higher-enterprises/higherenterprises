export type Studio = {
  slug: string;
  name: string;
  focus: string;
  mark: string;
  image: string;
  detail?: string;
};

export const studios: Studio[] = [
  { slug:"realsite", name:"REALSITE", focus:"Small Business", mark:"R", image:"/assets/studios/realsite.png", detail:"A venture studio helping small businesses turn experience, ideas, and overlooked opportunities into new ventures built to grow." },
  { slug:"brick-and-mortar", name:"BRICK-AND-MORTAR", focus:"Local Business", mark:"B&M", image:"/assets/studios/brick-and-mortar.png", detail:"A venture studio for building businesses rooted in physical places — shops, services, destinations, and other ventures that strengthen local economies." },
  { slug:"razed", name:"RAZED", focus:"Black Business", mark:"R", image:"/assets/studios/razed.png", detail:"A venture studio focused on rebuilding African American business ownership and economic ecosystems in communities where they were historically torn down." },
  { slug:"oikos", name:"OIKOS", focus:"Families", mark:"O", image:"/assets/studios/oikos.png", detail:"A family venture studio where households turn their collective ideas, talents, resources, and ambitions into businesses they can build together." },
  { slug:"ourblock", name:"OURBLOCK", focus:"Neighborhoods", mark:"OB", image:"/assets/studios/ourblock.png", detail:"A neighborhood venture studio where neighbors identify shared opportunities and build businesses that create value, ownership, and economic strength within their communities." },
  { slug:"beloved", name:"BELOVED", focus:"Women", mark:"B", image:"/assets/studios/beloved.png", detail:"A venture studio where women collaborate around ideas, opportunities, and shared experiences to create and grow new businesses." },
  { slug:"d2x", name:"D2X", focus:"Men", mark:"D2X", image:"/assets/studios/d2x.png", detail:"A venture studio where men build businesses together around opportunity, responsibility, purpose, and generational economic impact." },
  { slug:"thankworthy", name:"THANKWORTHY", focus:"Nonprofits", mark:"✦", image:"/assets/studios/thankworthy.png", detail:"A venture studio helping nonprofits and mission-driven organizations develop sustainable enterprises that expand both their impact and economic capacity." },
  { slug:"k12", name:"K12", focus:"Schools", mark:"K12", image:"/assets/studios/k12.png", detail:"A venture studio where K–12 students and school communities turn ideas, abilities, and real-world problems into ventures they can build together." },
  { slug:"dormroom", name:"DORMROOM", focus:"College", mark:"DR", image:"/assets/studios/dormroom.png", detail:"A college venture studio where students build companies together, create new ways to support their education, and turn campus communities into engines of entrepreneurship." },
  { slug:"sibz", name:"SIBZ", focus:"Young People", mark:"S", image:"/assets/studios/sibz.png", detail:"A venture studio giving young people an independent place to turn their own ideas, talents, and collaborations into real businesses beyond school or household structures." },
  { slug:"farmer", name:"FARMER", focus:"Agriculture", mark:"F", image:"/assets/studios/farmer.png", detail:"A venture studio built with farmers, turning problems and opportunities discovered across agricultural communities into companies, platforms, and new economic opportunities." },
  { slug:"acts", name:"ACTS", focus:"Churches", mark:"▲", image:"/assets/studios/acts.png", detail:"A venture studio where churches build sustainable enterprises together to create employment, generate resources, serve communities, and strengthen the economic capacity of the body of Christ." },
  { slug:"tentmaker", name:"TENTMAKER", focus:"Ministry", mark:"✝", image:"/assets/studios/tentmaker.png", detail:"A venture studio helping pastors, missionaries, evangelists, and ministry workers build sustainable sources of income so their calling does not have to depend entirely on donations." },
  { slug:"blue-eagle", name:"BLUE EAGLE", focus:"Public Problems", mark:"◢", image:"/assets/studios/blue-eagle.png", detail:"A civic venture studio building practical solutions to community and public problems that government alone cannot effectively solve." },
];

export const perspectives = [
  ["Faith","We lead by conviction, not convenience — anchoring everything we do in a higher purpose and eternal perspective."],
  ["Foundation","We build on truth, integrity, and lasting principles — creating strong structures that can endure and scale."],
  ["Framework","We bring structure to vision — turning ideas into actionable plans that drive real progress."],
  ["Fitness","We test, strengthen, and prepare ventures to survive reality and perform with discipline."],
  ["Fellowship","We surround builders with relationships, mentors, partners, collaborators, and community."],
  ["Fences","We define the field with clear standards and guardrails so healthy things can grow."],
  ["Freedom","We build toward mature ventures and people with the freedom to operate, grow, and multiply."]
] as const;

export const media=[
{slug:"fatherhood-playbooks",title:"Fatherhood Playbooks",type:"Conversations",source:"D2X",description:"Conversations about presence, mentorship, fatherhood, and raising the next generation."},
{slug:"realsite",title:"RealSite Builds People",type:"Series",source:"RealSite",description:"Inside the people, businesses, and systems being built for the real world."},
{slug:"ancient-path",title:"The Ancient Path",type:"Documentary",source:"Higher Academy",description:"A cinematic journey through faith, formation, history, and enduring questions."},
{slug:"journey-within",title:"The Journey Within",type:"Higher Original",source:"Higher.One",description:"Stories about identity, purpose, calling, and the road back to what matters most."},
{slug:"called-to-build",title:"Called to Build",type:"Series",source:"Tentmaker",description:"Builders, founders, and creators pursuing work as vocation and stewardship."},
{slug:"greater-view",title:"A Greater View",type:"Documentary",source:"Above",description:"Technology, discovery, and what becomes visible when we learn to see from above."},
{slug:"beautiful-repair",title:"Beautiful Repair",type:"Podcast",source:"BeautifulRepair",description:"Conversations about brokenness, restoration, and beauty carried by visible repair."}
].map(x=>({...x,image:`/assets/innertainment/${x.slug}.jpg`,wide:`/assets/innertainment/${x.slug}-wide.jpg`}));

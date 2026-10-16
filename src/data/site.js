// All site content lives here so it can be edited in one place.

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phones: [
    { label: "+91 76207 03298", href: "tel:+917620703298" },
    { label: "+91 90215 07499", href: "tel:+919021507499" },
  ],
  whatsapp: "https://wa.me/917620703298",
  email: "23dstudiodesign@gmail.com",
  address:
    "Shop No. 1, Sahnivas Co-op. Society, Sharanpur Road, Adwait Colony, P&T Colony, Nashik, Maharashtra 422005",
  addressShort: "Shop No. 1, Sahnivas Co-op. Society, Sharanpur Road, Nashik 422005",
  hours: "[Days], [Hours]", // TODO: add real opening hours
  maps: "https://www.google.com/maps/search/?api=1&query=Sharanpur+Road+Adwait+Colony+Nashik+422005",
};

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/23dstudio__/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/23dstudio/" },
  { label: "Behance", href: "https://www.behance.net/23dstudio_" },
  { label: "YouTube", href: "https://www.youtube.com/@23D.DesignStudio" },
];

export const SERVICES = [
  {
    title: "Architectural visualization",
    video: "/media/reel-arch.mp4",
    text: "Stunning 3D renders and walkthroughs that bring architectural ideas to life and help clients see a project before it is built.",
    includes: ["Exterior and interior renders", "Walkthrough animations", "Site plans and landscape views"],
  },
  {
    title: "Product visualization",
    video: "/media/reel-product.mp4",
    text: "Detailed renders that highlight the textures, shapes and function of your products.",
    includes: ["Photoreal product renders", "Packaging shots", "Launch visuals"],
  },
  {
    title: "Event and exhibition design",
    video: "/media/reel-expo.mp4",
    text: "Custom-designed booths that attract attention and strengthen your brand presence on the show floor.",
    includes: ["Booth and stall design", "Stage sets", "Layout planning and 3D walkthroughs"],
  },
  {
    title: "Branding and identity",
    video: "/media/reel-brand.mp4",
    text: "Strong brand identities with logos, guidelines and visuals that communicate your unique story and build lasting impressions.",
    includes: ["Logo design", "Brand guidelines", "Stationery and packaging"],
  },
  {
    title: "Marketing and promotional design",
    video: "/media/reel-mkt.mp4",
    text: "Creative campaigns that make your brand stand out, from social media to print and digital marketing.",
    includes: ["Social media creatives", "Print collateral", "Digital campaigns"],
  },
];

export const STATS = [
  { value: 2025, label: "Founded in Nashik" },
  { value: 5, label: "Disciplines under one roof" },
  { value: 9, label: "Designers, artists and developers" },
  { value: 15, suffix: "+", label: "Brands we have worked with" },
];

export const VALUES = [
  { title: "Collaboration", text: "We believe great ideas are born through meaningful partnerships." },
  { title: "Innovation", text: "Our solutions push boundaries and embrace the future." },
  { title: "Creativity", text: "Every project is a canvas where imagination meets precision." },
  { title: "Craftsmanship", text: "Attention to every detail, from concept to finish." },
];

export const PROCESS = [
  { title: "Research", text: "Understanding your vision, context and goals." },
  { title: "Concept", text: "Ideation and concept development from scratch." },
  { title: "Design", text: "Translating insights into creative, practical solutions." },
  { title: "Execution", text: "Delivering with precision, detail and collaboration." },
];

export const TIMELINE = [
  {
    title: "Our philosophy",
    text: "Design is more than aesthetics — it is the bridge between ideas and impact. Every project is a chance to shape perception, simplify complexity and create meaningful connections.",
  },
  {
    title: "Our journey",
    text: "Founded in 2025 in Nashik, Maharashtra, with a mission to unite branding, environment and digital into seamless experiences, fuelled by curiosity, integrity and attention to detail.",
  },
  {
    title: "The future ahead",
    text: "A future where design and technology merge seamlessly, creating experiences that last — empowering businesses and inspiring communities.",
  },
];

export const TEAM = [
  { name: "Gaurav Duse", role: "Founder and principal designer", photo: "/media/t1.jpg" },
  { name: "Bhushan Bhavsar", role: "Product designer", photo: "/media/t2.jpg" },
  { name: "Sarthak Jejurkar", role: "UI/UX designer", photo: "/media/t3.jpg" },
  { name: "Ritika Yeole", role: "Interior designer", photo: "/media/t8.jpg" },
  { name: "Vickey Yadav", role: "Graphic designer", photo: "/media/t9.jpg" },
  { name: "Amar Borse", role: "Web developer", photo: "/media/t5.jpg" },
  { name: "Pratiksha Duse", role: "2D artist", photo: "/media/t6.jpg" },
  { name: "Yash Duse", role: "Social media manager", photo: "/media/t7.jpg" },
  { name: "Yash Godbole", role: "Accounts", photo: "/media/t4.jpg" },
];

export const THREE_D = [
  { src: "/media/3d-carousel.mp4", title: "3D render carousel", text: "Our architecture, interior and exhibition renders orbiting in 3D space." },
  { src: "/media/3d-flythrough.mp4", title: "Studio fly-through", text: "A camera journey through layers of our work." },
  { src: "/media/3d-layers.mp4", title: "Exploded layers", text: "How a project builds up, layer by layer." },
];

export const WORK = [
  { src: "/media/3d-carousel.mp4", title: "3D render carousel", cat: "3D", tall: true, video: true },
  { src: "/media/3d-flythrough.mp4", title: "Studio fly-through", cat: "3D", video: true },
  { src: "/media/3d-layers.mp4", title: "Exploded layers", cat: "3D", video: true },
  { src: "/media/reel-arch.mp4", title: "Architecture reel", cat: "Architecture", tall: true, video: true },
  { src: "/media/w1.jpg", title: "Residential elevation", cat: "Architecture" },
  { src: "/media/feature.jpg", title: "Living and dining interior", cat: "Interiors", tall: true },
  { src: "/media/reel-expo.mp4", title: "Exhibition reel", cat: "Exhibition", video: true },
  { src: "/media/a2.jpg", title: "Modern villa exterior", cat: "Architecture" },
  { src: "/media/w5.jpg", title: "Glass bottle render", cat: "Product", tall: true },
  { src: "/media/reel-brand.mp4", title: "Branding reel", cat: "Branding", video: true },
  { src: "/media/w3.jpg", title: "Exhibition stall", cat: "Exhibition" },
  { src: "/media/b1.jpg", title: "Corporate stationery", cat: "Branding" },
  { src: "/media/reel-product.mp4", title: "Product reel", cat: "Product", tall: true, video: true },
  { src: "/media/a1.jpg", title: "Minimal living room", cat: "Interiors" },
  { src: "/media/e1.jpg", title: "Event stage design", cat: "Exhibition" },
  { src: "/media/reel-mkt.mp4", title: "Marketing reel", cat: "Marketing", video: true },
  { src: "/media/w7.jpg", title: "Trade fair booth", cat: "Exhibition", tall: true },
  { src: "/media/p3.jpg", title: "Fragrance campaign", cat: "Product" },
  { src: "/media/w4.jpg", title: "Brand identity system", cat: "Branding" },
  { src: "/media/m1.jpg", title: "Social media campaign", cat: "Marketing" },
  { src: "/media/w8.jpg", title: "Website concept", cat: "Marketing" },
  { src: "/media/p4.jpg", title: "Headphone packaging", cat: "Product" },
  { src: "/media/w6.jpg", title: "Concrete brand posters", cat: "Branding", tall: true },
  { src: "/media/e2.jpg", title: "Showroom display", cat: "Exhibition" },
  { src: "/media/w9.jpg", title: "Embossed stationery", cat: "Branding" },
];

export const FAQ = [
  {
    q: "What services does 23D Studio offer?",
    a: "Architectural visualization, product visualization, event and exhibition design, branding and identity, and marketing and promotional design.",
  },
  { q: "Where is the studio based?", a: "Our studio is in Nashik, Maharashtra, and we work with clients across India." },
  {
    q: "How do we start a project?",
    a: "Send us an enquiry with a few details about your project. We will set up a call to understand your vision, context and goals.",
  },
];

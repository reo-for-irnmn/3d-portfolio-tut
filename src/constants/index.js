const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
];

const counterItems = [
  { value: 6, suffix: "+", label: "経験年数" },
  { value: 100, suffix: "+", label: "顧客数" },
  { value: 58, suffix: "+", label: "完了案件" },
  { value: 90, suffix: "%", label: "リピート率" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "クオリティ第一",
    desc: "細部にまで気を配りながら、質の高い成果を出しています。",
  },
  {
    imgPath: "/images/chat.png",
    title: "コミュニケーション",
    desc: "透明性と明確性を確保するため、あらゆる段階で進捗を共有します。",
  },
  {
    imgPath: "/images/time.png",
    title: "納期厳守",
    desc: "プロジェクトが高品質で細部まで配慮され、スケジュール通りに完了するようにします。",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "REOさんは、創造性と技術的な専門知識をチームにもたらし、フロントエンドのパフォーマンスを大幅に向上させました。彼の仕事は、より速いエクスペリエンスを提供する上で極めて重要でした。",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "TIS株式会社",
    date: "April 2025 - July 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "REOさんはDockerのウェブアプリケーションに傑出した貢献をしてきました。彼は課題に対して問題解決型の考え方で取り組んでいます。",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "群馬大学大学院知能機械創生理工学教育プログラム",
    date: "April 2023 - March 2025",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "REOさんがAppwriteのモバイルアプリで行った作業は、高いレベルの品質と効率性をもたらしました。彼は、モバイル体験を向上させ、製品目標を達成するソリューションを提供しました。",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "デジタルクリエイター",
    date: "April 2020 - March 2023",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  // expLogos,
  // testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
export type Site = typeof siteConfig;

export const siteConfig = {
  hero: {
    heading: "Callender Hamilton (CH)",
    subHeading:
      "Proyek KPBU Penggantian atau Duplikasi jembatan Callender Hamilton (CH) di Pulau Jawa",
    image1: "/hero/about.webp",
    image2: "/hero/about.webp",
    image3: "/hero/about.webp",
  },
  activity: {
    heading: "KBPU",
    subHeading: "Kerjasama Pemerintah dan Badan Usaha",
    data: [
      {
        title: "12 th",
        description: "Masa Konsesi",
      },
      {
        title: "37",
        description: "Jembatan",
      },
      {
        title: "DBFOM",
        description: "Design, Build, Finance, Operate, Maintain, Transfer",
      },
      {
        title: "AP",
        description: "(Availability Payment)",
      },
    ],
  },
  menus: [
    {
      name: "Beranda",
      url: "/#home",
    },
    {
      name: "Profil",
      url: "#profile",
    },
    {
      name: "Aktivitas",
      url: "#activities",
    },
    {
      name: "Galeri",
      url: "#gallery",
    },
    {
      name: "Hubungi Kami",
      url: "#contact",
      text: "primary",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bajatitianutama.official",
      external: true,
    },
  ],
};

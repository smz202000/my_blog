import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "my-blog-ezz.pages.dev/", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  desc: "一个高中生的个人博客",
  title: "□的博客",
  ogImage: "3.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};


export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/smz202000/my_blog",
    linkTitle: ` ${SITE.title} 在 Github 上`,
    active: true,
  },
  
];

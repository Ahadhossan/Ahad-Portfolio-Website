import { Building2, BriefcaseBusiness } from "lucide-react";

export type MenuIcon = React.ElementType | null;

export type SubMenuLink = {
  label: string;
  href: string;
  icon?: string;
};

export type SubMenuHeading = {
  title: string;
  icon: MenuIcon;
};

export type MenuType = {
  name: string;
  path: string;
  gridCols?: 1 | 2 | 3 | 4;
  subMenuHeading?: SubMenuHeading[];
  subMenu?: SubMenuLink[][];
};

export const Menus: MenuType[] = [
  {
    name: "Home",
    path: "/home",
  },

  {
    name: "About Us",
    path: "/about",
    gridCols: 3,
    subMenuHeading: [
      { title: "Company", icon: Building2 },
      { title: "Careers", icon: BriefcaseBusiness },
      { title: "Find us on:", icon: null },
    ],
    subMenu: [
      [
        { label: "About Us", href: "/about" },
        { label: "Success Stories", href: "/success" },
        { label: "Who we work with", href: "/work" },
        { label: "Blog", href: "/blog" },
      ],
      [
        { label: "Life at softtech company", href: "/softtech" },
        { label: "Fresh Grads", href: "/fresh" },
        { label: "Open Positions", href: "/position" },
      ],
      [
        {
          label: "LinkedIn",
          href: "#",
          icon: "https://i.ibb.co/kgFX3pDc/linkedin.png",
        },
        {
          label: "Twitter",
          href: "#",
          icon: "https://i.ibb.co/Wvv2K3cs/twitter.png",
        },
        {
          label: "YouTube",
          href: "#",
          icon: "https://i.ibb.co/2YLRqVTC/youtube.png",
        },
      ],
    ],
  },

  {
    name: "Services",
    path: "/service",
    gridCols: 3,
    subMenuHeading: [
      { title: "Development & QA", icon: null },
      { title: "Mobility & Apps", icon: null },
      { title: "IT Operations", icon: null },
    ],
    subMenu: [
      [
        {
          label: "UX/UI Design",
          href: "/ui",
          icon: "https://i.ibb.co/W46VH6qm/ux-design.png",
        },
        {
          label: "Android App Development",
          href: "/androidapp",
          icon: "https://i.ibb.co/NgDwv9C8/developer.png",
        },
      ],
      [
        {
          label: "Odoo ERP Solutions",
          href: "/odoo",
          icon: "https://i.ibb.co/d0nB7b9H/erp.png",
        },
      ],
      [],
    ],
  },

  {
    name: "Solutions",
    path: "#",
    gridCols: 3,
    subMenuHeading: [
      { title: "Data, ML & AI", icon: null },
      { title: "E-Commerce", icon: null },
    ],
    subMenu: [
      [
        {
          label: "Business Intelligence",
          href: "#",
          icon: "https://i.ibb.co/Z1tNBKtt/online-analytical.png",
        },
      ],
      [
        {
          label: "AI Chatbots & Customer Support",
          href: "#",
          icon: "https://i.ibb.co/60CtLgs1/chat-app.png",
        },
      ],
    ],
  },

  {
    name: "Industries",
    path: "/industrie",
  },

  {
    name: "Our Products",
    path: "/product",
  },
];
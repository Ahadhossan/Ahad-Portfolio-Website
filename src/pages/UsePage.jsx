/** @format */

import { ArrowRight, CircleCheckBig } from "lucide-react";
import WhatImranulUses from "../Helper/UsePage/WhatImranulUses";
import ImranulTechEcosystem from "../Helper/UsePage/ImranulTechEcosystem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ExtrasAndReadiness from "../Helper/UsePage/ExtrasAndReadiness";

const UsePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div>
      {/* button, text, img, Philosophy, My Office, CLIs, Tech, Editor, Desktop Apps   */}
      <WhatImranulUses />

      {/* Imranul’s Tech Ecosystem & Work Environment */}
      <ImranulTechEcosystem />

      {/*  Consistent Experience Everywhere,On the Go, Newsletters, Other, Seeking Opportunities */}
      <ExtrasAndReadiness />
    </div>
  );
};

export default UsePage;

import React from "react";

const AboutHero = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="container">
        <h1>Passion Fuels Purpose!</h1>
        <p>
          Hi, I’m Md. Ahad Hossain — a passionate Web Developer and Frontend
          Designer based in Dhaka, Bangladesh. With over 2 years of hands-on
          experience in web development and digital marketing, I specialize in
          building beautiful, functional, and user-centered digital experiences.
          I believe that great design is more than just aesthetics — it’s about
          solving real problems and delivering intuitive, enjoyable experiences
          for users. Throughout my career, I’ve worked with remote teams and
          forward-thinking companies to deliver high-quality software solutions,
          lead successful digital marketing campaigns, and collaborate
          effectively across disciplines.
        </p>
      </div>
      <div className="container">
        <img src="../../assets/hero.png" alt="Ahad Hero" />
      </div>
    </section>
  );
};

export default AboutHero;

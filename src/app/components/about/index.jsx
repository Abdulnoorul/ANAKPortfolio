import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Portfolio
          </h2>
          <p className="font-light text-justify text-xs sm:text-sm ms:text-base">
            I’m a Full Stack Developer with 5 years of experience. While I work
            across the whole stack, I spend most of my time on the frontend
            building responsive and high-performing interfaces with React and
            JavaScript.
          </p>
          <p className="font-light text-justify">
            My work focuses on creating reusable component libraries to speed up
            development and optimizing UI performance to keep things fast for
            the user. On the backend, I use Java and Spring Boot to build the
            APIs and database structures that power these applications. I’m
            comfortable working in Agile teams to take a project from an idea to
            a clean, working product.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-sapn-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-xl sm:text-2xl">
            Full Stack Developer | Open to Work
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-sapn-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+<sub className="font-semibold text-base">years of exprience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Abdulnoorul&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="Abdul Noorul"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Abdulnoorul&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="Abdul Noorul"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,react,html,css,autocad,aws,bootstrap,codepen,docker,eclipse,firebase,git,github,hibernate,java,jenkins,maven,mysql,netlify,npm,ps,postman,spring,tailwind,vite,vercel,vscode,materialui"
            alt="Abdul Noorul"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Abdulnoorul&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Abdul Noorul"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Abdulnoorul&repo=ANAKPortfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
            alt="Abdul Noorul"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

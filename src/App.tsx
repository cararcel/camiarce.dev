import "react";
import Card from "./components/Card";
import Link from "./components/Link";
import LinkedIn from "./components/icons/LinkedIn";
import GitHub from "./components/icons/Github";
import Tag from "./components/Tag";
import ColorSwatch from "./components/icons/ColorSwatch";
import MobilePhone from "./components/icons/MobilePhone";
import Debugging from "./components/icons/Debugging";
import Seo from "./components/icons/Seo";
import Project from "./components/Project";
import "./i18next";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

function App() {
  const params = useParams();
  const { t, i18n } = useTranslation();

  if (params.language && ["fr", "es"].includes(params.language)) {
    i18n.changeLanguage(params.language);
  }

  return (
    <>
      <header className="max-w-4xl mx-auto mb-10 px-4 pt-10 w-full">
        <nav className="w-full bg-blue-300 flex justify-around md:justify-end space-x-2 items-center card px-4 font-subtitle">
          <a
            href="#about-me"
            className="py-4 px-3 sm:py-4 sm:px-6 block font-extrabold hover:underline"
          >
            {t("About me")}
          </a>
          <a
            href="#projects"
            className="py-4 px-3 sm:py-4 sm:px-6 block font-extrabold hover:underline"
          >
            {t("Projects")}
          </a>
          <Link
            title="contact me on LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/arce-camila/"
            className=" bg-green-400 px-3 py-2"
          >
            <span className="hidden md:inline">{t("Contact me on")}</span>
            <LinkedIn className="size-5" />
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="max-w-4xl mx-auto my-12 md:my-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-16 px-4">
            <Card className="group col-span-2 bg-white p-4 relative">
              <p className="text-5xl mb-6 font-black tracking-wide font-title">
                {t("Hello")},
              </p>
              <div className="text-2xl md:text-3xl font-bold">
                {t("My name is")}:{" "}
                <h1 className="inline-block text-3xl md:text-4xl font-handwritten font-bold">
                  Camila Arce
                </h1>
              </div>

              <div className="animate-scale duration-100 transition absolute -top-16 right-3 starburst border-1 border-black w-28 md:w-36 bg-green-400">
                <div className="flex justify-center items-center h-full w-full font-handwritten font-black text-lg md:text-xl text-center -rotate-12">
                  {t("Available")}
                  <br />
                  {t("to")}
                  <br />
                  {t("work")}
                </div>
              </div>
            </Card>
            <div className="col-span-2 grid gap-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-6">
                <span className="flex w-full justify-center items-center font-title text-4xl sm:text-3xl">
                  {t("I speak")}
                </span>

                <div>
                  <Link
                    title="Switch to Spanish"
                    className=" bg-white hover:bg-red-500 hover:text-white px-3 py-2"
                    target="_self"
                    href="/es"
                    icon={<span className="text-lg">🇨🇱</span>}
                    label="Español"
                  />
                </div>

                <div>
                  <Link
                    title="Switch to English"
                    className=" bg-white hover:bg-red-500 hover:text-white px-3 py-2 "
                    target="_self"
                    href="/"
                    icon={<span className="text-lg">🇬🇧</span>}
                    label="English"
                  />
                </div>

                <div>
                  <Link
                    title="Switch to French"
                    className=" bg-white hover:bg-red-500 hover:text-white px-3 py-2"
                    target="_self"
                    href="/fr"
                    icon={<span className="text-lg">🇫🇷</span>}
                    label="Français"
                  />
                </div>
              </div>
            </div>
            <Card className="group bg-pink-400">
              <figure className="w-full flex justify-center flex-col">
                <div className="flex justify-around items-end h-10 m-4">
                  <img
                    className="group-hover:animate-spin h-24"
                    src="/assets/img/laptop.webp"
                    srcSet="/assets/img/laptop.webp, /assets/img/laptop@2x.webp 2x"
                    alt="My laptop"
                  />
                </div>
                <figcaption className="flex-shrink w-full bg-white rounded-b-md text-md font-subtitle font-semibold tracking-wider border-t-2 border-black p-2">
                  {t("Web developer")}
                </figcaption>
              </figure>
            </Card>

            <Card className="group bg-green-300">
              <figure className="w-full h-full flex justify-center flex-col">
                <div className="flex justify-around items-end h-10 m-4">
                  <img
                    className="group-hover:animate-spin h-24"
                    src="/assets/img/microscope.webp"
                    srcSet="/assets/img/microscope.webp, /assets/img/microscope@2x.webp 2x"
                    alt="One of my microscope"
                  />
                </div>
                <figcaption className="flex-shrink w-full h-full bg-white rounded-b-md text-md font-subtitle font-semibold tracking-wider border-t-2 border-black p-2">
                  {t("Biochemist")}
                </figcaption>
              </figure>
            </Card>

            <Card className="group bg-orange-400">
              <figure className="w-full flex justify-center flex-col">
                <div className="flex justify-around items-end h-10 m-4">
                  <img
                    className="group-hover:animate-spin h-24"
                    src="/assets/img/conito.webp"
                    srcSet="/assets/img/conito.webp, /assets/img/conito@2x.webp 2x"
                    alt="A picture of one of my cats"
                  />
                  <img
                    className="group-hover:animate-spin h-24"
                    src="/assets/img/lilith.webp"
                    srcSet="/assets/img/lilith.webp, /assets/img/lilith@2x.webp 2x"
                    alt="A picture of my other cat"
                  />
                </div>
                <figcaption className="flex-shrink w-full bg-white rounded-b-md text-md font-semibold font-subtitle tracking-wider border-t-2 border-black p-2">
                  {t("Cat Lover")}
                </figcaption>
              </figure>
            </Card>

            <Card className="group bg-purple-400">
              <figure className="w-full flex justify-center flex-col">
                <div className="flex justify-around items-end h-10 m-4">
                  <img
                    className="group-hover:animate-spin h-24"
                    src="/assets/img/baby-bottle.webp"
                    srcSet="/assets/img/baby-bottle.webp, /assets/img/baby-bottle@2x.webp 2x"
                    alt="A baby bottle"
                  />
                </div>
                <figcaption className="flex-shrink w-full bg-white rounded-b-md text-md font-subtitle font-semibold tracking-wider border-t-2 border-black p-2">
                  {t("Mom")}
                </figcaption>
              </figure>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto my-12 md:my-24 px-4">
          <h2
            id="about-me"
            className="text-5xl mb-6 font-title font-black tracking-wide"
          >
            {t("About me")}
          </h2>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            Hi, I'm Camila and this is my story. I studied biochemistry in
            Chile, but one of my big dreams was to have the experience of living
            in a different country. For that I first went to Ireland to learn
            English and then I started a master's degree in biochemistry in
            Germany. My specialisation was in cell biology and I did my thesis
            on{" "}
            <a
              href="https://www.mdpi.com/2673-7140/4/1/1"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              how binge alcohol consumption affects adolescence
            </a>
            . Germany is very cool, but its climate not so much, so I moved to
            the south of France looking for more sun and beach when I had the
            chance.
          </p>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            Unfortunately it was not good for my career, I could not find a job
            because my area of work was very specialised. So I had two options,
            specialise in another area to stay in science or start something
            completely new. And here I am, I think you can figure out which way
            I went. It's been a very fun road, learning a lot of new things and
            it's just the beginning.
          </p>

          <h3 className="text-3xl mb-6 font-title font-black tracking-wide">
            {t("Why web progamming?")}
          </h3>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            Two years ago I was told about a game to learn programming:{" "}
            <a
              href="https://codecombat.com/user/cararcel"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              Codecombat
            </a>
            . I started playing it for fun and learned a lot. I will definitely
            show it to my kids.
          </p>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            After that, I decided to take some courses. A friend told me about{" "}
            <a
              href="https://laracasts.com/"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              Laracasts
            </a>
            . I started watching some videos about HTML, CSS and PHP. Jeffrey
            Way explains very well, he makes you believe that everything is very
            simple. Then I started watching videos on{" "}
            <a
              href="https://grafikart.fr"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              Grafikart
            </a>{" "}
            to improve my french, here I did again HTML, CSS and continued with
            Javascript.
          </p>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            Making the decision to go back to school was difficult, but that I
            wanted to study was not so difficult. I already had some programming
            experience and thought it was fun and interesting. So I decided to
            take a web developer formation at{" "}
            <a
              href="https://openclassNamerooms.com/fr/paths/899-developpeur-web"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              OpenclassNamerooms
            </a>
            . Which I finished end of September 2024, since then I'm{" "}
            <a
              href="/assets/oc-certificat.pdf"
              title="my OpenclassNamerooms certificate"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              officially a Web Developper
            </a>
            .
          </p>

          <p className="text-lg text-justify text-black leading-8 tracking-wide mb-8">
            Since I finished my OpenclassNamerooms courses I'm mostly taking
            care of my child. But I'm also trying to take the time to continue
            to improve my new set of skills. I'm in the process of learning more
            about React through the{" "}
            <a
              href="https://www.epicreact.dev/"
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              Epic React
            </a>{" "}
            course.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 md:items-center">
            <span className="text-xl font-black">{t("Find me on")}:</span>
            <div className="flex gap-4">
              <Link
                title="Check the GitHub repository"
                className=" bg-white px-3 py-2"
                target="_blank"
                href="https://github.com/cararcel"
                icon={<GitHub className="size-6" />}
                label="GitHub"
              />
              <Link
                title="My LinkedIn profile"
                className=" bg-blue-600 text-white px-3 py-2"
                target="_blank"
                href="https://www.linkedin.com/in/arce-camila/"
                icon={<LinkedIn className="size-6 fill-current" />}
                label="LinkedIn"
              />
            </div>
          </div>
        </section>

        <section className="pb-24 px-4 max-w-4xl mx-auto">
          <h2
            id="projects"
            className="text-5xl mb-6 font-title font-black tracking-wide"
          >
            {t("Projects")}
          </h2>

          <div className="grid grid-colds-1 md:grid-cols-2 gap-6">
            <Project
              name="Booki"
              imgName="booki"
              githubUrl="https://github.com/cararcel/oc-p2-booki"
              tags={[
                <Tag className="bg-orange-400" label="HTML" />,
                <Tag className="bg-blue-300" label="CSS" />,
                <Tag icon={<ColorSwatch className="size-5" />}>
                  {t("Design integration")}
                </Tag>,
                <Tag icon={<MobilePhone className="size-5" />}>
                  {t("Responisve design")}
                </Tag>,
              ]}
              className="border-pink-400 bg-pink-400"
            />
            <Project
              name="Nina Carducci"
              imgName="nina-carducci"
              githubUrl="https://github.com/cararcel/Nina-Carducci-Dev"
              tags={[
                <Tag className="bg-orange-400" label="HTML" />,
                <Tag className="bg-blue-300" label="CSS" />,
                <Tag className="bg-yellow-400" label="Javascript" />,
                <Tag icon={<Debugging className="size-5" />}>
                  {t("Debugging")}
                </Tag>,
                <Tag icon={<Seo className="size-5" />}>{t("SEO")}</Tag>,
              ]}
              className="border-purple-400 bg-purple-400"
            />
            <Project
              name="Kasa"
              imgName="kasa"
              githubUrl="https://github.com/cararcel/kasa-oc-p5"
              tags={[
                <Tag className="bg-blue-300" label="ReactJS" />,
                <Tag className="bg-pink-400" label="SCSS" />,
                <Tag
                  icon={<ColorSwatch className="size-5" />}
                  label={t("Design integration")}
                />,
                <Tag icon={<MobilePhone className="size-5" />}>
                  {t("Responisve design")}
                </Tag>,
              ]}
              className="border-orange-400 bg-orange-400"
            />
            <Project
              name="Sophie Bluel"
              imgName="sophie-bluel"
              githubUrl="https://github.com/cararcel/oc-p3-portfolio-architecte-sophie-bluel"
              tags={[
                <Tag className="bg-blue-300" label="HTML" />,
                <Tag className="bg-orange-400" label="CSS" />,
                <Tag className="bg-yellow-400" label="JavaScript" />,
                <Tag
                  icon={<ColorSwatch className="size-5" />}
                  label={t("Design integration")}
                />,
              ]}
              className="border-green-400 bg-green-400"
            />
          </div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto my-10">
        <Card className="w-full bg-blue-300 flex flex-wrap justify-center gap-4 items-center p-4 font-black tracking-wider">
          <span>
            {t("Copyright")} &copy; <time dateTime="2024">2024</time>
          </span>
          <Link
            title="Edit the page on GitHub"
            className=" bg-white px-2 py-1"
            target="_blank"
            href="https://github.com/cararcel/camiarce.dev/blob/main/index.html"
            icon={<GitHub className="size-6" />}
            label={t("Edit on GitHub")}
          />
        </Card>
      </footer>

      <div className="mt-96 font-handwritten text-xl font-black text-center">
        {t("Why are you still scrolling?")}
      </div>

      <div className="mt-96 font-handwritten text-xl font-black text-center">
        {t("There's nothing more... Please stop scrolling")}.
      </div>

      <div className="mt-96 font-handwritten text-xl font-black text-center">
        {t("I'm warning you. Stop scrolling")}.
      </div>

      <div className="mt-96 font-handwritten text-xl font-black text-center">
        {t("I did warn you. This is on you")}.
      </div>

      <div className="mt-96 mb-16 flex justify-center w-full">
        <figure className="p-4 md:p-0">
          <img
            className="card"
            loading="lazy"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhyajFxY291dmd0NzZrZ2Y2dWw3MHoyN2lhbXRrbHNtOXAzb3l0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5kq0GCjHA8Rwc/giphy.webp"
            alt=""
          />
          <figcaption className="mt-2 font-handwritten text-xl">
            Never gonna give you up, Never gonna let you down &#127926;
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default App;

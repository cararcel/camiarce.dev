import { Trans } from "react-i18next";

export default function Wwebp({ ...props }: React.ComponentProps<"p">) {
  return (
    <Trans i18nKey="why-web">
      <p
        className="text-lg text-justify text-black leading-8 tracking-wide mb-8"
        {...props}
      >
        Two years ago I was told about a game to learn programming:{" "}
        <a
          href="https://codecombat.com/user/cararcel"
          target="_blank"
          className="font-bold underline hover:no-underline"
        >
          Codecombat
        </a>
        . I started playing it for fun and learned a lot. I will definitely show
        it to my kids.
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
        . I started watching some videos about HTML, CSS and PHP. Jeffrey Way
        explains very well, he makes you believe that everything is very simple.
        Then I started watching videos on{" "}
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
        experience and thought it was fun and interesting. So I decided to take
        a web developer formation at{" "}
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
        Since I finished my OpenclassNamerooms courses I'm mostly taking care of
        my child. But I'm also trying to take the time to continue to improve my
        new set of skills. I'm in the process of learning more about React
        through the{" "}
        <a
          href="https://www.epicreact.dev/"
          target="_blank"
          className="font-bold underline hover:no-underline"
        >
          Epic React
        </a>{" "}
        course.
      </p>
    </Trans>
  );
}

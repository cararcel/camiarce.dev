import Card from "./Card";
import GitHub from "./icons/Github";
import Link from "./Link";

export default function Project({
  name,
  imgName,
  githubUrl,
  githubTitle,
  tags,
  className = "",
}: React.ComponentProps<"div"> & {
  name: string;
  imgName: string;
  githubUrl: string;
  githubTitle: string;
  tags: React.ReactNode[];
}) {
  return (
    <Card className="group bg-white p-4">
      <div className="text-2xl font-black">{name}</div>

      <figure
        className={`h-56 overflow-hidden m-2 ${className} border rounded-sm`}
      >
        <div className={`h-4 ${className} pl-1 gap-0.5 flex flex-start`}>
          <div className="flex justify-start items-center gap-0.5">
            <div className="rounded-full bg-gray-200 size-1"></div>
            <div className="rounded-full bg-gray-200 size-1"></div>
            <div className="rounded-full bg-gray-200 size-1"></div>
          </div>
        </div>
        <img
          loading="lazy"
          className="h-52 w-full object-cover object-top group-hover:object-bottom transition-all duration-500"
          src={`/assets/img/${imgName}-desktop@366w.webp`}
          srcSet={["366", "767", "600", "500", "289"]
            .map(
              (size) => `/assets/img/${imgName}-desktop@${size}w.webp ${size}w`
            )
            .join(" ")}
          sizes="(min-width: 768px) 366px,
                ((min-width: 687px) and (max-width: 767px)) 681px,
                ((min-width: 587px) and (max-width: 686px)) 600px,
                ((min-width: 376px) and (max-width: 586px)) 500px,
                (max-width: 375px) 289px"
          alt={`Screenshot of the ${name} website`}
        />
        <figcaption className="sr-only">
          Screenshot of the {name} website
        </figcaption>
      </figure>

      <div className="flex flex-wrap gap-4">
        <Link
          title={githubTitle}
          className="bg-white px-2 py-1"
          target="_blank"
          href={githubUrl}
          icon={<GitHub className="size-5" />}
          label="GitHub"
        />
        {...tags}
      </div>
    </Card>
  );
}

import { ReactNode } from "react";
import Title from "./Title";

interface Props {
  title: string;
  subTitle: ReactNode;
  location: string;
  url: string;
  icon: ReactNode;
  description?: ReactNode;
}

const ExperienceCard = ({
  title,
  location,
  url,
  subTitle,
  icon,
  description,
}: Props) => {
  return (
    <div className="flex row p-3 gap-4 hover:bg-gray-900 rounded-md">
      <div className="w-12 ">
        <span className="w-12 h-12 min-h-12 min-w-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center overflow-hidden">
          <span className="text-2xl">{icon}</span>
        </span>
      </div>
      <div className="">
        <h3 className="text-2xl font-bold hover:underline">
          <a href={url} target="_blank">
            {title}
          </a>
        </h3>
        {subTitle ? <div>{subTitle}</div> : null}
        {location ? (
          <p className="text-base tracking-wide text-gray-400">
            <span className=" text-sm ">{location}</span>
          </p>
        ) : null}
        {description ? <div className="mt-3">{description}</div> : null}
      </div>
    </div>
  );
};

export default ExperienceCard;

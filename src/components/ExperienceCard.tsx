import { ReactNode } from "react";
import Title from "./Title";

interface Props {
  title: string;
  subTitle: string;
  url: string;
  icon: ReactNode;
  description?: ReactNode;
}

const ExperienceCard = ({ title, url, subTitle, icon, description }: Props) => {
  return (
    <div className="flex gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center overflow-hidden">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">
          <a href={url} target="_blank" >
            {title}
          </a>
        </h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
        {description ? <span>{description}</span> : null}
      </div>
    </div>
  );
};

export default ExperienceCard;

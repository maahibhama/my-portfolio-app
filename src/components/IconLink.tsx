import { ReactNode } from "react";

interface Props {
  link: string;
  icon: ReactNode;
}

const IconLink = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank">
      <span className="w-9 h-9 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </span>
    </a>
  );
};

export default IconLink;

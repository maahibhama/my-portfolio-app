import Title from "./Title";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import { ExperienceData } from "@/constants/utils";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ExperienceData.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              title={item.title}
              url={item.url}
              subTitle={item.position}
              location={item.location}
              icon={<Image src={item.imageUrl} alt={item.title} />}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

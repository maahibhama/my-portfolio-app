import Title from "./Title";
import { MdCastForEducation, MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import { EducationData } from "@/constants/utils";
import Image from "next/image";

const Eduction = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdCastForEducation />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {EducationData.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              title={item.title}
              url={item.url}
              subTitle={item.position}
              icon={<Image src={item.imageUrl} alt={item.title} />}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Eduction;

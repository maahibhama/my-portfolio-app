import Title from "./Title";
import { BsBookHalf } from "react-icons/bs";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import { EducationData } from "@/constants/utils";
import Image from "next/image";

const Eduction = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<BsBookHalf />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {EducationData.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              title={item.title}
              url={item.url}
              location={item.location}
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

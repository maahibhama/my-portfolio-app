import Title from "./Title";
import { FaProjectDiagram } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import { ProjectsData } from "@/constants/utils";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ProjectsData.map((item, index) => {
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

export default Projects;
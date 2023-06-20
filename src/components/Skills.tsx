import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";
import {
  LibrariesAndFrameworks,
  ProgrammingLanguages,
  ToolsPlatforms,
} from "@/constants/skillConstants";
import { locales } from "@/locales";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className=" ">
        <p className="mb-2 text-lg ">{locales.skillHeader_1}</p>
        <div className="flex gap-4 flex-wrap">
          {ProgrammingLanguages.map((item, index) => {
            return (
              <SkillsInput key={index} title={item.name} link={item.link} />
            );
          })}
        </div>
      </div>
      <div className=" mt-5 ">
        <p className="mb-2 text-lg">{locales.skillHeader_2}</p>
        <div className="flex gap-4 flex-wrap">
          {LibrariesAndFrameworks.map((item, index) => {
            return (
              <SkillsInput key={index} title={item.name} link={item.link} />
            );
          })}
        </div>
      </div>
      <div className=" mt-5 ">
        <p className="mb-2 text-lg"> {locales.skillHeader_3}</p>
        <div className="flex gap-4 flex-wrap">
          {ToolsPlatforms.map((item, index) => {
            return (
              <SkillsInput key={index} title={item.name} link={item.link} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

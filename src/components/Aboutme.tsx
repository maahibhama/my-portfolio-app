import { SiInformatica } from "react-icons/si";
import Title from "./Title";
import { locales } from "@/locales";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
       {locales.aboutMeDescriptions}
      </div>
    </div>
  );
};

export default Aboutme;

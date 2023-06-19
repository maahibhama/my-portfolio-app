import Image from "next/image";
import ProfileImg from "../../public/img/myProfile.png";
import { locales } from "@/locales";

import {
  SiAircall,
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiMaildotru,
  SiTele5,
  SiTwitter,
} from "react-icons/si";
import IconLink from "./IconLink";
import { FaMobile } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-center text-white">
          {locales.name}
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          {locales.position}
        </h3>
        <div className="flex row gap-2 mt-2">
          <IconLink link={locales.mailTo} icon={<SiMaildotru />} />
          <IconLink link={locales.callTo} icon={<FaMobile />} />
          <IconLink link={locales.githubLink} icon={<SiGithub />} />
          <IconLink link={locales.linkedinLink} icon={<SiLinkedin />} />
          <IconLink link={locales.facebookLink} icon={<SiFacebook />} />
          <IconLink link={locales.twitterLink} icon={<SiTwitter />} />
        </div>
        <p className="text-base tracking-wide text-center md:text-left">
          {locales.descriptions}
        </p>
      </div>
    </div>
  );
};

export default Banner;

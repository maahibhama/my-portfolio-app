import brightLogo from "../../public/img/experience/brightLogo.png";
import finvolvLogo from "../../public/img/experience/finvolvLogo.png";
import nobulLogo from "../../public/img/experience/nobulLogo.png";
import cacaoLogo from "../../public/img/experience/cacaoLogo.png";

import ditLogo from "../../public/img/education/ditLogo.png";
import { locales } from "@/locales";

const BrightMoneyDetails = () => {
  return (
    <div className="">
      <p>
        {locales.brightMoneyHeading}
        <span className="font-bold">{locales.brightMoneyHeadingBold}</span>
      </p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.brightMoneyExp_1}</span>
          {locales.brightMoneyExp_1_sub}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          {locales.brightMoneyExp_2}
          <span className="font-bold">{locales.brightMoneyExp_2_sub}</span>
          <span className=" text-sm ">{locales.brightMoneyExp_2_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.brightMoneyExp_3}</span>
          {locales.brightMoneyExp_3_sub}
          <span className=" text-sm ">{locales.brightMoneyExp_3_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          {locales.brightMoneyExp_4}
          <span className="font-bold">{locales.brightMoneyExp_4_sub}</span>
          <span className=" text-sm ">{locales.brightMoneyExp_4_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          {locales.brightMoneyExp_5}
          <span className="font-bold">{locales.brightMoneyExp_5_sub}</span>
          <span className=" text-sm ">{locales.brightMoneyExp_5_sub_1}</span>
          {"."}
        </p>
      </div>
    </div>
  );
};

const BrightMoneyPosition = () => {
  return (
    <div>
      <p className="text-base tracking-wide text-gray-400">
        {locales.brightMoneyPosition}{" "}
        <span className=" text-sm ">
          {locales.brightMoneyPosition_timeline}
        </span>
      </p>
      <p className="text-base tracking-wide text-gray-400">
        {locales.brightMoneyPosition_1}{" "}
        <span className=" text-sm ">
          {locales.brightMoneyPosition_1_timeline}
        </span>
      </p>
    </div>
  );
};

const FinvolvPosition = () => {
  return (
    <div>
      <p className="text-base tracking-wide text-gray-400">
        {locales.finvolvPosition}{" "}
        <span className=" text-sm ">{locales.finvolvPosition_timeline}</span>
      </p>
    </div>
  );
};

const FinvolvDetails = () => {
  return (
    <div className="">
      <p>
        <span className="font-bold">{locales.finvolvHeading}</span>
      </p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          {locales.finvolveExp_2}
          <span className="font-bold">{locales.finvolvExp_2_sub}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.finvolvExp_1}</span>
          {locales.finvolvExp_1_sub}
          <span className=" text-sm ">{locales.finvolvExp_1_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.finvolveExp_3}</span>
        </p>
      </div>
    </div>
  );
};

const NobulPosition = () => {
  return (
    <div>
      <p className="text-base tracking-wide text-gray-400">
        {locales.nobulPosition}{" "}
        <span className=" text-sm ">{locales.nobulPosition_timeline}</span>
      </p>
    </div>
  );
};

const NobulDetails = () => {
  return (
    <div className="">
      <p>
        <span className="font-bold">{locales.nobulHeading}</span>
      </p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.nobulExp_1}</span>
          {locales.nobulExp_1_sub}
          <span className=" text-sm ">{locales.nobulExp_1_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.nobulExp_2}</span>
          {locales.nobulExp_2_sub}
          <span className=" text-sm ">{locales.nobulExp_2_sub_1}</span>
          {"."}
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.nobulExp_3}</span>
          {locales.nobulExp_3_sub}
          <span className=" text-sm ">{locales.nobulExp_3_sub_1}</span>
          {"."}
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.nobulExp_4}</span>
          {locales.nobulExp_4_sub}
          <span className=" text-sm ">{locales.nobulExp_4_sub_1}</span>
          {"."}
        </p>
      </div>
    </div>
  );
};

const CacaoPosition = () => {
  return (
    <div>
      <p className="text-base tracking-wide text-gray-400">
        {locales.cacaoPosition}{" "}
        <span className=" text-sm ">{locales.cacaoPosition_timeline}</span>
      </p>
    </div>
  );
};

const CacaoDetails = () => {
  return (
    <div className="">
      <p>
        <span className="font-bold">{locales.cacaoHeading}</span>
      </p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.cacaoExp_1}</span>
          {locales.cacaoExp_1_sub}
          <span className=" text-sm ">{locales.cacaoExp_1_sub_1}</span>
          {"."}
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.cacaoExp_2}</span>
          {locales.cacaoExp_2_sub}
          <span className=" text-sm ">{locales.cacaoExp_2_sub_1}</span>
          {"."}
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.cacaoExp_3}</span>
          {locales.cacaoExp_3_sub}
          <span className=" text-sm ">{locales.cacaoExp_3_sub_1}</span>
          {"."}
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          {locales.cacaoExp_4}
          <span className="font-bold">{locales.cacaoExp_4_sub}</span>
          <span className=" text-sm ">{locales.cacaoExp_4_sub_1}</span>
          {"."}
        </p>
      </div>
    </div>
  );
};

export const ExperienceData = [
  {
    title: "Bright Money",
    location: "Bengaluru, India",
    position: <BrightMoneyPosition />,
    url: "https://www.brightmoney.co/",
    description: <BrightMoneyDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: brightLogo,
  },
  {
    title: "finvolv",
    location: "Bengaluru, India",
    position: <FinvolvPosition />,
    url: "https://finvolv.ai/",
    description: <FinvolvDetails />,
    techStack: [],
    startYear: "Feb 2019",
    endYear: "Oct 2022",
    timeDuration: "",
    imageUrl: finvolvLogo,
  },
  {
    title: "Nobul",
    location: "Gurugram, India",
    position: <NobulPosition />,
    url: "https://nobul.com/",
    description: <NobulDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: nobulLogo,
  },
  {
    title: "Cacao Solution",
    location: "Chandigarh, India",
    position: <CacaoPosition />,
    url: "https://cacaosolutions.com/",
    description: <CacaoDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: cacaoLogo,
  },
];

const DitPosition = () => {
  return (
    <div>
      <p className="text-base tracking-wide text-gray-400">
        {locales.ditPosition}{" "}
        <span className=" text-sm ">{locales.ditPosition_timeline}</span>
      </p>
    </div>
  );
};

export const EducationData = [
  {
    title: "Dit University",
    location: "Dehradun, India",
    position: <DitPosition />,
    url: "https://www.dituniversity.edu.in/",
    description: "",
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: ditLogo,
  },
];

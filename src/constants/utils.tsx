import brightLogo from "../../public/img/experience/brightLogo.png";
import finvolvLogo from "../../public/img/experience/finvolvLogo.png";
import nobulLogo from "../../public/img/experience/nobulLogo.png";
import cacaoLogo from "../../public/img/experience/cacaoLogo.png";
import hdfcLogo from "../../public/img/projects/hdfcLogo.png";
import clinkLogo from "../../public/img/projects/clinkLogo.png"
import { AiOutlineLink } from "react-icons/ai";
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

const BrightMoneyProjectDetails = () => {
  return (
    <div className="">
      <p>{locales.brightMoneyProjectDetails}</p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">
            {locales.brightMoneyProject_Point_1}
          </span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>{locales.brightMoneyProject_Point_2}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>
          <span className="font-bold">{locales.skills}</span>
          <span className=" text-gray-400">
            {locales.brightMoneyProject_skills}
          </span>
        </p>
      </div>
      <div className="mt-3 flex gap-4">
        <a href={"https://www.brightmoney.co/"} target="_blank">
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">Web App</span>
          </button>
        </a>
        <a
          href={
            "https://play.google.com/store/apps/details?id=com.brightcapital.app&hl=en_US"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">Android App</span>
          </button>
        </a>
        <a
          href={
            "https://apps.apple.com/us/app/bright-crush-your-card-debt/id1511043796"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">iOS App</span>
          </button>
        </a>
      </div>
    </div>
  );
};

const HDFCProjectDetails = () => {
  return (
    <div className="">
      <p>{locales.hdfcProjectDetails}</p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.hdfcProject_point_1}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.hdfcProject_point_2}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.hdfcProject_point_3}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>
          <span className="font-bold">{locales.skills}</span>
          <span className=" text-gray-400">{locales.hdfcProject_skills}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-4">
        <a
          href={
            "https://apps.apple.com/eg/app/hdfc-life-insurance-app/id900441427"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">iOS App</span>
          </button>
        </a>
      </div>
    </div>
  );
};

const LendProjectDetails = () => {
  return (
    <div className="">
      <p>{locales.LendProjectDetails}</p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.LendProject_Point_1}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.LendProject_Point_2}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.LendProject_Point_3}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>
          <span className="font-bold">{locales.skills}</span>
          <span className=" text-gray-400">{locales.LendProject_skills}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-4">
        <a
          href={
            "https://apps.apple.com/eg/app/hdfc-life-insurance-app/id900441427"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">iOS App</span>
          </button>
        </a>
      </div>
    </div>
  );
};

const ClinkProjectDetails = () => {
  return (
    <div className="">
      <p>{locales.clinkProjectDetails}</p>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="font-bold">{locales.clickProject_Point_1}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.clickProject_Point_2}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>&#x2022;</p>
        <p>
          <span className="">{locales.clickProject_Point_3}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2">
        <p>
          <span className="font-bold">{locales.skills}</span>
          <span className=" text-gray-400">{locales.LendProject_skills}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-4">
        <a
          href={
            "https://apps.apple.com/eg/app/hdfc-life-insurance-app/id900441427"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">Android App</span>
          </button>
        </a>
        <a
          href={
            "https://apps.apple.com/eg/app/hdfc-life-insurance-app/id900441427"
          }
          target="_blank"
        >
          <button className="font-bold flex gap-2 hover:underline 0 items-center ">
            <AiOutlineLink />{" "}
            <span className="hover:text-cyan-30">iOS App</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export const ProjectsData = [
  {
    title: "Bright Money (web and mobile app)",
    location: "Bengaluru, India",
    position: "Associated with Bright Money",
    url: "https://www.brightmoney.co/",
    description: <BrightMoneyProjectDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: brightLogo,
  },
  {
    title: "HDFC life insurance (iOS application)",
    location: "Bengaluru, India",
    position: "Associated with Finvolv",
    url: "https://onlineinsurance.hdfclife.com/",
    description: <HDFCProjectDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: hdfcLogo,
  },

  {
    title: "Lend.in product(kuliza)​— R​eactNative/React",
    location: "Bengaluru, India",
    position: "Associated with Finvolv",
    url: "https://finvolv.ai/",
    description: <LendProjectDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: finvolvLogo,
  },
  {
    title: "Clink —​ i​OS and Android(React Native)",
    location: "Bengaluru, India",
    position: "Freelance",
    url: "https://www.linkedin.com/company/clinkatwork/",
    description: <ClinkProjectDetails />,
    techStack: [],
    startYear: "Oct 2022",
    endYear: "Present",
    timeDuration: "",
    imageUrl: clinkLogo,
  },
];

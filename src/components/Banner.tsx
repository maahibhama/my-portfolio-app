import Image from "next/image";
import ProfileImg from "../../public/img/myProfile.png";

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
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Mahendra Bhama</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Lead Engineer at Bright
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I build accessible, inclusive products and digital experiences for the
          both mobile app and web.
        </p>
      </div>
    </div>
  );
};

export default Banner;

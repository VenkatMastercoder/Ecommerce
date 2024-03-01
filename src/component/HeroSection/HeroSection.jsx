// import HeroImg from "./assets/home-img.webp"
import { Link } from "react-router-dom";
import { HeroImg } from "../../assets/image";

const HeroSection = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start space-y-4">
            <h1 style={{ color: "gray" }} className="text-3xl lg:text-5xl">
              Clothes That Get YOU Noticed
            </h1>
            <p className="text-sm md:text-base lg:text-xl">
              Clothes That Get YOU Noticed Fashion is part of the daily air and
              it does not quite help that it changes all the time. Clothes have
              always been a marker of the era and we are in a revolution. Your
              fashion makes you been seen and heard that way you are. So,
              celebrate the seasons new and exciting fashion in your own way.
            </p>

            {/* Link === a 
                  to   === herf
              */}

            <Link to="/product">
              <button className="rounded-xl w-40 h-11">Shop Now</button>
            </Link>
          </div>
          <div>
            <img src={HeroImg} loading="lazy" alt="HeroSectionImg" />
          </div>
        </div>
      </div>
    </>
  );
};

/*
  mob:tab:lap
  sm:md:lg:xl
  1:2:1

  sm:lg
  1:1
*/

export default HeroSection;

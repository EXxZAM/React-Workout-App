import React from "react";
import image from "../../assets/images/hero-man.png";
import logo from "../../assets/images/hero-logo.png";
import km from "../../assets/images/hero-km.png";
import video from "../../assets/images/hero-videos.png";
import tutorial from "../../assets/images/hero-tutorials.png";
const Hero = () => {
    return (
        <>
            <div
                id="workouts"
                className="self-center flex flex-row p-[10px]  max-md:text-center"
            >
                <div className="flex flex-col  ">
                    <h2 className="text-[60px] md:text-[90px] xl:text-[120px] xl:leading-[170px] tracking-[-2px] z-10  ">
                        با ما ورزش <br />
                        کنید
                    </h2>
                    <p className="text-[16px] leading-[24px] tracking-[0.5px] ">
                        مجموعه عظیمی از محتوای سلامتی و تناسب اندام و <br />
                        دستور العمل های بهداشتی برای کمک به تناسب اندام و سالم
                        ماندن!
                    </p>
                    <button className=" w-[200px] h-[70px] rounded-[10px] bg-[#E6533C] mt-[50px] max-md:self-center">
                        همین حالا عضو شوید!
                    </button>
                    <p className="mt-[112px]">مشتریان ما</p>
                    <img
                        className="mt-[33px] max-md:w-[300px] self-center"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="flex ">
                    <img
                        className="xl:block xl:w-[309px] xl:h-[516.76px]  hidden  z-15 "
                        src={image}
                        alt="athlete"
                    />

                    <div className="md:flex flex-col gap-[15px] hidden">
                        <img className="  z-20 " src={km} alt="" />
                        <img className="  z-20 " src={video} alt="" />
                        <img className="  z-20 " src={tutorial} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

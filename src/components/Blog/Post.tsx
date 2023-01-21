import React from "react";
import arrow from "../../assets/images/card-arrow.png";
interface PostProps {
    image: string;
    title: string;
    desc: string;
    classes: string;
}
const Post = ({ image, title, desc, classes }: PostProps) => {
    return (
        <>
            <div
                className={`flex  self-center items-center gap-[20px]  max-md:p-10 ${classes}`}
            >
                <div className="self-center">
                    <h2 className="font-semibold max-sm:w-[23ch] md:text-[40px] md:w-[15ch]">
                        {title}
                    </h2>
                    <p className="text-[14px] w-[30ch] text-justify mt-[38px]">
                        {desc}
                    </p>
                    <span className="flex gap-[9px] mt-[24px]">
                        {" "}
                        <img src={arrow} height="19px" width="23px" />
                        <a
                            className="text-[16px] font-semibold"
                            style={{ color: "#0070C9" }}
                        >
                            ادامه مطلب
                        </a>
                    </span>
                </div>
                <img
                    className="max-sm:hidden max-md:w-[500px] md:w-[500px] md:h-[421.09px]"
                    src={image}
                    alt=""
                />
            </div>
        </>
    );
};

export default Post;

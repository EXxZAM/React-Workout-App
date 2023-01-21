import React from "react";
import arrow from ".././../assets/images/card-arrow.png";
const Card = ({
    color,
    title,
    desc,
}: {
    color: string;
    title: string;
    desc: string;
}) => {
    return (
        <>
            <div
                className={`flex flex-row-reverse gap-[20px] w-[304px] h-[190px] rounded-[12px] items-center justify-center  text-right `}
                style={{ backgroundColor: `${color}` }}
            >
                <div className=" justify-center ">
                    <h2 className=" font-semibold text-[16px]">{title}</h2>
                    <div className="flex w-full items-center gap-[10px]">
                        <p className="w-[192px] text-[14px]">{desc}</p>
                    </div>
                </div>
                <a href="#">
                    <img
                        className="w-[23px] h-[19px] "
                        src={arrow}
                        alt="arrow"
                    />
                </a>
            </div>
        </>
    );
};

export default Card;

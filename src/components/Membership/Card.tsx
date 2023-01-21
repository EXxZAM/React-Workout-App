import React from "react";

interface CardProps {
    title: string;
    desc: string;
    items: string[];
    btnText: string;
    classes: string;
}
const Card = ({ title, desc, items, btnText, classes }: CardProps) => {
    return (
        <>
            <div
                className={`max-sm:w-[400px]  sm:w-[538px] sm:h-[640px]  mt-[32px] p-[68px] leading-[24px] flex flex-col justify-between ${classes} gap-[10px]`}
            >
                <div>
                    <h2 className="max-sm:text-[30px] sm:text-[40px] font-semibold text-center">
                        {title}
                    </h2>
                    <p className="mt-[34px] max-sm:text-[16px] sm:text-[18px]">
                        {desc}
                    </p>
                    <ul className="list-disc list-inside mt-[16px] max-sm:text-[16px] sm:text-[18px]  ">
                        <p>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </p>
                    </ul>
                </div>
                {/* w-[150px] h-[30px] */}
                <button className=" rounded-[10px] bg-[#0070C9] p-[4px]">
                    {btnText}
                </button>
            </div>
        </>
    );
};

export default Card;

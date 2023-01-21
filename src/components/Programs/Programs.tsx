import React from "react";
import Card from "./Card";

const Category = () => {
    return (
        <>
            <div
                id="programs"
                className="flex flex-col max-sm:text-center max-sm:justify-center self-center overflow-auto p-10 gap-[24px]"
            >
                <h2 className=" font-semibold max-sm:text-[30px] text-[40px]">
                    نمیدونی از کجا شروع کنی؟
                </h2>
                <p className="text-[16px]">
                    برنامه های ما راهنمایی های روزانه را ارائه می دهند تا شما را
                    در مسیر درست نگه دارند.
                </p>
                <div className="flex max-sm:gap-[20pxpx] gap-[32px] flex-wrap justify-center">
                    <Card
                        color={"#323443"}
                        title={"ویدیو های ورزشی"}
                        desc={"دسترسی به صد ها ویدیوی ورزشی برای تناسب اندام"}
                    />
                    <Card
                        color={"#232532"}
                        title={"برنامه های ورزشی"}
                        desc={"برنامه های به صرفه و مفید!"}
                    />
                    <Card
                        color={"#323443"}
                        title={"برنامه های غذایی"}
                        desc={
                            "برنامه های غذایی نوشته شده توسط بهترین متخصصان تغذیه"
                        }
                    />
                    <Card
                        color={"#4F5261"}
                        title={"دسترسی کامل"}
                        desc={"دسترسی کامل به تمامی پلن های ما به صورت دائمی"}
                    />
                </div>
            </div>
        </>
    );
};

export default Category;

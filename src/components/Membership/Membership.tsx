import React from "react";
import Card from "./Card";

const Membership = () => {
    return (
        <>
            <div id="memebr" className="self-center ">
                <div>
                    <h2 className="max-sm:text-[30px] sm:text-[50px] leading-[70px] max-md:text-center">
                        عضویت
                    </h2>
                    <hr className="mt-[12px] opacity-[0.5]" />
                </div>
                <div className="flex gap-[69px] flex-wrap  max-md:justify-center max-sm:scale-90">
                    <Card
                        title="رایگان عضو شوید"
                        desc="با آموزش حرفه ای و حمایت از یک جامعه آنلاین مثبت و فعال به اهداف تناسب اندام خود برسید یا سبک زندگی سالم خود را حفظ کنید."
                        btnText="همین حالا عضو شوید"
                        classes="bg-[#232532]"
                        items={[
                            "600 ویدیو آموزشی",
                            "برنامه های متنوع ",
                            "1 ساعت مکالمه رایگان با متخصصان",
                        ]}
                    />
                    <Card
                        title="عضویت ویژه"
                        desc="عضویت ویژه شامل همه چیزهایی است که با عضویت رایگان دریافت می کنید و ویژگی های راحتی کاملاً جدید، ابزارهای تناسب اندام و محتوای منحصر به فرد را اضافه می کند."
                        btnText="عضو ویژه شوید"
                        classes="bg-[#323443]"
                        items={[
                            "1200 ویدیو آموزشی",
                            "برنامه های متنوع ورزشی و آموزشی",
                            "مکالمه و دریافت مشاوره از متخصصان هرروز هفته",
                            "و بیشتر..",
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export default Membership;

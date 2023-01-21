import React from "react";
import { slide as Menu } from "react-burger-menu";
const Header = () => {
    return (
        <>
            <div className="flex flex-row justify-between max-sm:flex-row m-[64px] mt-[49px] mb-0 flex-wrap">
                <h1 className="text-[16px]">ورزش با ما</h1>

                <div className="hidden sm:flex flex-row gap-[20px] text-[12px] flex-wrap">
                    <a href="#workouts">ورزش ها</a>
                    <a href="#programs">برنامه ها</a>
                    <a href="#living">زندگی سالم</a>
                    <a href="#memebr">عضویت</a>
                </div>
                <div className="hidden max-sm:block">
                    <Menu>
                        <a className="menu-item" href="#workouts">
                            ورزش ها
                        </a>
                        <a className="menu-item" href="#programs">
                            برنامه ها
                        </a>
                        <a className="menu-item" href="#living">
                            زندگی سالم
                        </a>
                        <a className="menu-item" href="#memebr">
                            عضویت
                        </a>
                    </Menu>
                </div>
            </div>
        </>
    );
};

export default Header;

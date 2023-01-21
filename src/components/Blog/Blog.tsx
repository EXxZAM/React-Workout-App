import React from "react";
import home from "../../assets/images/blog-home.webp";
import program from "../../assets/images/blog-program.png";
import arrow from "../../assets/images/card-arrow.png";
import Post from "./Post";
const Blog = () => {
    return (
        <>
            <div
                id="living"
                className="flex flex-col   max-sm:gap-[20px] sm:gap-[121px]"
            >
                <Post
                    classes="max-lg:flex-col-reverse lg:flex-row "
                    image={home}
                    title="رایگان ورزش کنید!"
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده."
                />
                <Post
                    classes="max-lg:flex-col-reverse lg:flex-row "
                    image={program}
                    title="به برنامه های آموزشی کم هزینه تر دسترسی پیدا کنید."
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده."
                />
            </div>
        </>
    );
};

export default Blog;

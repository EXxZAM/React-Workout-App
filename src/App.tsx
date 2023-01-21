import { useState } from "react";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import Category from "./components/Programs/Programs";
import back from "./assets/images/back.png";
function App() {
    return (
        <div id="top" className="flex  flex-col gap-[120px]">
            <Header />
            <Hero />
            <Category />
            <Blog />
            <Membership />
            <a
                className="w-[150px] self-end justify-end ml-[64px] "
                href="#top"
            >
                <img src={back} />
            </a>
        </div>
    );
}

export default App;

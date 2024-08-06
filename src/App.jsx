import { useState, useEffect, useRef } from "react";
import Gaming from "./assets/images/image-gaming-growth.jpg";
import Retro from "./assets/images/image-retro-pcs.jpg";
import Laptop from "./assets/images/image-top-laptops.jpg";
import WebDesktop from "./assets/images/image-web-3-desktop.jpg";
import WebMobile from "./assets/images/image-web-3-mobile.jpg";
import Logo from "./assets/images/logo.svg";
import Hamburger from "./assets/images/icon-menu.svg";
import Close from "./assets/images/icon-menu-close.svg";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [mobileImage, setMobileImage] = useState(window.innerWidth < 640);
  const navBarControl = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
      setMobileImage(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbar = () => {
    if (navBarControl.current.classList.contains("translate-x-full")) {
      document.getElementById("overlay").classList.replace("hidden", "fixed");
      document.getElementById("overlay").classList.replace("opacity-0", "opacity-35");
      navBarControl.current.classList.replace("translate-x-full", "translate-x-0");
      
    } else if (navBarControl.current.classList.contains("translate-x-0")) {
      navBarControl.current.classList.replace("translate-x-0", "translate-x-full");
      document.getElementById("overlay").classList.replace("opacity-35", "opacity-0");
      document.getElementById("overlay").classList.replace("fixed", "hidden");
    }
  };

  return (
    <>
      <header>
        {isMobile ? (
          <>
            <div>
              <header id="overlay" className="transition ease-in-out hidden w-full h-full right-0 bg-black opacity-0"></header>
              <div ref={navBarControl} className="transition ease-in-out fixed w-[60%] h-full right-0 bg-owhite opacity-100 z-10 translate-x-full">
                <img onClick={handleNavbar} className="absolute right-0 m-6" src={Close} alt="Close" />
                <div className="text-gblue-500 mt-32 ml-4">
                  <p className="text-xl mb-8">Home</p>
                  <p className="text-xl mb-8">New</p>
                  <p className="text-xl mb-8">Popular</p>
                  <p className="text-xl mb-8">Trending</p>
                  <p className="text-xl mb-8">Categories</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-6 mx-4 items-center">
              <img src={Logo} alt="logo" />
              <div>
                <img onClick={handleNavbar} src={Hamburger} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-between py-6 items-center mt-10 mb-8 max-w-[1280px]">
            <img src={Logo} alt="logo" />
            <div className="flex justify-between text-gblue-200">
              <p className="cursor-pointer mr-10 hover:text-sred">Home</p>
              <p className="cursor-pointer mr-10 hover:text-sred">New</p>
              <p className="cursor-pointer mr-10 hover:text-sred">Popular</p>
              <p className="cursor-pointer mr-10 hover:text-sred">Trending</p>
              <p className="cursor-pointer hover:text-sred">Categories</p>
            </div>
          </div>
        )}
      </header>
      <div className="  mx-4 xl:mx-0 max-w-[1280px]">
        <div className="grid xl:grid-cols-3 xl:grid-rows-none sm:grid-rows-2 lg:grid-rows-[1.25fr_1fr] grid-rows-[1.5fr_1fr] gap-8">
          <div className="grid xl:col-span-2">
            <img
              src={mobileImage ? WebMobile : WebDesktop}
              className="object-cover"
              alt=""
            />
            <div className="grid xl:grid-cols-[1fr_1.2fr] xl:grid-rows-none grid-rows-[1fr_2fr] items-start mt-4">
              <p className="text-gblue-500 text-5xl xl:text-6xl font-[800]">
                The Bright Future of Web 3.0?
              </p>
              <div className="self-center xl:self-auto">
                <p className="text-gblue-200 font-medium text-xl">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="transition bg-sred px-12 py-4 text-gblue-500 font-[800] tracking-[.25em] mt-8 hover:bg-gblue-500 hover:text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[110px_150px_150px_150px] items-center px-8 bg-gblue-500">
            <p className="text-sorange text-5xl font-bold mt-4">New</p>
            <div className="">
              <p className="cursor-pointer text-xl font-bold hover:text-sorange">
                Hydrogen VS Electric Cars
              </p>
              <p className="text-gblue-50 border-b-2 pb-8">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="">
              <p className="cursor-pointer text-xl font-bold hover:text-sorange">
                The Downsides of AI Artistry
              </p>
              <p className="text-gblue-50 border-b-2 pb-8">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div>
              <p className="cursor-pointer text-xl font-bold hover:text-sorange">
                Is VC Funding Drying Up?
              </p>
              <p className="text-gblue-50">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 xl:grid-rows-none grid-rows-3 text-gblue-200 mb-10 mt-16 gap-4">
          <div className="grid grid-cols-[100px_2fr]">
            <img className="w-[100px]" src={Retro} alt="" />
            <div className="grid grid-rows-[40px_40px_45px] items-center ml-2 sm:ml-6">
              <p className="text-sred font-[800] text-3xl">01</p>
              <p className="cursor-pointer text-lg font-[800] text-gblue-500 hover:text-sred">
                Reviving Retro PCs
              </p>
              <p className=" font-medium">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_2fr]">
            <img className="w-[100px]" src={Laptop} alt="" />
            <div className="grid grid-rows-[40px_40px_45px] items-center ml-2 sm:ml-6">
              <p className="text-sred font-[800] text-3xl">02</p>
              <p className="cursor-pointer text-lg font-[800] text-gblue-500 hover:text-sred">
                Top 10 Laptops of 2022
              </p>
              <p className=" font-medium">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_2fr]">
            <img className="w-[100px]" src={Gaming} alt="" />
            <div className="grid grid-rows-[40px_40px_45px] items-center ml-2 sm:ml-6">
              <p className="text-sred font-[800] text-3xl">03</p>
              <p className="cursor-pointer text-lg font-[800] text-gblue-500 hover:text-sred">
                The Growth of Gaming
              </p>
              <p className=" font-medium">
                How the pandemic has sparked fresh opportunities?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

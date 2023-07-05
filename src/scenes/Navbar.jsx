import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
     hover:text-yellow transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
const Navbar = ({ isTopOfPage,selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width : 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
      <div className={`flex items-center justify-between mx-auto w-5/6`}>
        <h4 className={`font-playFair text-3xl font-bold`}>M<span className={`text-blue`}>B</span></h4>
        {/* DEKTOP NAV */}
        {isDesktop ? (
          <div
            className={`flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
          onClick={()=>setIsMenuToggled(!isMenuToggled)}
           className={`rounded-full bg-red p-2`}>
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {/* MOBILE MENU POP UP */}
        {!isDesktop && isMenuToggled && (
          <div className={`fixed right-0 bottom-0 h-full bg-blue w-[300px]`}>
            {/* CLOSE ICON  */}
            <div className={`flex justify-end p-12`}>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div
              className={`flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue `}
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

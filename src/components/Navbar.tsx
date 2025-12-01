import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Farmers", path: "/farmers" },
    { name: "Blog", path: "/blog" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-y-scroll">
      <nav
        className={`fixed top-0 left-0 bg-transparent w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled ? "bg-white shadow-md py-3 md:py-4" : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <a href="/" className="">
          <h1 className="font-cabin font-bold text-[25px] text-[#404040]">
            AGRIC<span className="text-primary">O</span>NNECT
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "group flex flex-col font-semibold gap-0.5 transition-all duration-300 text-base lg:text-lg text-greeny",
                  isActive && "text-primary"
                )
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  {link.name}
                  <div
                    className={cn(
                      "h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-greeny",
                      isActive && "bg-primary"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
          {/* <div className="flex items-center bg-background">
            <Input
              type="text"
              placeholder="Search Produce"
              className="border-0  focus-visible:ring-0 focus-visible:border-0 rounded-none"
            />
            <Button className="rounded-none bg-secondary hover:bg-secondary/80">
              Search
            </Button>
          </div> */}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => navigate("/cart")}
            variant={"outline"}
            className={cn(
              "rounded-full px-4! py-3 text-base lg:text-lg flex gap-2 text-greeny"
            )}
          >
            <ShoppingCart />
            <span>Cart</span>
          </Button>
          <Button
            className={cn(
              "bg-secondary text-base lg:text-lg font-bold rounded-full px-4! py-3 hover:bg-secondary/80 transition-opacity duration-300 "
            )}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden text-greeny">
          <Menu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-greeny"
            >
              {link.name}
            </a>
          ))}

          <Button
            onClick={() => {
              navigate("/cart");
              setIsMenuOpen(false);
            }}
            variant={"outline"}
            className="border text-greeny px-4 py-1 text-sm rounded-full cursor-pointer transition-all"
          >
            <ShoppingCart />
            <span>Cart</span>
          </Button>

          <Button className="text-white cursor-pointer px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

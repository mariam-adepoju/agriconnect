import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, userProfile, isLoading, logout } = useAuthStore();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Farmers", path: "/farmers" },
    { name: "Blog", path: "/blog" },
    { name: "Cart", path: "/cart" },
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

  const displayName =
    userProfile?.firstName || currentUser?.email?.split("@")[0] || "User";
  return (
    <div className="overflow-y-scroll z-50">
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
        </div>
        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          {isLoading ? (
            <div className="h-8 w-24 animate-pulse bg-gray-200 rounded-full" />
          ) : currentUser ? (
            <div className="flex items-center gap-4">
              {/* Avatar + Greeting */}
              <div className="flex items-center gap-3  px-3 py-1.5 ">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Logout Button */}
              <Button
                onClick={logout}
                variant="outline"
                className="rounded-full text-destructive font-semibold px-5 py-2 hover:text-destructive/80 hover:shadow-md transition-all"
              >
                <LogOut /> Logout
              </Button>
            </div>
          ) : (
            <>
              {/* Sign Up Button */}
              <Button
                onClick={() => navigate("/signup")}
                variant="outline"
                className="rounded-full border-greeny text-greeny font-semibold px-6 py-2 hover:border-primary hover:text-primary hover:bg-white transition-all"
              >
                Sign Up
              </Button>

              {/* Login Button */}
              <Button
                onClick={() => navigate("/login")}
                className="rounded-full bg-secondary text-grany font-semibold px-6 py-2 hover:bg-secondary/80 hover:shadow-md transition-all"
              >
                Login
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden text-greeny">
          {currentUser ? (
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {displayName.charAt(0).toUpperCase()}
            </div>
          ) : null}
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
          {currentUser ? (
            <Button
              onClick={logout}
              variant="outline"
              className="rounded-full text-destructive border-destructive font-semibold px-5 py-2 hover:text-destructive/80 hover:shadow-md transition-all"
            >
              <LogOut /> Logout
            </Button>
          ) : (
            <>
              <Button
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
                variant={"outline"}
                className="border text-greeny px-4 py-1 text-sm rounded-full cursor-pointer transition-all"
              >
                Sign up
              </Button>

              <Button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer px-8 py-2.5 rounded-full transition-all duration-500"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

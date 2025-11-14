import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-grany/70">
        <div className="max-w-96">
          <h1 className="font-cabin font-bold text-[25px] text-white">
            AGRIC<span className="text-secondary">O</span>NNECT
          </h1>
          <p className="mt-5 mb-3 text-sm text-grany">
            Bridging The Gap Between Farmers And Consumers.
          </p>
          <div className="mt-2 text-sm text-grany flex gap-2">
            <MapPin size={20} /> <span> Lagos, Nigeria. </span>
          </div>
          <div className="mt-2 text-sm text-grany flex gap-2">
            <Mail size={20} /> <span> info@agriconnect.com </span>
          </div>
          <div className="mt-2 text-sm text-grany flex gap-2">
            <Phone size={20} /> <span> +234 800 000 000 </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-secondary text-xl mb-5">
              QUICK LINKS
            </h2>
            <ul className="text-sm text-grany space-y-2 list-none">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-secondary mb-5 text-xl">
              COMPANY
            </h2>
            <div className="text-sm text-grany space-y-2 list-none">
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-grany">
        Copyright {new Date().getFullYear()} © <a href="/">AgriConnect</a>. All
        Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;

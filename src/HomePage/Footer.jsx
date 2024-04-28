import Logo from "../assets/TransparentLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-200 mt-section">
      <div className="mx-auto flex max-w-full flex-col items-center justify-around px-16 py-8 md:flex-row md:px-8">
        <div className="sm:col-span-2 basis-1/2">
          <Link to="/">
            <div className="justify-center gap-2 pb-4 md:flex">
              <img
                src={Logo}
                alt="JMJ Retirement icon"
                className="h-12 sm:h-16"
              />
            </div>
          </Link>
        </div>
        <div className="space-y-2 text-sm basis-1/2">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Direct:</p>
            <a
              href="tel:(630) 881-1757"
              aria-label="Our phone"
              title="Our phone"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              630-881-1757
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Fax:</p>
            <a
              href="tel:(414) 435-0247"
              aria-label="Our phone"
              title="Our phone"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              414-435-0247
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:jjedynak@jmjretirement.com"
              aria-label="Our email"
              title="Our email"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              jjedynak@jmjretirement.com
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps/place/8072+S+66th+St,+Franklin,+WI+53132/@42.8980024,-88.0008288,17z/data=!3m1!4b1!4m6!3m5!1s0x8805126edd0f78f1:0xa1e7c932ae90b9d7!8m2!3d42.8980024!4d-87.9982539!16s%2Fg%2F11crvbcb0p?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              8072 S 66th Ct Franklin, WI 53132
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagramSquare, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/Citizshrestha", hoverClass: "social-github"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/citiz-shrestha-00805b249/", hoverClass: "social-linkedin"},
    {icon: <FaInstagramSquare/>, path:"https://www.instagram.com/citizshresthaa/", hoverClass: "social-instagram"},
    {icon: <FaTwitter/>, path:"https://x.com/citizShrestha", hoverClass: "social-twitter"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, idx) => {
           return (
           <Link key={idx} href={social.path} className={`${iconStyles} ${social.hoverClass}`} target="_blank" rel="noopener noreferrer">
              {social.icon}
           </Link>
        );
        })}
    </div>
  );
};

export default Social

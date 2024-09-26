import React from 'react'
import Link from "next/link";

const Links = [
      {href: "\AboutUs", text: "AboutUs" },
      {href: "\Newsletter", text: "Newsletter" },
      {href: "\Judgements", text: "Judgements" },
];



const Navbar = () => {
  return (
       <nav className ="bg-base-300">
            <div className ="navbar max-w-6xl mx-auto flex-col sm:flex-row">
                 <Link href="/" className="btn btn-primary">
                 Home
                 </Link>
                 <ul className ="menu md:ml-8 flex-col sm:flex-row">
                     {Links.map((link) => (
                        <li key={link.href}>
                              <link href={link.href} className="captalize">
                              {link.text}
                              </link>
                        </li>
                     ))}
                 </ul>
            </div>
       </nav>
  )
};

export default Navbar;
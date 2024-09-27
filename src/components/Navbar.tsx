import React from 'react'
import Link from "next/link";

const Links = [
      {href: "\AboutUs", text: "AboutUs" },
      {href: "\Newsletter", text: "Newsletter" },
      {href: "\Judgements", text: "Judgements" },
];



const Navbar = () => {
  return (
       <button className ="bg-sky-500 hover:bg-sky-500..." >
            <div className="size-full md:size-auto"> 
            <div className="text-[30px]">
            <div className="flex Justify-evenly...">
                  <div className="flex-none w-14 ...">
                        Home
                  </div>
                  <div className="flex-auto w-64 ...">
                        AboutUs
                  </div>
                  <div className="flex-auto w-32 ...">
                        Newsletter
                  </div>
                  <div className="flex-auto w-64 ...">
                        Judgements
                  </div>
            </div>
            </div>
            </div>
            
      </button>
  )
};

export default Navbar;
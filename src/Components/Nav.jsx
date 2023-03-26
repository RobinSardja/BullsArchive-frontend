import React from 'react'
import Button from './Button'
import { useState } from 'react';

const Nav = () => {
    let links = [
        { name:"Home", link:"/" },
        { name:"About", link:"/" }
    ];

    let [open,setOpen]=useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 px-10">
                <div className="font-bold text-2x1 cursor-pointer flex items-center gap-4 text-gray-800">
                    <img className="w-12" src="../public/usf logo.png" />
                    <p>BullsArchive</p> 
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">
                    <i className="material-icons">{open ? "close" : "menu"}</i>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18':'top-[-450px]'  }`}>
                    {
                        links.map( (link) => (
                            <li key={link.name} className="md:ml-8 text-x1 md:my-0 my-6">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Get Started</Button>
                </ul>
            </div>
        </div>
    )
}

export default Nav
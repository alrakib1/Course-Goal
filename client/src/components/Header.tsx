// import {type PropsWithChildren } from "react";
// type HeaderProps = PropsWithChildren<{image:{src:string, alt:string}}>

import {type ReactNode } from "react";


type HeaderProps ={
    image: {
        src: string,
        alt: string
    },
    children: ReactNode
}


const Header = ({image,children}:HeaderProps) => {
    return (
        <header>
            {/* <img src={image.src} alt={image.alt} />  on image it will take all the value and spread it*/}
            <img {...image}/>  
            {children}
        </header>
    );
};

export default Header;
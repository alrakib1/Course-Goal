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
        <div>
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image}/>  //it will take all the key value and spread it 
            {children}
        </div>
    );
};

export default Header;
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Routes = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Solutions",
        path: "/solutions"
    },
    {
        title: "Stories",
        path: "/stories"
    },
    {
        title: "Partners",
        path: "/partners"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Blog",
        path: "/blog"
    },
];

const HeaderLogo = ({ img_src, img_alt, link }) => {
    return <div><Link to={link}><img src={img_src} alt={img_alt} /></Link></div>
}

const HeaderRight = ({ title, path}) => {
    return(
   <>
    <ul>
        <Link to={path}><li>{title}</li></Link>
    </ul>
   </>
       
    )
}

const Header = () => {
    return (
        <div className="header-container">
            <header className="header-content">
                <HeaderLogo 
                    link="/"
                    src="../../assets/bellotero.png"
                    alt="bellotero"
                />
                {Routes.map((route) => {
                  const capitalizedName = route.title
                        const path = route.path
                        return <HeaderRight 
                            title={capitalizedName}
                            path={path}
                         /> 
                    
                })}
               
            </header>
        </div>
    )
}

export default Header;

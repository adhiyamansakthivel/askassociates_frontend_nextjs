'use client'

import React, { useContext, useEffect, useState } from "react";
import { navbarList } from "@/utils/utils";
import APIEndPoints from "@/utils/APIEndPoints";
import { useAPIGet } from "@/services/APIService";
import Image from "next/image";
import './Header.scss';
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { DataContext } from "../../context/DataContext";




const mobileNavToggleLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
   

    event.preventDefault();
  
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelector('body')?.classList.toggle('mobile-nav-active');
    mobileNavShow?.classList.toggle('d-none');
    mobileNavHide?.classList.toggle('d-none');
  };
  
  const navDropdowns = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      event.currentTarget.classList.toggle('active');
      event.currentTarget.nextElementSibling?.classList.toggle('dropdown-active');
  
      const dropDownIndicator = event.currentTarget.querySelector('.dropdown-indicator');
      dropDownIndicator?.classList.toggle('bi-chevron-up');
      dropDownIndicator?.classList.toggle('bi-chevron-down');
    }
  };
  

const Header = () => {
    
  const businessDetails:any = useContext(DataContext);
  const businessDet:any = businessDetails?.businessContants;


  const pathname:any = usePathname();
  const isActive = (path:any) => path === pathname;

  
  const apiheaderProductList:any = useAPIGet(
    "headerProductList",
    "headerProductList",
    `${APIEndPoints.GetCategory.url}`,
    {
      enabled: !!APIEndPoints?.GetCategory?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );



  

      

  
  
    return (
        <>
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    {/* <i className="bi bi-envelope d-flex align-items-center">
                    <a className="headerMail" href={`mailto:${businessDet?.email}`}>
                    {businessDet?.email}
                    </a>
                    </i> */}
                    <i className="bi bi-phone d-flex align-items-center ms-4">
                        <a
                            href={`tel:${businessDet?.phone_1}`}
                        >
                            <span>+91 {businessDet?.phone_1}</span>
                        </a>

                    </i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                    </a>
                    <a href="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                    </a>
                    <a href="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                </div>
            </section>
     
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center ">
                    <h1>
                        <img
                            src="/assets/images/logo.png"
                            style={{width:'60px', height:'60px'}}          
                            className="cursor"
                            alt="ASK Associates"
                        />
                        <span style={{color:"#C60101", fontWeight:"bold"}}>ASK</span>&nbsp;<label style={{color:"#474646"}}>Associates</label>                   
                    </h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li   className="navLinkCustom" > 
                            <Link className={isActive('/') ? 'active' : ''}  href='/'   >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li   className="dropdown navLinkCustom" > 
                            <a  onClick={(event: React.MouseEvent<HTMLAnchorElement>) => navDropdowns(event)} style={{color:"#fd0303"}}>
                                <span>Our Products</span>
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                            {apiheaderProductList?.isSuccess && apiheaderProductList?.data?.data?.data?.length !==0 && apiheaderProductList?.data?.data?.data?.map((item:any, index:BigInteger) => (
                                <li  key={item.id + index}>
                                    <Link href={`/category/`+item.slug_url} >
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                            <hr/>
                            <li>
                                <Link href='/products' >
                                    <span>All Products</span>
                                </Link>
                            </li>
                               
                            </ul>
                        </li>
                        <li   className="navLinkCustom" > 
                            <Link className={isActive('/about') ? 'active' : ''} href='/about' >
                                <span>AboutUs</span>
                            </Link>
                        </li>
                        <li   className="navLinkCustom" > 
                            <Link className={isActive('/contact') ? 'active' : ''} href='/contact'  >
                                <span>ContactUs</span>
                            </Link>
                        </li>
                    
                    </ul>
                </nav>
                <i
                    className="mobile-nav-toggle mobile-nav-show bi bi-list"
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => mobileNavToggleLink(event)}
                ></i>
                <i
                    className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>mobileNavToggleLink(event)}
                ></i>
                </div>
            </header>
        
        </>
    )
}

export default Header;
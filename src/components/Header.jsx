import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Header = () => {


    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                
                <div className="header_menu">
                    <div className="header_menu_logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header_menu_mobile-tonggle" onClick={menuToggle}>
                        <i class='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header_menu_left" ref={menuLeft}>
                        <div className="header_menu_left_close" onClick={menuToggle}>
                            <i class='bx bx-chevrons-left'></i>
                        </div>

                        <div className="header_menu_item  header_menu_left_item"  onClick={menuToggle}>
                            <Link to="/">
                                <span>Introduction</span>
                            </Link>
                        </div>

                        <div className="header_menu_item  header_menu_left_item"  onClick={menuToggle}>
                            <Link to="/">
                                <span>solution</span>
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item"  onClick={menuToggle}>
                            <Link to="/">
                                <span>Rate plan</span>  
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item_line"  onClick={menuToggle}>
                            
                        </div>
                        <div className="header_menu_item  header_menu_left_item"  onClick={menuToggle}>
                            <Link to="/">
                                <span>login</span>
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item"  onClick={menuToggle}>
                            <Link to="/">
                                <span>Apply for free use</span>
                            </Link>
                        </div>
                        
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Header

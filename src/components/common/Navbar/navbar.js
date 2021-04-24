import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo/logo'
import * as classes from './navbar.module.css'

const Navbar = (props) => {
    useEffect(() => {
        var last_scroll_top = 0;
        var scroll_top = 0;
        var smartScrollbar = document.querySelector('.smart-scroll');

        document.addEventListener('scroll', function () {

            scroll_top = document.querySelector('html').scrollTop;
            if (scroll_top < last_scroll_top) {
                smartScrollbar.classList.remove('scrolled-down')
                smartScrollbar.classList.add('scrolled-up');
            }
            else {
                smartScrollbar.classList.remove('scrolled-up')
                smartScrollbar.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

            if (scroll_top === 0) {
                smartScrollbar.style = "box-shadow: none; background: transparent;";
            }
            else {
                smartScrollbar.style = "box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
            }

        });

    }, [])

    const [navbarOpen, setNavbarOpen] = useState(false)

    useEffect(() => {
        if(navbarOpen) {
            document.querySelector('.smart-scroll').classList.add('scrolled-down-permanent');
        } else {
            document.querySelector('.smart-scroll').classList.remove('scrolled-down-permanent')
        }
    }, [navbarOpen])

    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen)
    }

    const navbarCloseHandler = () => {
        setNavbarOpen(false)
    }

    return (
        <div className={classes.navbar + ' ' + (props.lightMode && ' ' + classes.light)}>
            <Link to="/">
                <div className={classes.logo + ' ' + (props.lightMode && ' ' + classes.light)}>
                    <Logo />
                </div>
            </Link>
            <div className={classes.links + ' ' + (navbarOpen && ' ' + classes.open)}>
                <div><Link to="/#about" onClick={navbarCloseHandler}>ABOUT</Link></div>
                <div><Link to="/#featuredProjects" onClick={navbarCloseHandler}>PROJECTS</Link></div>
                <div><Link to="/#contact" onClick={navbarCloseHandler}>CONTACT</Link></div>
                <div onClick={navbarCloseHandler}>RESUME</div>
                <div onClick={props.toggleLightMode}>{props.lightMode ? 'DARK MODE' : 'LIGHT MODE'}</div>
            </div>
            <div className={classes.hamburger + ' ' + (navbarOpen && ' ' + classes.open)}>
                <button onClick={navbarToggleHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </div>
    )
}

export default Navbar
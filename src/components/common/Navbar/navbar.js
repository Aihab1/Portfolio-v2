import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo/logo'
import * as classes from './navbar.module.css'

const navbar = () => {
    return (
        <div className={classes.navbar}>
            <Link to="/">
                <Logo />
            </Link>
            <div className={classes.links}>
                <div><Link to="/#about">ABOUT</Link></div>
                <div><Link to="/#featuredProjects">PROJECTS</Link></div>
                <div><Link to="/#contact">CONTACT</Link></div>
                <div>RESUME</div>
            </div>
        </div>
    )
}

export default navbar
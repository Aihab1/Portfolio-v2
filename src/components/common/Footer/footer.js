import React from 'react'
import { useStateValue } from '../../../contextapi/StateProvider'

import * as classes from './footer.module.css'
import gatsbyLogo from '../../../assets/images/Gatsby_Logo_White.svg'
import gatsbyLogoNormal from '../../../assets/images/Gatsby-Logo.svg'

const Footer = () => {
    const [{ lightMode }, dispatch] = useStateValue();
    return (
        <div className={classes.footerOuter + ' ' + (lightMode && ' ' + classes.light)}>
            <p>Designed and Developed by</p>
            <h1><a href="https://linkedin.com/in/aihabumair" target="_blank">Aihab Umair</a></h1>
            <br></br>
            <p>Built and Integrated with</p>
            <a href="https://www.gatsbyjs.com/" target="_blank">
                <img src={lightMode ? gatsbyLogoNormal : gatsbyLogo} alt="gatsby logo"></img>
            </a>
            <br></br>
            <p>© All rights are reserved | 2021 </p>
        </div>
    )
}

export default Footer
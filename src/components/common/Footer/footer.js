import React from 'react'
import * as classes from './footer.module.css'
import gatsbyLogo from '../../../assets/images/Gatsby_Logo_White.svg'
import gatsbyLogoNormal from '../../../assets/images/Gatsby-Logo.svg'

const footer = (props) => {
    return (
        <div className={classes.footerOuter + ' ' + (props.lightMode && ' ' + classes.light)}>
            <p>Designed and Developed by</p>
            <h1><a href="https://github.com/aihab1" target="_blank">Aihab Umair</a></h1>
            <br></br>
            <p>Built and Integrated with</p>
            <a href="https://www.gatsbyjs.com/" target="_blank">
                <img src={props.lightMode ? gatsbyLogoNormal : gatsbyLogo} alt="gatsby logo"></img>
            </a>
            <br></br>
            <p>© All rights are reserved | 2021 </p>
        </div>
    )
}

export default footer
import React from 'react'
import * as classes from './footer.module.css'
import gatsbyLogo from '../../../assets/images/Gatsby_Logo_White.svg'
import gatsbyLogoNormal from '../../../assets/images/Gatsby-Logo.svg'

const footer = (props) => {
    return (
        <div className={classes.footerOuter + ' ' + (props.lightMode && ' ' + classes.light)}>
            <p>Designed and Built by</p>
            <h1>Aihab Umair</h1>
            <br></br>
            <p>Powered by</p>
            <img src={props.lightMode ? gatsbyLogoNormal : gatsbyLogo} alt="gatsby logo"></img>
            <br></br>
            <p>© All rights are reserved | 2021 </p>
        </div>
    )
}

export default footer
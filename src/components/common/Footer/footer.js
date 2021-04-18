import React from 'react'
import * as classes from './footer.module.css'
import gatsbyLogo from '../../../assets/images/Gatsby_Logo_White.svg'

const footer = () => {
    return (
        <div className={classes.footerOuter}>
            <p>Designed and Built by</p>
            <h1>Aihab Umair</h1>
            <br></br>
            <p>Powered by</p>
            <img src={gatsbyLogo} alt="gatsby logo"></img>
            <br></br>
            <p>© All rights are reserved | 2021 </p>
        </div>
    )
}

export default footer
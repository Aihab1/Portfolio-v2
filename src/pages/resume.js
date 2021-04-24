import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'

const Resume = (props) => {
    const [lightMode, setLightMode] = useState(props.location.search === '?theme=light')

    const lightModeToggleHandler = () => {
        setLightMode(!lightMode)
    }

    return (
        <div className={'outermost-index-div outermost-div' + ' ' + (lightMode && ' ' + 'light')}>
            <Helmet>
                {!lightMode && <meta name="theme-color" content="#000" />}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Resume</title>
            </Helmet>
            <div className='smart-scroll'>
                <Navbar lightMode={lightMode} toggleLightMode={lightModeToggleHandler} />
            </div>
            <div className="projects-outer">
                <p>This page will be updated soon. Check back later!</p>
            </div>
            <Footer lightMode={lightMode} />
        </div>
    )
}

export default Resume
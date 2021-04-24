import React, { useState } from 'react'
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'

const Resume = (props) => {
    const [lightMode, setLightMode] = useState(props.location.search === '?theme=light')

    const lightModeToggleHandler = () => {
        setLightMode(!lightMode)
    }

    return (
        <div className={'outermost-index-div outermost-div' + ' ' + ( lightMode && ' ' + 'light')}>
            <div className='smart-scroll'>
                <Navbar lightMode={lightMode} toggleLightMode={lightModeToggleHandler} />
            </div>
            <div className="projects-outer">
                <p>This page will be updated soon. Check back later!</p>
            </div>
            <Footer lightMode={lightMode}/>
        </div>
    )
}

export default Resume
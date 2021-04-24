import React, { useState } from 'react'
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'
import ProjectsGrid from '../components/common/ProjectsGrid/projectsGrid'

const Projects = (props) => {
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
                <ProjectsGrid lightMode={lightMode}/>
            </div>
            <Footer lightMode={lightMode}/>
        </div>
    )
}

export default Projects
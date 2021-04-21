import React, { useState } from 'react'
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'
import ProjectsGrid from '../components/common/ProjectsGrid/projectsGrid'

const Projects = (props) => {
    const [lightMode, setLightMode] = useState(props.location.state.lightMode)

    const lightModeToggleHandler = () => {
        setLightMode(!lightMode)
    }

    return (
        <div className={'outermost-index-div outermost-div' + ' ' + ( lightMode && ' ' + 'light')}>
            <Navbar lightMode={lightMode} toggleLightMode={lightModeToggleHandler} />
            <div className="projects-outer">
                <ProjectsGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Projects
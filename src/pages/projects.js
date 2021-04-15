import React from 'react'
import Navbar from '../components/common/Navbar/navbar'
import ProjectsGrid from '../components/common/ProjectsGrid/projectsGrid'

const projects = () => {
    return (
        <div className="outermost-div">
            <Navbar />
            <div className="projects-outer">
                <ProjectsGrid />
            </div>
        </div>
    )
}

export default projects
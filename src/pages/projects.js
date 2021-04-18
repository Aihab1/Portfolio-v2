import React from 'react'
import Footer from '../components/common/Footer/footer'
import Navbar from '../components/common/Navbar/navbar'
import ProjectsGrid from '../components/common/ProjectsGrid/projectsGrid'

const projects = () => {
    return (
        <div className="outermost-div">
            <Navbar />
            <div className="projects-outer">
                <ProjectsGrid />
            </div>
            <Footer />
        </div>
    )
}

export default projects
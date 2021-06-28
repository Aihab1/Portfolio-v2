import React from 'react'

import { useStateValue } from '../../../contextapi/StateProvider'

import Skill from '../../common/Skill/skill'
import collegeImage from '../../../assets/images/iitbhu2.jpg'
import * as classes from './about.module.css'

const About = () => {
    const [{ lightMode }, dispatch] = useStateValue();
    return (
        <div id="about" className={classes.outer + ' ' + (lightMode && ' ' + classes.light)}>
            <div className={classes.about}>
                <div className={classes.subheading}>
                    <p>ABOUT ME</p><hr></hr>
                </div>
                <div className={classes.content}>
                    <h1>IIT BHU</h1>
                    <p style={{ marginTop: '-10px', marginBottom: '10px' }}>2019-2023</p>
                    <p>I am currently pursuing my B.Tech in Chemical Engineering at IIT BHU. I have keen interest in Web Development, DS & Algo and I also do competitive programming occasionally. I am an ardent follower of the latest front-end technologies and I can also do a bit of back-end.</p>
                </div>
                <div className={classes.imageHolder}>
                    <img src={collegeImage} alt="IIT BHU" />
                </div>
            </div>
            <div className={classes.subOuter}>
                <div className={classes.skills}>
                    <div className={classes.subheading2}>
                        <hr></hr><p>SKILLS & TECHNOLOGIES</p>
                    </div>
                    <h1>Programming Languages</h1>
                    <div className={classes.grid}>
                        <Skill name="Javascript (ES6)" />
                        <Skill name="HTML" />
                        <Skill name="CSS/Sass" />
                        <Skill name="C++" />
                        <Skill name="Java" />
                        <Skill name="Python" />
                        <Skill name="SQL (ORMs)" />
                    </div>
                    <h1>Libraries & Frameworks</h1>
                    <div className={classes.grid}>
                        <Skill name="jQuery" />
                        <Skill name="React" />
                        <Skill name="Gatsby" />
                        <Skill name="Node.js" />
                        <Skill name="Express" />
                        <Skill name="MongoDB" />
                        <Skill name="Flask" />
                        <Skill name="Django" />
                        <Skill name="Pygame" />
                    </div>
                    <h1>Tools & Platforms</h1>
                    <div className={classes.grid}>
                        <Skill name="Git" />
                        <Skill name="Github" />
                        <Skill name="Heroku" />
                        <Skill name="Netlify" />
                        <Skill name="Firebase" />
                        <Skill name="Postman" />
                        <Skill name="VSCode" />
                    </div>
                    <div className={classes.background}></div>
                </div>
            </div>
        </div>
    )
}

export default About
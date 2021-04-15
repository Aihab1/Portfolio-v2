import React from 'react'
import Skill from '../../common/Skill/skill'
import collegeImage from '../../../assets/images/iitbhu2.jpg'
import * as classes from './about.module.css'

const about = () => {
    return (
        <div id="about" className={classes.outer}>
            <div className={classes.about}>
                <div className={classes.imageHolder}>
                    <img src={collegeImage} alt="IIT BHU" />
                </div>
                <div className={classes.subheading}>
                    <p>ABOUT ME</p><hr></hr>
                </div>
                <div className={classes.content}>
                    <h1>IIT BHU</h1>
                    <p style={{ marginTop: '-10px', marginBottom: '10px' }}>2019-2023</p>
                    <p>I am currently pursuing my B.Tech in Chemical Engineering at IIT BHU. I have keen interest in Web Development, DS & Algo and I also do competitive programming occasionally. I am an ardent follower of the latest front-end technologies and I can also do a bit of back-end.</p>
                </div>
            </div>
            <div className={classes.subOuter}>
                <div className={classes.skills}>
                    <div className={classes.subheading2}>
                        <hr></hr><p>SKILLS & TECHNOLOGIES</p>
                    </div>
                    <h1>Tools and Languages</h1>
                    <div className={classes.grid}>
                        <Skill name="HTML" />
                        <Skill name="CSS" />
                        <Skill name="Sass" />
                        <Skill name="Javascript" />
                        <Skill name="React.js" />
                        <Skill name="Express.js" />
                        <Skill name="Node.js" />
                        <Skill name="MongoDB" />
                        <Skill name="Python" />
                        <Skill name="Flask" />
                        <Skill name="Django" />
                        <Skill name="SQLite (+ORMs)" />
                        <Skill name="C++" />
                        <Skill name="Java" />
                        <Skill name="Pygame" />
                        <Skill name="Git" />
                        <Skill name="Postman" />
                        <Skill name="VSCode" />
                    </div>
                    <h1>Platforms</h1>
                    <div className={classes.grid}>
                        <Skill name="Github" />
                        <Skill name="Heroku" />
                        <Skill name="Firebase" />
                    </div>
                    <div className={classes.background}></div>
                </div>
            </div>
        </div>
    )
}

export default about
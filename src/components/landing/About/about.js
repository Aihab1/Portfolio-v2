import React from 'react'
import Skill from '../../common/Skill/skill'
import collegeImage from '../../../assets/images/iitbhu2.jpg'
import * as classes from './about.module.css'

const about = (props) => {
    return (
        <div id="about" className={classes.outer + ' ' + (props.lightMode && ' ' + classes.light)}>
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
                        <Skill lightMode={props.lightMode} name="Javascript (ES6)" />
                        <Skill lightMode={props.lightMode} name="HTML" />
                        <Skill lightMode={props.lightMode} name="CSS/Sass" />
                        <Skill lightMode={props.lightMode} name="C++" />
                        <Skill lightMode={props.lightMode} name="Java" />
                        <Skill lightMode={props.lightMode} name="Python" />
                        <Skill lightMode={props.lightMode} name="SQL (ORMs)" />
                    </div>
                    <h1>Libraries & Frameworks</h1>
                    <div className={classes.grid}>
                        <Skill lightMode={props.lightMode} name="jQuery" />
                        <Skill lightMode={props.lightMode} name="React" />
                        <Skill lightMode={props.lightMode} name="Gatsby" />
                        <Skill lightMode={props.lightMode} name="Node.js" />
                        <Skill lightMode={props.lightMode} name="Express" />
                        <Skill lightMode={props.lightMode} name="MongoDB" />
                        <Skill lightMode={props.lightMode} name="Flask" />
                        <Skill lightMode={props.lightMode} name="Django" />
                        <Skill lightMode={props.lightMode} name="Pygame" />
                    </div>
                    <h1>Tools & Platforms</h1>
                    <div className={classes.grid}>
                        <Skill lightMode={props.lightMode} name="Git" />
                        <Skill lightMode={props.lightMode} name="Github" />
                        <Skill lightMode={props.lightMode} name="Heroku" />
                        <Skill lightMode={props.lightMode} name="Netlify" />
                        <Skill lightMode={props.lightMode} name="Firebase" />
                        <Skill lightMode={props.lightMode} name="Postman" />
                        <Skill lightMode={props.lightMode} name="VSCode" />
                    </div>
                    <div className={classes.background}></div>
                </div>
            </div>
        </div>
    )
}

export default about
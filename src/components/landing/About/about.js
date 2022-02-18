import React from 'react'

import { useStateValue } from '../../../contextapi/StateProvider'

import Skill from '../../common/Skill/skill'
import collegeImage from '../../../assets/images/iitbhu2.jpg'
import * as classes from './about.module.css'

const About = () => {
    const [{ lightMode }] = useStateValue();
    return (
        <div id="about" className={`${classes.outer} ${(lightMode && classes.light)}`}>
            <div className={classes.about}>
                <div className={classes.subheading}>
                    <p>ABOUT ME</p><hr></hr>
                </div>
                <div className={classes.content}>
                    <h1>IIT BHU</h1>
                    <p style={{ marginTop: '-10px', marginBottom: '10px', color: '#6b6dff' }}>2019-2023</p>
                    <p>I am currently pursuing B.Tech in Chemical Engineering at IIT BHU. I have keen interest in Web Development, DS & Algo and I also do competitive programming occasionally. I am an ardent follower of the latest front-end technologies and I can also do a bit of back-end.</p>
                </div>
                <div className={classes.imageHolder}>
                    <img src={collegeImage} alt="IIT BHU" />
                </div>
            </div>
            <div className={classes.subOuter}>
                <div className={classes.skills}>
                    <h1 className={classes.firstHeading}>Programming Languages</h1>
                    <div className={classes.grid}>
                        <Skill name="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <Skill name="HTML" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <Skill name="CSS" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <Skill name="Sass" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <Skill name="C" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                        <Skill name="C++" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                        <Skill name="Java" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <Skill name="Python" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <Skill name="MySQL" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        <Skill name="PostgreSQL" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        <Skill name="SQLAlchemy" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />
                    </div>
                    <h1>Libraries and Frameworks</h1>
                    <div className={classes.grid}>
                    <Skill name="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <Skill name="Redux" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <Skill name="Gatsby" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" />
                        <Skill name="Node.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <Skill name="Next.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
                        <Skill name="Express" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <Skill name="MongoDB" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        <Skill name="Jest" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                        <Skill name="Flask" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                        <Skill name="Django" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
                        <Skill name="jQuery" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
                        <Skill name="Socket.io" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />
                        <Skill name="Pygame" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" />
                        <Skill name="Bootstrap" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
                        <Skill name="Material UI" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        <Skill name="Tailwindcss" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                    </div>
                    <h1>Tools and Platforms</h1>
                    <div className={classes.grid}>
                        <Skill name="Git" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <Skill name="Github" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <Skill name="Heroku" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" />
                        <Skill name="Firebase" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        <Skill name="VSCode" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                        <Skill name="Figma" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
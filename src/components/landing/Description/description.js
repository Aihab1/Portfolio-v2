import React from 'react'
import { Link } from 'gatsby'
import { useStateValue } from '../../../contextapi/StateProvider'

import * as classes from './description.module.css'
import resumeLink from '../../../assets/documents/resume.pdf'

const Description = () => {
    const [{ lightMode }] = useStateValue();
    return (
        <div id="description" className={`${classes.outer} ${(lightMode && classes.light)}`}>
            <div className={classes.description}>
                <p className={classes.hi}>Hi, my name is</p>
                <h1 className={`${classes.myName} ${(lightMode && classes.light)}`}>Aihab Umair.</h1>
                <h1>I create full stack solutions that deliver.</h1>
                <p>I am an engineering student at the Indian Institute of Technology (BHU), Varanasi. I like pretty much everything related to web development. Free? Let's build something together!</p>

                <div className={classes.buttondiv}>
                    <Link to="/#about">
                        <button>
                            View Portfolio
                        </button>
                    </Link>
                    <a href={resumeLink} target="_blank" rel="noreferrer">
                        <button>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Description
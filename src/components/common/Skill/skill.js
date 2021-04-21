import React from 'react'
import * as classes from './skill.module.css'

const skill = (props) => {
    return (
        <div className={classes.skill + ' ' + (props.lightMode && ' ' + classes.light)}>
            {props.name}
        </div>
    )
}

export default skill
import React from 'react'
import { useStateValue } from '../../../contextapi/StateProvider'
import * as classes from './skill.module.css'

const Skill = (props) => {
    const [{ lightMode }, dispatch] = useStateValue();
    return (
        <div className={classes.skill + ' ' + (lightMode && ' ' + classes.light)}>
            <p>{props.name}</p>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default Skill
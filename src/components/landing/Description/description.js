import React from 'react'
import { Link } from 'gatsby'
import * as classes from './description.module.css'

const description = (props) => {
    return (
        <div id="description" className={classes.outer + ' ' + (props.lightMode && ' ' + classes.light)}>
            <div className={classes.description}>
                <p>Hi, my name is</p>
                <h1 style={{ color: 'white' }}>Aihab Umair.</h1>
                <h1 style={{ marginTop: '-20px' }}>I develop websites that deliver.</h1>
                <p>I am an engineering student at the Indian Institute of Technology (BHU), Varanasi. I like pretty much everything related to web development. Free? Let's build something together!</p>

                <div className={classes.buttondiv}>
                    <Link to="/#about">
                        <button type="submit">
                            <svg width="25px" height="25px" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill"
                                fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z" />
                            </svg>
                            VIEW PORTFOLIO
                        </button>
                    </Link>
                </div>
            </div>
            <div className={classes.background}></div>
        </div>
    )
}

export default description
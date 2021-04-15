import React from 'react'
import backgroundImage from '../../../assets/images/contactbackground.jpg'
import * as classes from './contact.module.css'

const contact = () => {
    return (
        <div id="contact" className={classes.contactOuter}>
            <div className={classes.subheading2}>
                <hr></hr><p>LET'S TALK</p>
            </div>
            <h1>Contact me</h1>
            <div className={classes.contact}>
                <div className={classes.contactBackground}>
                    <main>
                        <div className={classes.device}>
                            <section>
                                <img src={backgroundImage} alt="contact background"></img>
                            </section>
                        </div>
                    </main>
                </div>
                <div className={classes.contactInner}>
                    <p>Linkedin</p>
                    <p>Github</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Email</p>
                </div>
            </div>
        </div>
    )
}

export default contact
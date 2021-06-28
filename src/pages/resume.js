import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'

import { useStateValue } from '../contextapi/StateProvider'

const Resume = () => {
    //const [lightMode, setLightMode] = useState(props.location.search === '?theme=light')
    const [{ lightMode }, dispatch] = useStateValue();

    return (
        <div className={'outermost-index-div outermost-div' + ' ' + (lightMode && ' ' + 'light')}>
            <Helmet>
                {!lightMode && <meta name="theme-color" content="#000" />}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Resume</title>
            </Helmet>
            <div className='smart-scroll'>
                <Navbar />
            </div>
            <div className="projects-outer">
                <p>This page will be updated soon. Check back later!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Resume
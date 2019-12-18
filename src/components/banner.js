import React from 'react';
import Fade from 'react-reveal/Fade'
import SocialMedia from './socialMedia'


class Banner extends React.Component {

    STYLE =
        {
            color: "#fdfdfd",
            padding: "0 100px",
            width: "50%",
            paddingTop: "160px"
        }
    ;

    render() {
        return (
            <div style={this.STYLE}>
                <Fade bottom>
                    <h1 style={{fontSize: "100px", margin: "0"}}>Ofir Cohen</h1>
                </Fade>
                <Fade bottom delay={500}>
                    <p style={{fontSize: "30px", fontWeight: "200"}}>
                        Hello there! I am a web developer dedicated to developing and optimizing interactive,
                        user-friendly and feature-rich websites.
                    </p>
                </Fade>
                <Fade bottom delay={1000}>
                    <SocialMedia/>
                </Fade>
            </div>
        )
    }
}

export default Banner;

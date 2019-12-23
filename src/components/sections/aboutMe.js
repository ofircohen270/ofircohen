import React from 'react';
import Fade from 'react-reveal/Fade'

import Section from "./section";

const aboutMeText = "In consectetuer turpis ut velit. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Fusce neque. Curabitur nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.";

class AboutMe extends React.Component {

    render() {
        return (
            <Section style={{backgroundColor: "#1d1d1d"}}>
                <Fade delay={200}>
                    <h1 style={{color: "#f5f5f5"}}>About Me</h1>
                    <p style={{color: "#b7b7b7"}}>
                        {aboutMeText}
                    </p>
                </Fade>
            </Section>
        )
    }
}

export default AboutMe;

import React from 'react';

import Section from "./section";
import Banner from "./banner";
import background from '../images/background3.jpg'

class Header extends React.Component {

    STYLE =
        {
            position: "relative",
            minHeight: "500px",
            textAlign: "left",
            width: "100%",

            background: "no-repeat top center",
            backgroundImage: `url(${background})`,
            webkitBackgroundSize: "cover !important",
            backgroundSize: "cover !important"
        }
    ;

    render() {
        return (
            <Section style={this.STYLE}>
                <Banner/>
            </Section>
        )
    }
}

export default Header;

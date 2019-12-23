import React from 'react';
import {Container} from '@material-ui/core'

class Section extends React.Component {

    STYLE = {
        padding: "100px 0",
        textAlign: "center"
    };

    render() {
        return (
            <section style={{...this.STYLE, ...this.props.style}}>
                <Container>
                    {this.props.children}
                </Container>
            </section>
        )
    }
}

export default Section;

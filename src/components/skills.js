import React from 'react';
import Fade from 'react-reveal/Fade'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import {FaJs, FaHtml5, FaPython, FaCss3, FaReact} from 'react-icons/fa'

import Section from "./section";

const skills = [
    {
        name: "Python",
        icon: FaPython
    },
    {
        name: "JavaScript",
        icon: FaJs
    },
    {
        name: "HTML",
        icon: FaHtml5
    },
    {
        name: "Css",
        icon: FaCss3
    },
    {
        name: "react",
        icon: FaReact
    }
];

class Skills extends React.Component {

    render() {
        return (
            <Section style={{backgroundColor: "#282828", color: "#d0d0d0"}}>
                <Fade bottom delay={200}>
                    <h1 style={{marginBottom: "50px"}}>My Skills</h1>
                    <Grid container>
                        {skills.map((skill, key) => (
                            <Grid xs>
                                <div>{skill.icon({size: 70})}</div>
                                <Typography variant="overline" >{skill.name}</Typography>
                            </Grid>

                        ))}
                    </Grid>
                </Fade>
            </Section>
        )
    }
}

export default Skills;

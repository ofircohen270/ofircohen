import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import Section from "./section";

const jobs = [
    {
        datesString: "Jan 2015 - Mar 2017",
        title: "software & web developer",
        location: "8200, IDF",
        description: "• Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
            " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
            " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
            " React.js, Kotlin, Python, Swift and PHP.\n" +
            "• Involved in identifying and recruiting candidates, developing and enhancing the company’s engineering" +
            " culture both internally and within the tech community, and in reviewing and promoting engineers.",
        bulletPoints: [" Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
        " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
        " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
        " React.js, Kotlin, Python, Sw",
            "Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
            " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
            " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
            " React.js, Kotlin, Python, Sw"]
    },
    {
        datesString: "Jan 2015 - Mar 2017",
        title: "TOP SECRET",
        location: "8200, IDF",
        description: "• Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
            " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
            " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
            " React.js, Kotlin, Python, Swift and PHP.\n" +
            "• Involved in identifying and recruiting candidates, developing and enhancing the company’s engineering" +
            " culture both internally and within the tech community, and in reviewing and promoting engineers.",
        bulletPoints: [" Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
        " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
        " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
        " React.js, Kotlin, Python, Sw",
            "Led the growth of the in-house engineering capacity from 7 engineers to the present-day size of" +
            " 34 engineers. Currently in charge of 6 agile software development teams consisting of both in-house and" +
            " third-party engineers to deliver on a wide variety of technology services developed in Java, Go, Node.js," +
            " React.js, Kotlin, Python, Sw"]
    }
];

class JobCard extends React.Component {
    bull = <span style={{
        display: 'inline-block',
        margin: '0 10px',
        transform: 'scale(0.8)',
    }}>•</span>;

    render = () => (
        <Card style={{margin: "40px 20px"}}>
            <CardContent>
                <div style={{textAlign: "left", padding: "10px"}}>
                    <h2>{this.props.job.title}</h2>
                    <Typography variant="button" style={{fontSize: 15}} color="textSecondary" gutterBottom>
                        {this.props.job.location}
                        {this.bull}
                        {this.props.job.datesString}
                    </Typography>
                    <ul>
                        {this.props.job.bulletPoints.map((bulletPoint, key) => (
                            <li key={key} style={{margin: "15px 0px"}}>
                                {bulletPoint}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

class Experience extends React.Component {

    render() {
        return (
            <Section backgroundColor={"#eee"}>
                <h1>My Experience</h1>
                {jobs.map((job, key) => (
                    <JobCard key={key} job={job}/>
                ))}
            </Section>
        )
    }
}

export default Experience;

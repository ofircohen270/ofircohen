import React from 'react';

import yogaVideo from '../../images/yoga.mp4'
import animalsImg from '../../images/farm.jpg'
import guitarImg from '../../images/guitar.jpg'
import travelingImg from '../../images/travel.jpg'

import Section from "./section";

const mediaTypes = {
    VIDEO: "video", IMAGE: "image"
};

const hobbies = [
    {
        title: "Yoga",
        media: yogaVideo,
        mediaType: mediaTypes.VIDEO,
        description: "For body and mind"
    },
    {
        title: "Music",
        media: guitarImg,
        mediaType: mediaTypes.IMAGE,
        description: "Playing the guitar and jamming with friends"
    },
    {
        title: "Traveling",
        media: travelingImg,
        mediaType: mediaTypes.IMAGE,
        description: "I am a world traveler, meeting new people and cultures is my passion."
    },
    {
        title: "Animals",
        media: animalsImg,
        mediaType: mediaTypes.IMAGE,
        description: "I have been volunteering in a sanctuary farm in Israel in the last few years. I love all my " +
            "animals friends :)"
    }
];

class Hobbies extends React.Component {

    render() {
        return (
            <Section backgroundColor={"white"} color={"#2c2c2c"}>
                <h1 style={{color: "#767676"}}>The Things That Make Me Happy</h1>
                {hobbies.map((hobby, key) => (
                    <div style={{margin: "40px"}}>
                        <div>
                            <h2>{hobby.title}</h2>
                            <p>{hobby.description}</p>
                        </div>
                        {hobby.mediaType === mediaTypes.IMAGE ?
                            <img src={hobby.media} alt={hobby.title} style={{width: "100%"}}/>
                            :
                            <video autoPlay loop muted src={hobby.media} style={{width: "100%"}}/>
                        }
                    </div>
                ))}
            </Section>
        )
    }
}

export default Hobbies;

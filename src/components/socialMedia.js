import React from 'react';
import {FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa'

class Network {
    constructor(icon, link) {
        this.icon = icon;
        this.link = link
    }
}

class SocialMedia extends React.Component {

    NETWORKS = [
        new Network(FaFacebook, "https://www.facebook.com/profile.php?id=100012581311894"),
        new Network(FaInstagram, "https://www.instagram.com/ofir_c/"),
        new Network(FaEnvelope, "mailto:ofircohen270@gmail.com")
    ];

    ICON_STYLE =
        {
            color: "#fdfdfd",
            size: "30px",
            margin: "10px"
        }
    ;

    render() {
        return (
            <div>
                {this.NETWORKS.map(network => (
                    <span>
                        <a style={this.ICON_STYLE} href={network.link}>{network.icon({size: 30})}</a>
                    </span>
                ))}
            </div>
        )
    }
}

export default SocialMedia;


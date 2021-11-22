import * as React from "react";

import "./index.css";

import Wave from "@/Components/Wave";
import Container, { Sizes } from "@/Components/Container";

const SOCIALS = [
  {
    name: "facebook",
    icon: require("Assets/socials/facebook.png"),
    link:
      "https://fb.me/e/UzkflS7I",
  },
  {
    name: "twitter",
    icon: require("Assets/socials/twitter.png"),
    link: "https://twitter.com/pythonpizzaconf/",
  },
  {
    name: "youtube",
    icon: require("Assets/socials/youtube.png"),
    link: "https://youtube.com/channel/UCs3DNJSzJJ5pW0tIKQbOPAA/",
  },
  {
    name: "telegram",
    icon: require("Assets/socials/telegram.png"),
    link: "https://t.me/pythonpizzaholguin/",
  },
];

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Wave />
        <Container size={Sizes.large}>
          <div className="footer--socials">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                id={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

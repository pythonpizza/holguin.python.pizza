import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Logo from "@/Components/Logo";

import "./index.css";

export default class Header extends React.Component {
  onNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;
    const destinationId = target.getAttribute("data-destination");
    const destinationDom: HTMLElement | null = window.document.querySelector(
      `#${destinationId}`
    );

    if (!destinationDom) {
      return;
    }

    window.scrollTo({
      top: destinationDom.offsetTop,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="header">
        <Container size={Sizes.large}>
          <Logo className="header--logo" />

          <ul className="header--links">
            <li>
              <a
                onClick={this.onNavClick}
                href="#about"
                data-destination="about"
              >
                Cómo que 🍕
              </a>
            </li>
            <li>
              <a onClick={this.onNavClick} href="#coc" data-destination="coc">
                CoC
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/wbKkpmf9nibnNQZy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call for Proposals
              </a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

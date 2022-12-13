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
                ¿Cómo que 🍕?
              </a>
            </li>
            <li>
              <a
                onClick={this.onNavClick}
                href="#speakers"
                data-destination="speakers"
              >
                Keynotes
              </a>
            </li>
            <li>
              <a
                onClick={this.onNavClick}
                href="#schedule"
                data-destination="schedule"
              >
                Programa
              </a>
            </li>
            {/* <li>
              <a
                href="https://link.ragnarok22.dev/pythonpizzaholguin2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                CfP
              </a>
            </li> */}
            <li>
              <a onClick={this.onNavClick} href="#coc" data-destination="coc">
                CoC
              </a>
            </li>
            <li>
              <a
                onClick={this.onNavClick}
                href="#sponsors"
                data-destination="sponsors"
              >
                Colaboradores
              </a>
            </li>
            <li>
              <a
                onClick={this.onNavClick}
                href="#staff"
                data-destination="staff"
              >
                Staff
              </a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

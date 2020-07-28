import * as React from "react";
import Sponsor from "@/Types/Sponsor";

import "./index.css";

export interface SponsorsShowcaseProps {
  sponsors: Sponsor[][];
}

export default class SponsorsShowcase extends React.Component<
  SponsorsShowcaseProps,
  {}
> {
  render() {
    const sponsors = this.props.sponsors;

    return (
      <div className="sponsors-showcase">
        {sponsors.map((row, i) => {
          return (
            <div key={i} className="sponsors-showcase--row">
              {row.map(sponsor => (
                <a
                  className="sponsors-showcase--sponsor"
                  id={sponsor.id}
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt={sponsor.name} src={sponsor.photo} />
                </a>
              ))}
            </div>
          );
        })}
        {/*sponsors.map(sponsor => (
                    <a id={sponsor.id} key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer" style={{ gridArea: sponsor.id }}>
                        <img src={sponsor.photo} />
                    </a>
                ))*/}
      </div>
    );
  }
}

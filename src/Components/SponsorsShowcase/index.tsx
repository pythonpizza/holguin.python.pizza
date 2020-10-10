import * as React from "react";
import Sponsor from "@/Types/Sponsor";

import "./index.css";

const ROW_SIZE = 4;

export interface SponsorsShowcaseProps {
  sponsors: Sponsor[];
}

export default class SponsorsShowcase extends React.Component<
  SponsorsShowcaseProps,
  {}
> {
  render() {
    const chunks: Sponsor[][] = [];
    let sponsors: Sponsor[] = [...this.props.sponsors];

    while (sponsors.length) {
      chunks.push(sponsors.slice(0, ROW_SIZE));
      sponsors = sponsors.slice(ROW_SIZE + 1);
    }

    return (
      <div className="sponsors-showcase">
        {chunks.map((row, i) => {
          return (
            <div key={i} className={`sponsors-showcase--row${row.length}`}>
              {row.map((sponsor) => (
                <a
                  className="sponsors-showcase--sponsor"
                  id={sponsor.id}
                  key={sponsor.name}
                  href={sponsor.link}
                  title={sponsor.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt={sponsor.name} src={sponsor.photo} />
                </a>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

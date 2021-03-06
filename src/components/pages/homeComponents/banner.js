import React, { Component } from 'react';

import Arrows from '../../../images/arrows.svg'

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <h1>
            Reputed stockists of castor wheels and trolleys for your
            domestic and industrial needs. Since 1952.
            <span>
              <a href="#">
                Learn More
                <img src={Arrows} alt="arrows"/>
              </a>
            </span>
          </h1>

        </div>
      </div>
    );
  }
}

export default Banner;

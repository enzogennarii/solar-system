import React, { Component } from 'react';
import PropType from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <div className="mission-info">
          <p data-testid="mission-year" className="mission-year">{year}</p>
          <p data-testid="mission-country" className="mission-country">{country}</p>
          <p data-testid="mission-destination" className="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.string.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;

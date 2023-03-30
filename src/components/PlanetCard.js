import React, { Component } from 'react';
import PropType from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name" className="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planet-img" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;

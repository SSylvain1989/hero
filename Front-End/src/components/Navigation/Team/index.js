// == Import npm
import React from 'react';

// == Import
import Member from './Member';

// == Import scss
import './team.scss';

// == Composant
const Team = () => (
  <div>
    <h1 className="heading"> La Team Hero</h1>
    <div className="team">
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  </div>
);

// == Export
export default Team;

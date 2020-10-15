// == Import npm
import React from 'react';

// == Import
import Member from './Member';

// == Import scss
import './team.scss';

// == Composant
const Team = () => (
  <div className="team">
    <Member />
    <Member />
    <Member />
    <Member />
    <Member />
  </div>
);

// == Export
export default Team;

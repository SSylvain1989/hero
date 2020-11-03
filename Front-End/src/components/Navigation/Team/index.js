// == Import npm
import React from 'react';

// == Import
import Member from './Member';
import team from '../../../data/team';

// == Import scss
import './team.scss';

// == Composant
const Team = () => (
  <div className="team">
    {
          team.map((oneTeamMember) => (
            <Member
              key={oneTeamMember.fullName}
              {...oneTeamMember}
            />
          ))
        }
  </div>
);

// == Export
export default Team;

// {team.map((oneTeamMember) => (
//   <h1>{oneTeamMember.name}</h1>
// ))}

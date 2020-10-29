// == Import npm
import React from 'react';

// == Import
import Member from './Member';
import team from '../../../data/team';

// == Import scss
import './team.scss';

// == Composant
const Team = () => {
  console.log(team);
  team.map((oneTeamMember) => (
    console.log(oneTeamMember.fullName)
  ));
  return (
    <div>
      {/* <h1 className="heading"> La Team Hero</h1> */}
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
    </div>
  );
};

// == Export
export default Team;

// {team.map((oneTeamMember) => (
//   <h1>{oneTeamMember.name}</h1>
// ))}

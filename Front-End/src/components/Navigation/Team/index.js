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

  const teamList = team.map((oneTeamMember) => {
    console.log(oneTeamMember.description);

    return (
      <div className="connasse">
        <div>{oneTeamMember.description}</div>
        <div>{oneTeamMember.fullName}</div>
        {/* <Member
          key={oneTeamMember.fullName}
          name={oneTeamMember.fullName}
          specialite={oneTeamMember.specilite}
          role={oneTeamMember.role}
          description={oneTeamMember.description}
        /> */}
      </div>
    );
  });

  return (
    <div>
      {teamList}
      {/* <h1 className="heading"> La Team Hero</h1>
      <div className="team">
        <Member />
        <Member />
        <Member />
        <Member />
      </div> */}
    </div>
  );
};

// == Export
export default Team;

// {team.map((oneTeamMember) => (
//   <h1>{oneTeamMember.name}</h1>
// ))}

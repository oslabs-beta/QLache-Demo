import NavBar from '../components/navbar';
import TeamMember from '../components/teamMember';

const memberInfo = [
  {
    name: 'Francheska Orellana',
    photo: '/fo.jpeg',
    github: 'https://github.com/frorellana',
  },
  {
    name: 'Firas Khansa',
    photo: '/fk.jpeg',
    github: 'https://github.com/gitfuego',
  },
  {
    name: 'Cameron Kelly',
    photo: '/ck.jpeg',
    github: 'https://github.com/Cam-Kelly',
  },
  {
    name: 'Karan Maan',
    photo: '/km.jpeg',
    github: 'https://github.com/modestmaan',
  },
  {
    name: 'Tyler Heathcote',
    photo: '/th.jpeg',
    github: 'https://github.com/tylerheathcote',
  },
];

function Team() {
  return (
    <>
      <NavBar />
      <div id="content">
        <h1>Meet the team!</h1>
        <div id="memberContainer">
          {memberInfo.map((member) => (
            <TeamMember {...member} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

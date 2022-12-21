import NavBar from '../components/navbar';
import TeamMember from '../components/teamMember';

const memberInfo = [
  {
    name: 'Francheska Orellana',
    photo: '/fo.jpeg',
    linkedin: 'http://www.linkedin.com/in/francheska-orellana',
    github: 'https://github.com/frorellana',
  },
  {
    name: 'Firas Khansa',
    photo: '/fk.jpeg',
    linkedin: 'https://www.linkedin.com/in/firas-khansa/',
    github: 'https://github.com/gitfuego',
  },
  {
    name: 'Cameron Kelly',
    photo: '/ck.jpeg',
    linkedin: 'https://www.linkedin.com/in/cameron-kelly-2329a74a/',
    github: 'https://github.com/Cam-Kelly',
  },
  {
    name: 'Karan Maan',
    photo: '/km.jpeg',
    linkedin: 'https://www.linkedin.com/in/karan-maan-586155242/',
    github: 'https://github.com/modestmaan',
  },
  {
    name: 'Tyler Heathcote',
    photo: '/th.jpeg',
    linkedin: 'https://www.linkedin.com/in/tylerheathcote/',
    github: 'https://github.com/tylerheathcote',
  },
];

function Team() {
  return (
    <>
      <NavBar />
      <div id="team">
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

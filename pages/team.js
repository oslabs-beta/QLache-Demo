import NavBar from '../components/navbar';
import TeamMember from '../components/teamMember';
import Head from 'next/head';

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
    photo: '/ck.jpg',
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
    photo: '/th.jpg',
    linkedin: 'https://www.linkedin.com/in/tylerheathcote/',
    github: 'https://github.com/tylerheathcote',
  },
];

function Team() {
  return (
    <>
      <Head>
        <title>Meet the QLache Team!</title>
        <link rel="icon" href="/pink-logo.svg"></link>
      </Head>
      <NavBar />
      <div id="team">
        <h1>Meet the team!</h1>
        <div id="memberContainer">
          {memberInfo.map((member) => (
            <TeamMember {...member} />
          ))}
        </div>
        <p>Special thanks to <a href='https://www.linkedin.com/in/willem-rosenthal/'>Willem Rosenthal</a> and <a href='https://github.com/open-source-labs'>OSLabs</a></p>
      </div>
    </>
  );
}

export default Team;

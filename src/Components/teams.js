/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import founder1 from '../images/founder1.png';
import founder2 from '../images/founder2.png';
import founder3 from '../images/founder3.jpg';
import founder4 from '../images/founder4.png';
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.png';
import moderator1 from '../images/moderator1.png';
import moderator2 from '../images/moderator2.png';
import moderator3 from '../images/moderator3.png';
import moderator4 from '../images/moderator4.png';
import moderator5 from '../images/moderator5.png';

const founders = [
  {
    name: "Veinos",
    title: "Leader",
    image: founder1,
    link: "https://twitter.com/Veinos_crypto"
  },
  {
    name: "Alamo",
    title: "Advisor",
    image: founder2,
    link: "https://twitter.com/alamo_pcc"
  },
  {
    name: "Juca",
    title: "Discord Wizard",
    image: founder3,
    link: "https://twitter.com/OgJuca"
  },
  {
    name: "Smol Joe",
    title: "Genesis Artist",
    image: founder4,
    link: "https://twitter.com/ItsJoeBear"
  },
]

const teams = [
  {
    name: "hodl.pcc.eth",
    title: "Sr. Blockchain Architect",
    image: team1,
    link: "https://twitter.com/hodl_pcc"
  },
  {
    name: "Fun Pilled",
    title: "Pixel Artist / Merch Guru",
    image: team2,
    link: "https://twitter.com/FunPilled"
  },
  {
    name: "Taehan",
    title: "Lil Kong - Rapper/Songwriter ",
    image: team3,
    link: "https://twitter.com/Ta3han"
  },
  {
    name: "Greedisgood",
    title: "Artist",
    image: team4,
    link: "https://twitter.com/brix_crypto"
  }
]

const moderators = [
  // {
  //   name: "Heady lele",
  //   image: moderator1,
  //   link: "https://twitter.com/Heady_Lele"
  // },
  // {
  //   name: "Sake",
  //   image: moderator2,
  //   link: "https://twitter.com/stephen_sake"
  // },
  // {
  //   name: "Uguma",
  //   image: moderator3,
  //   link: "https://twitter.com/EmmanuelUguma"
  // },
  // {
  //   name: "Subversieve",
  //   image: moderator4,
  //   link: "https://twitter.com/subversieve"
  // },
  // {
  //   name: "Owrange",
  //   image: moderator5,
  //   link: "https://twitter.com/Owrang33"
  // }
]


// const moderators2 = [
//   {
//     name: "Heady lele",
//     image: moderator1,
//     link: "https://twitter.com/Heady_Lele"
//   },
//   {
//     name: "Sake",
//     image: moderator2,
//     link: "https://twitter.com/stephen_sake"
//   },
//   {
//     name: "Uguma",
//     image: moderator3,
//     link: "https://twitter.com/EmmanuelUguma"
//   },
//   {
//     name: "Subversieve",
//     image: moderator4,
//     link: "https://twitter.com/subversieve"
//   },
//   {
//     name: "Owrange",
//     image: moderator4,
//     link: "https://twitter.com/subversieve"
//   }
// ]

const TeamBox = ({ name, title, image, link }) => {
  return (
    <div className="team-box">
      <img src={image} alt="team" />
      <h4>{name}</h4>
      <p>{title}</p>
      <a href={link} target="_blank" className="twitter-btn"></a>
    </div>
  );
};

const Teams = () => {
  return (
    <>
      <div className="teams-section">
        <div className="container">
          <h2>Founder Kongz</h2>
          <div className="team-wrapper">
            {founders.map((founder, i) => (
              <TeamBox key={i} {...founder} />
            ))}
          </div>
        </div>
      </div>

      <div className="teams-section">
      <div className="container">
        <h2>Team Kongz</h2>
        <div className="team-wrapper">
          {teams.map((team, i) => (
            <TeamBox key={i} {...team} />
          ))}
        </div>
      </div>
    </div>
    
   <div className="teams-section">
      <div className="container">
        <h2>Smolerators</h2>
        <div className="team-wrapper">
          {moderators.map((moderator, i) => (
            <TeamBox key={i} {...moderator} />
          ))}

          {/* </div>
        </div>
      </div>
      <div className="teams-section">
        <div className="container">
          <h2>Smolerators</h2>
          <div className="team-wrapper">
            {moderators.map((moderators2, i) => (
              <TeamBox key={i} {...moderators2} />
            ))} */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Teams;

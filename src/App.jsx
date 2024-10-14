import { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([]); 
  const [money, setMoney] = useState(100); 
  const [totalStrength, setTotalStrength] = useState(0); 
  const [totalAgility, setTotalAgility] = useState(0); 


const [zombieFighters, setZombieFighters] = useState([ // This bugs me
  {
    name: 'Survivor',
    price: 20,
    strength: 6,
    agility: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92sn1UHg_k0M_C0QEDCtUweRX1wPaADPaJA&s',
  },
  {
    name: 'Scavenger',
    price: 5,
    strength: 5,
    agility: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZx5YmCzFbe48iZ8lB21qCAyjwvqbYs9-ctw&s',
  },
  {
    name: 'Shadow',
    price: 25,
    strength: 7,
    agility: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPwo2EwZTmO574srF1adLOLsWVGMbyDBpPw&s',
  },
  {
    name: 'Tracker',
    price: 12,
    strength: 7,
    agility: 6,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbgTYP3NFCuhDeJSZX2ebrBlUVrQ3s5OIOg&s',
  },
  {
    name: 'Sharpshooter',
    price: 25,
    strength: 6,
    agility: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD65cSYhzydTTt1ZphNw9NbLU5_kuq_BY0Eg&s',
  },
  {
    name: 'Medic',
    price: 25,
    strength: 5,
    agility: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2quEQ--zS_pWxg9qBzEKSqUOwcTzsuRVTA&s',
  },
  {
    name: 'Engineer',
    price: 12,
    strength: 6,
    agility: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhZh6KniC2tRGt4V-IWyUtoqJexwqGoESjg&s',
  },
  {
    name: 'Brawler',
    price: 10,
    strength: 8,
    agility: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOcuWo2UDeSbYky7q_Gd2GVL3Xo6ecKUd7Q&s',
  },
  {
    name: 'Infiltrator',
    price: 15,
    strength: 5,
    agility: 9,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqHo4TBC2nDwGPz9nT_0eDKdupA0rpWlbtg&s',
  },
  {
    name: 'Leader',
    price: 20,
    strength: 7,
    agility: 6,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdK877G1OryiWfz2U-F_3lTSKViJO2sslzdQ&s',
  },
]);
// Function to handle adding a fighter to the team
const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setTeam([...team, fighter]); // Add fighter 
    setMoney(money - fighter.price); // Subtract price from money
    setTotalStrength(totalStrength + fighter.strength); // Update total strength
    setTotalAgility(totalAgility + fighter.agility); // Update total agility
  } else {
    console.log('Not enough money');
  }
};

// This removes the fighter
const handleRemoveFighter = (index) => {
  const removedFighter = team[index];
  setTeam(team.filter((_, i) => i !== index)); // Remove the fighter from team
  setMoney(money + removedFighter.price); // Refund money after fighter is removed
  setTotalStrength(totalStrength - removedFighter.strength); // This will update strength
  setTotalAgility(totalAgility - removedFighter.agility); // This will update agility
};



//This is the UI
return (
  <div className="Zombie-fighters">
  <h1>Zombie Fighters</h1>
  <p>Money: ${money}</p>

  <ul className="fighter-list">
    {zombieFighters.map((fighter, index) => (
      <li key={index} className="fighter">
        <img src={fighter.img} alt={fighter.name} />
        <h2>{fighter.name}</h2>
        <p>Price: ${fighter.price}</p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
      </li>
    ))}
  </ul>

  <div className="teammate-section">
    <h2>Your Team</h2>
    {team.length === 0 ? (
      <p>Pick your Team!</p>
    ) : (
      <ul className="team-list">
        {team.map((fighter, i) => (
          <li key={i} className="teammate">
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(i)}>Remove</button>
          </li>
        ))}
      </ul>
    )}

    <h3>Total Team Strength: {totalStrength}</h3>
    <h3>Total Team Agility: {totalAgility}</h3>
  </div>
</div>
);
};

export default App

import { useState } from 'react';
import '../styles/Menu.css';
import '../styles/Totem.css';

const heroes = [
  { num: 1, hero: "Mage", image: "/heroes/M_mage.jpeg", color: "#c026d3" },       
  { num: 2, hero: "Archer", image: "/heroes/M_archer.jpeg", color: "#16a34a" },   
  { num: 3, hero: "Knight", image: "/heroes/M_knight.jpeg", color: "#22d3ee" },   
  { num: 4, hero: "Robber", image: "/heroes/M_robber.jpeg", color: "#4b5563" },   
  { num: 5, hero: "Bard", image: "/heroes/M_bard.jpeg", color: "#eab308" },      

  { num: 6, hero: "Alchemist", image: "/heroes/W_alchemist.jpeg", color: "#7e22ce" }, 
  { num: 7, hero: "Druid", image: "/heroes/W_druid.jpeg", color: "#166534" },        
  { num: 8, hero: "Necromancer", image: "/heroes/W_necromancer.jpeg", color: "#7f1d1d" }, 
  { num: 9, hero: "Engineer", image: "/heroes/W_engineer.jpeg", color: "#ca8a04" }, 
  { num: 10, hero: "Psychic", image: "/heroes/M_psycho.jpeg", color: "#2563eb" },  

  { num: 11, hero: "Priest", image: "/heroes/W_priest.jpeg", color: "#f8fafc" },   
  { num: 12, hero: "Berserk", image: "/heroes/M_berserk.jpeg", color: "#dc2626" }, 
  { num: 13, hero: "Paladin", image: "/heroes/W_paladin.jpeg", color: "#0f766e" },  
  { num: 14, hero: "Pilgrim", image: "/heroes/W_pilgrim.jpeg", color: "#15803d" },   
  { num: 15, hero: "Shaman", image: "/heroes/W_shaman.jpeg", color: "#1e3a8a" },     

  { num: 16, hero: "Jester", image: "/heroes/M_jester.jpeg", color: "#a16207" },   
  { num: 17, hero: "Elf", image: "/heroes/W_elf.jpeg", color: "#14532d" },           
  { num: 18, hero: "Pirate", image: "/heroes/M_pyrate.jpeg", color: "#1d4ed8" },   
  { num: 19, hero: "Dwarf", image: "/heroes/M_dwarf.jpeg", color: "#374151" },      
  { num: 20, hero: "Beast", image: "/heroes/W_beast.jpeg", color: "#7f1d1d" },  
];

export default function Menu() {

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [isTotem, setIsTotem] = useState(false);
  const [totem, setTotem] = useState(null);

  const heroTotem = heroes.find(h => h.num === totem);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openTotem = () => setIsTotem(true);
  const closeTotem = () => {
    setIsTotem(false);
    setTotem(null);
  }

  const yourTotem = () => {
    if (totem !== null) return;
    setTotem(getRandomNum(1, 20))
  }

  return (
    <div className="navbar">
      <div className="logo">
          <p>Zinland-Wiki</p>
      </div>
      <div className="choose">
          <p onClick={() => scrollTo("instruction")}>How to play</p>
        <a href="/characters" target='_blank' rel='noopener noreferrer'>
          Characters
        </a>
      </div>
      <div className="random" onClick={openTotem}>
        <p>Your totem</p>
      </div>

      {isTotem && (
        <div className="totem-overlay" onClick={closeTotem}>
          <div className="totem-modal" onClick={(e) => e.stopPropagation()}>
            <button className="totem-close" onClick={closeTotem}>✕</button>

            <h2>Your totem for today {heroTotem && ("is:")}</h2>

            <div className="totem-content">
              {totem === null ? (
                <p>Click to reveal your totem</p>
              ) : (
                heroTotem && (
                  <div
                    className="totem-hero"
                    style={{ '--accent': heroTotem.color }}
                  >
                    <img
                      src={heroTotem.image}
                      alt={heroTotem.hero}
                    />
                    <h3>{heroTotem.hero}</h3>
                  </div>
                )
              )}
            </div>

            <button
              className="totem-action"
              onClick={yourTotem}
              disabled={totem !== null}
            >
              {totem === null ? 'Find out your totem' : 'Totem revealed'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
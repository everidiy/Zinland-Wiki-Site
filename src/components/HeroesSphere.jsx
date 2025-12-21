import { useEffect, useRef } from "react";

const HeroesSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.TagCloud) return;

    const heroes = [
      "Archer", "Bard", "Berserk", "Dwarf", "Jester",
      "Knight", "Mage", "Psycho", "Pyrate", "Robber",
      "Alchemist", "Beast", "Druid", "Elf", "Engineer",
      "Necromancer", "Paladin", "Pilgrim", "Priest", "Shaman"
    ];

    const getRadius = () => {
      const width = window.innerWidth;

      if (width < 480) return 120
      if (width < 768) return 180
      if (width < 1200) return 220

      return 450
    }

    const heroCloud = window.TagCloud(containerRef.current, heroes, {
      radius: getRadius(),
      maxSpeed: "normal",
      initSpeed: "slow",
      keep: true
    });

    return () => heroCloud.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      className="tagcloud-wrapper"
      style={{
        width: "100%",
        height: "100%",
        color: "#a78bfa",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "20px" 
      }}
    />
  );
};

export default HeroesSphere;

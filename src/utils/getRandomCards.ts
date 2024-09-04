export const getRandomCards = () => {
  const cards = [
    {
      source: require("../../assets/Aeldari.png"),
      lifePoints: 83,
      healthBackValue: 33,
      id: 1,
    },
    {
      source: require("../../assets/Chaos.png"),
      lifePoints: 100,
      healthBackValue: 20,
      id: 2,
    },
    {
      source: require("../../assets/Necron.png"),
      lifePoints: 280,
      healthBackValue: 77,
      id: 3,
    },
    {
      source: require("../../assets/Ork.png"),
      lifePoints: 53,
      healthBackValue: 15,
      id: 4,
    },
    {
      source: require("../../assets/Sister.png"),
      lifePoints: 65,
      healthBackValue: 15,
      id: 5,
    },
    {
      source: require("../../assets/Space.png"),
      lifePoints: 75,
      healthBackValue: 21,
      id: 6,
    },
    {
      source: require("../../assets/Tau.png"),
      lifePoints: 95,
      healthBackValue: 25,
      id: 7,
    },
    {
      source: require("../../assets/Trysst.png"),
      lifePoints: 45,
      healthBackValue: 15,
      id: 8,
    },
  ];

  return cards.sort(() => Math.random() - 0.5);
};

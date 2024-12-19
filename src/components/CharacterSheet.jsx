import React, { useState } from "react";

const CharacterSheet = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    level: "",
    background: "",
    playerName: "",
    race: "",
    alignment: "",
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    hitDice: "",
    deathSaves: {
      successes: 0,
      failures: 0,
    },
    armorClass: 0,
    initiative: 0,
    speed: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes("deathSaves")
        ? {
            ...prevData.deathSaves,
            [name.split(".")[1]]: parseInt(value, 10),
          }
        : name === "level" || name.includes("strength") || name.includes("dexterity") ||
          name.includes("constitution") || name.includes("intelligence") ||
          name.includes("wisdom") || name.includes("charisma") ||
          name.includes("armorClass") || name.includes("initiative") || name.includes("speed")
        ? parseInt(value, 10)
        : value,
    }));
  };

  return (
    <div className="character-sheet bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Character Sheet</h2>

      {/* General Information */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">General Information</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Character Name", name: "name" },
            { label: "Class", name: "class" },
            { label: "Level", name: "level" },
            { label: "Background", name: "background" },
            { label: "Player Name", name: "playerName" },
            { label: "Race", name: "race" },
            { label: "Alignment", name: "alignment" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Attributes */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Attributes</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Strength", name: "strength" },
            { label: "Dexterity", name: "dexterity" },
            { label: "Constitution", name: "constitution" },
            { label: "Intelligence", name: "intelligence" },
            { label: "Wisdom", name: "wisdom" },
            { label: "Charisma", name: "charisma" },
          ].map((attribute) => (
            <div key={attribute.name}>
              <label className="block font-medium text-gray-700 mb-1">
                {attribute.label}
              </label>
              <input
                type="number"
                name={attribute.name}
                value={formData[attribute.name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Armor Class, Initiative & Speed */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Combat Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Armor Class", name: "armorClass" },
            { label: "Initiative", name: "initiative" },
            { label: "Speed", name: "speed" },
          ].map((stat) => (
            <div key={stat.name}>
              <label className="block font-medium text-gray-700 mb-1">
                {stat.label}
              </label>
              <input
                type="number"
                name={stat.name}
                value={formData[stat.name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hit Dice & Death Saves */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Hit Dice & Death Saves</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Hit Dice</label>
            <input
              type="text"
              name="hitDice"
              value={formData.hitDice}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Death Saves</label>
            <div className="flex justify-between items-center">
              <div className="mr-2">
                <label className="block text-gray-700">Successes</label>
                <input
                  type="number"
                  name="deathSaves.successes"
                  value={formData.deathSaves.successes}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                  min="0"
                  max="3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Failures</label>
                <input
                  type="number"
                  name="deathSaves.failures"
                  value={formData.deathSaves.failures}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                  min="0"
                  max="3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Save Character
      </button>
    </div>
  );
};

export default CharacterSheet;

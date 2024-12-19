import React, { useState } from 'react';

const DiceRoller = () => {
  const [customDice, setCustomDice] = useState('');
  const [result, setResult] = useState(null);
  const [rollType, setRollType] = useState('normal'); // Tracks which section the user is in
  const [rollValue, setRollValue] = useState('');

  // Helper function to roll any dice
  const rollDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1;
  };

  // Handle normal dice rolls (d4, d6, d8, etc.)
  const handleNormalRoll = (sides) => {
    const roll = rollDice(sides);
    setResult(`${roll}`);
  };

  // Handle custom dice input
  const handleCustomRoll = () => {
    const sides = parseInt(customDice);
    if (!isNaN(sides) && sides > 1) {
      const roll = rollDice(sides);
      setResult(`${roll}`);
    } else {
      setResult('Invalid dice input!');
    }
  };

  // Handle D&D-specific rolls (Ability checks, attack rolls, etc.)
  const handleDndRoll = (type) => {
    let roll;
    switch (type) {
      case 'ability':
        roll = rollDice(20); // d20 for ability checks
        setResult(`Ability check (d20): ${roll}`);
        break;
      case 'attack':
        roll = rollDice(20); // d20 for attack rolls
        setResult(`Attack roll (d20): ${roll}`);
        break;
      case 'saving':
        roll = rollDice(20); // d20 for saving throws
        setResult(`Saving throw (d20): ${roll}`);
        break;
      case 'damage':
        roll = rollDice(6); // Default damage roll (d6)
        setResult(`Damage roll (d6): ${roll}`);
        break;
      case 'initiative':
        roll = rollDice(20); // d20 for initiative
        setResult(`Initiative roll (d20): ${roll}`);
        break;
      case 'skill':
        roll = rollDice(20); // d20 for skill checks
        setResult(`Skill check (d20): ${roll}`);
        break;
      default:
        setResult('Invalid roll type');
    }
  };

  return (
    <div className="dice-roller bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      {/* Navigation to switch between sections */}
      <div className="section-tabs flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setRollType('normal')}
          className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Normal Dice Rolls
        </button>
        <button
          onClick={() => setRollType('dnd')}
          className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          D&D Rolls
        </button>
      </div>

      {/* Normal Dice Rolls Section */}
      {rollType === 'normal' && (
        <div className="normal-dice-rolls">
          <h3 className="text-xl font-semibold mb-4">Normal Dice Rolls</h3>
          <div className="flex flex-wrap justify-around mb-4">
            <button onClick={() => handleNormalRoll(4)} className="roll-button">Roll d4</button>
            <button onClick={() => handleNormalRoll(6)} className="roll-button">Roll d6</button>
            <button onClick={() => handleNormalRoll(8)} className="roll-button">Roll d8</button>
            <button onClick={() => handleNormalRoll(10)} className="roll-button">Roll d10</button>
            <button onClick={() => handleNormalRoll(12)} className="roll-button">Roll d12</button>
            <button onClick={() => handleNormalRoll(20)} className="roll-button">Roll d20</button>
          </div>
        </div>
      )}

      {/* D&D Rolls Section */}
      {rollType === 'dnd' && (
        <div className="dnd-rolls">
          <h3 className="text-xl font-semibold mb-4">D&D Rolls</h3>
          <div className="flex flex-wrap justify-around gap-4 mb-4">
            <button onClick={() => handleDndRoll('ability')} className="roll-button">Ability Check</button>
            <button onClick={() => handleDndRoll('attack')} className="roll-button">Attack Roll</button>
            <button onClick={() => handleDndRoll('saving')} className="roll-button">Saving Throw</button>
            <button onClick={() => handleDndRoll('damage')} className="roll-button">Damage Roll</button>
            <button onClick={() => handleDndRoll('initiative')} className="roll-button">Initiative</button>
            <button onClick={() => handleDndRoll('skill')} className="roll-button">Skill Check</button>
          </div>
        </div>
      )}

      {/* Result Display */}
      <div className="result text-center mt-6">
        {result && <p className="text-lg font-bold">{result}</p>}
      </div>
    </div>

  );
};

export default DiceRoller;

// /src/models/dashboardModel.js
import CharacterSheet from '../components/CharacterSheet';
import DiceRoller from '../components/DiceRoller';
import BoardMaps from '../components/BoardMaps';
import CombatTracker from '../components/CombatTracker';
import Inventory from '../components/Inventory';
import Quests from '../components/Quests';
import NPCsLore from '../components/NPCsLore';
import PartyNotes from '../components/PartyNotes';
import Settings from '../components/Settings';

// Export the dashboard items with component references
export const dashboardItems = [
  { id: 1, title: "Character Sheets", component: CharacterSheet },
  { id: 2, title: "Dice/Rolls", component: DiceRoller },
  { id: 3, title: "Boards/Maps", component: BoardMaps },
  { id: 4, title: "Combat Tracker", component: CombatTracker },
  { id: 5, title: "Inventory", component: Inventory },
  { id: 6, title: "Quests", component: Quests },
  { id: 7, title: "NPCs & Lore", component: NPCsLore },
  { id: 8, title: "Party Notes", component: PartyNotes },
  { id: 9, title: "Settings", component: Settings }
];

const BASE_URL = "https://www.dnd5eapi.co";

export async function fetchFromAPI(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

// Fetch all spells
export async function getAllSpells() {
  return fetchFromAPI("/api/spells");
}

// Fetch all classes
export async function getAllClasses() {
  return fetchFromAPI("/api/classes");
}

// Fetch specific spell details
export async function getSpellDetails(spellIndex) {
  return fetchFromAPI(`/api/spells/${spellIndex}`);
}

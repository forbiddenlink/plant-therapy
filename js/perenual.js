/**
 * Perenual Plant API Integration
 * Plant care database with 10,000+ species.
 * https://perenual.com/docs/api
 *
 * Free tier: 100 req/day, first 3000 species
 * Env: PERENUAL_API_KEY
 */

const PERENUAL_BASE = "https://perenual.com/api";

/**
 * @typedef {Object} PlantWatering
 * @property {'Frequent'|'Average'|'Minimum'|'None'} watering
 * @property {string} [watering_period]
 * @property {string} [watering_general_benchmark_value]
 * @property {string} [watering_general_benchmark_unit]
 */

/**
 * @typedef {Object} PlantInfo
 * @property {number} id
 * @property {string} common_name
 * @property {string[]} scientific_name
 * @property {string[]} other_name
 * @property {string} cycle - 'Perennial' | 'Annual' | 'Biennial' | 'Biannual'
 * @property {string} watering - 'Frequent' | 'Average' | 'Minimum' | 'None'
 * @property {string[]} sunlight - e.g. ['full sun', 'part shade']
 * @property {string} [description]
 * @property {{ license_name: string, original_url: string, regular_url: string }|null} default_image
 * @property {boolean} poisonous_to_humans
 * @property {boolean} poisonous_to_pets
 * @property {boolean} drought_tolerant
 * @property {boolean} indoor
 */

/**
 * @typedef {Object} PlantCareGuide
 * @property {number} id
 * @property {string} common_name
 * @property {Array<{ type: string, description: string }>} section
 */

function apiKey() {
  const key = process.env.PERENUAL_API_KEY;
  if (!key) throw new Error("PERENUAL_API_KEY is not set");
  return key;
}

function perenualUrl(path, params = {}) {
  const p = new URLSearchParams({ key: apiKey(), ...params });
  return `${PERENUAL_BASE}${path}?${p}`;
}

/**
 * Search plants by name.
 * @param {string} query
 * @param {Object} [options]
 * @param {number} [options.page=1]
 * @param {boolean} [options.indoorOnly=false]
 * @param {boolean} [options.edible=false]
 * @returns {Promise<{ data: PlantInfo[], to: number, per_page: number, current_page: number, last_page: number, total: number }>}
 */
export async function searchPlants(query, options = {}) {
  const params = { q: query, page: String(options.page ?? 1) };
  if (options.indoorOnly) params.indoor = "1";
  if (options.edible) params.edible = "1";

  const res = await fetch(perenualUrl("/species-list", params));
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Perenual API ${res.status}: ${JSON.stringify(err)}`);
  }
  return res.json();
}

/**
 * Get full details for a plant by its Perenual species ID.
 * @param {number} speciesId
 * @returns {Promise<PlantInfo | null>}
 */
export async function getPlantDetails(speciesId) {
  const res = await fetch(perenualUrl(`/species/details/${speciesId}`));
  if (!res.ok) return null;
  return res.json();
}

/**
 * Fetch care guide sections for a plant.
 * Sections: watering, sunlight, pruning, fertilizer, propagation
 * @param {number} speciesId
 * @returns {Promise<PlantCareGuide | null>}
 */
export async function getPlantCareGuide(speciesId) {
  const res = await fetch(
    perenualUrl("/species-care-guide-list", { species_id: String(speciesId) }),
  );
  if (!res.ok) return null;
  const json = await res.json();
  const guide = json.data?.[0];
  return guide ?? null;
}

/**
 * Get care guides for plants matching a name search.
 * @param {string} query
 * @returns {Promise<PlantCareGuide[]>}
 */
export async function searchPlantCareGuides(query) {
  const res = await fetch(
    perenualUrl("/species-care-guide-list", { q: query, page: "1" }),
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.data ?? [];
}

/**
 * Get plants by watering requirement — useful for care reminders.
 * @param {'Frequent'|'Average'|'Minimum'|'None'} watering
 * @param {number} [page=1]
 * @returns {Promise<PlantInfo[]>}
 */
export async function getPlantsByWatering(watering, page = 1) {
  const res = await fetch(
    perenualUrl("/species-list", { watering, page: String(page) }),
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.data ?? [];
}

/**
 * Enrich an existing plant entry with Perenual data by matching common name.
 * Returns null if no match found.
 * @param {string} plantName
 * @returns {Promise<{ details: PlantInfo, careGuide: PlantCareGuide | null } | null>}
 */
export async function enrichPlantData(plantName) {
  const results = await searchPlants(plantName, { page: 1 });
  const match = results.data?.[0];
  if (!match) return null;

  const [details, careGuide] = await Promise.all([
    getPlantDetails(match.id),
    getPlantCareGuide(match.id),
  ]);

  return details ? { details, careGuide } : null;
}

/**
 * Format a watering schedule to plain English.
 * @param {string} watering
 * @returns {string}
 */
export function formatWateringSchedule(watering) {
  const map = {
    Frequent: "Water every 1–2 days or when soil feels dry to the touch.",
    Average: "Water once or twice a week; allow top inch of soil to dry out.",
    Minimum: "Water sparingly — once every 2–4 weeks. Tolerates drought.",
    None: "Little to no watering needed. Very drought-tolerant.",
  };
  return map[watering] ?? "Check individual care requirements.";
}

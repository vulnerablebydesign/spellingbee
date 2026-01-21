// 2025-2026 School Spelling Bee Study List
// Scripps National Spelling Bee - Word Club

const ONE_BEE = [
  // IMG_6594 - Page 1
  "tag", "send", "deck", "stuck", "snug", "fish", "hold", "mind", "stay", "scrub",
  "draw", "brown", "cozy", "cosy", "tint", "milk", "yawn", "tank", "want", "crowd",
  "pond", "skirt", "sharks", "quilt", "twigs", "taffy", "comfy", "stretch", "tight",
  "candy", "scrunch", "ruby", "close", "tackle", "wire", "skater", "giant", "bucket",
  "chance", "baskets", "tender", "paste", "melon", "farmer", "parent", "tail", "hockey",
  "slime", "insects", "teeth", "shortcut", "bait", "lure", "cluster", "forest", "hollow",
  "spinning", "baffling", "sizzling", "hoist", "search", "remind", "mango", "coral",
  "jangle", "shimmer", "blossoms", "swampy", "studded", "focus", "distress", "lessons",
  "moment", "ajar", "basil", "triple", "satin", "ahoy", "signal", "answer", "shuffle",
  "dollop", "minnows", "silver", "before", "circus", "writing", "kitchen", "sugar",
  "awkward", "seep", "sweet", "wheels", "faint", "fruit", "roam",
  // IMG_6595 - Page 2
  "goats", "woozy", "limbs", "ahead", "unicorn", "faraway", "heater", "pirates",
  "understand", "wooden", "leaning", "breakfast", "window", "acrobat", "message",
  "chocolate", "forepaw", "elephant", "hedgehog", "recipe", "garbage", "surprise",
  "mermaid", "bombarded", "disability", "incredible", "leather", "countess", "nervous",
  "peppercorn", "cartwheel", "raise", "weather", "zooming", "attacked", "turnout",
  "eaten", "streetlights", "journey", "courtyard", "shouting", "asleep", "curious",
  "dinosaur", "brilliant", "vacuum", "gorgeous", "monsoon", "dangerous", "avocado",
  "valentine", "February", "formation", "especially"
];

const TWO_BEE = [
  // IMG_6596
  "hesitate", "scorcher", "scavenger", "fragments", "deflated", "unleash", "ration",
  "cosmetics", "crawdad", "frustration", "unruly", "mascot", "aroma", "moustache",
  "mustache", "artifacts", "artefacts", "perfume", "sinister", "tuxedo", "discoveries",
  "lurches", "language", "prognosis", "Buffalo", "sequins", "gallop", "fabulous",
  "lanky", "fluently", "mysterious", "brandished", "sardines", "anguish", "conical",
  "rickety", "lilt", "pediatric", "porridge", "democracy", "rummage", "beige",
  "ancestral", "grimace", "gaunt", "enormous", "geranium", "nautical", "dubious",
  "ebony", "foreign", "paltry", "verdict", "garbled", "encourages", "imitation",
  "miniature", "receptionist", "preamble", "plausible", "reprimanding", "commotion",
  "oblivion", "immigrants", "steeple", "spectators", "lanyards", "suspicious",
  "parchment", "ramshackle", "fugitive", "heron", "dissolving", "nomad", "billowed",
  "skewer", "Berlin", "lunacy", "conjure", "bracken", "noggin", "neon", "rakish",
  "hypnosis", "rotunda", "gusto", "toiletries", "gleaned", "jeered", "winsome",
  "prattling", "galore", "emporium", "atrium", "eccentric", "savant"
];

const THREE_BEE = [
  // IMG_6597 - Page 1
  "almanac", "hippies", "samosas", "campaign", "pistachio", "mosque", "zombielike",
  "warlock", "colossus", "convulsively", "dimensional", "garishly", "graffitist",
  "Everest", "dexterity", "cavorting", "marauder", "conscience", "battlements",
  "deferential", "albatross", "khaki", "opalescent", "asphalt", "Yiddish", "talcum",
  "tranquilizer", "equestrian", "plaited", "monsieur", "manticores", "prestigious",
  "fraidycat", "guttural", "lo mein", "courier", "sans serif", "psyche", "stucco",
  "Frankenstein", "schema", "et cetera", "vidimus", "delphine", "slough", "archipelago",
  "serape", "sarape", "puissance", "pinioning", "chignon", "pheromone", "galleon",
  "magnanimous", "chartreuse", "wainscoting", "Nehru",
  // IMG_6598 - Page 2
  "gangly", "swaggering", "chimneys", "riveted", "plaid", "dirge", "zeal", "whittled",
  "depots", "fiberglass", "salvaged", "fissures", "enthusiastic", "discipline",
  "unfamiliar", "scurrying", "dignitaries", "pizzeria", "dismissal", "skittish",
  "careened", "nomination", "opportunist", "dictatorship", "comrades", "sporadic",
  "promenade", "repugnant", "invincible", "renowned", "parachute", "laborious",
  "appointment", "foreseeable", "ratify", "scalpel", "reclusive", "compassionate",
  "bulletin", "alfalfa", "officially", "crematorium", "bayonet", "amicable", "exuberant",
  "beautician", "equations", "assignment", "ultimatum", "whinnying", "squalor",
  "memoirs", "cylinders", "ominous", "muffler", "syndrome", "premises", "safari",
  "lasagna", "substantially", "mercantile", "formidable", "propaganda", "marquee",
  "proficient", "compunction", "emphatically", "hyperventilated", "ostracism",
  "onslaught", "ruefully", "misanthrope", "prototype", "cravenly", "mulberry",
  "hypocritical", "chlorine", "traumatic", "receipts", "solemnly", "begrudge",
  "contentious", "precocious", "ensemble", "cadre", "lye", "belfry", "lacrosse",
  "sluice", "cajolery", "vigilance", "residuals", "boutique", "peroxide", "aristocracy",
  "apocalypse",
  // IMG_6599 - Page 3
  "tuberculosis", "barricade", "confreres", "anonymously", "unparalleled", "barrette",
  "chassis", "junket", "quandary", "Erie", "gingham", "silhouette", "auxiliary",
  "thesaurus", "patriarchs", "chandelier", "dulce", "concierge", "latticework",
  "hibiscus", "tamale", "maracas", "gyroplane", "burpees", "Adriatic", "piccolo",
  "au revoir", "tulle", "boll weevil", "camphor", "Tucson", "paparazzi", "pumpernickel",
  "pogrom", "bursitis", "cycads", "sarsaparilla", "cannelloni", "boulangerie",
  "bronchitis", "Oswego", "diphtheria", "baklava", "corbels", "trebuchets", "Kilimanjaro",
  "protege", "hors d'oeuvres", "maquisards", "Aubusson", "Charolais", "Charollais"
];

// Export for use in main app
const WORD_LISTS = {
  one: ONE_BEE,
  two: TWO_BEE,
  three: THREE_BEE,
  all: [...ONE_BEE, ...TWO_BEE, ...THREE_BEE]
};

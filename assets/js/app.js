/* ==========================================================================
   Karmic Genie (genie.shishyan.in) — End-to-End Dharma Town OS Engine
   ========================================================================== */

let SCALE = 'TOWN';
const SCALE_META = {
  TOWN:    { name: 'Model Dharma Gramam #01', pop: '25,000 Citizens On-Chain', mult: 1 },
  CITY:    { name: 'Dharma Mahanagar (18 Towns)', pop: '6,50,000 Citizens On-Chain', mult: 15 },
  STATE:   { name: 'Dharma Nadu State Grid (420 Towns)', pop: '4.2 Crore Citizens On-Chain', mult: 180 },
  COUNTRY: { name: 'Bharat Karmic Rashtra (8,500+ Nodes)', pop: '1.4 Billion Citizens On-Chain', mult: 1500 }
};

const PILLARS = {
  RUNA_VIMOCHANA: { name: 'Runa-Vimochana (Debt Relief & 0% Mutual Credit)', mult: 1.8 },
  BHUMI_SEVA:     { name: 'Bhumi & Prana Seva (Water, Solar, Trees, Roads)', mult: 1.6 },
  ANNADANA:       { name: 'Annadana & Aarogya (Free Food & Healthcare)', mult: 1.5 },
  VIDYADANA:      { name: 'Vidyadana (Open Gurukula & Knowledge)', mult: 1.4 },
  SATYA_NYAYA:    { name: 'Satya & Nyaya (Citizen Jury & Honest Audit)', mult: 1.3 }
};

// End-to-End Town State
let state = {
  commonsPool: 4650000,
  fontScale: 1.0,
  themeIndex: 0,
  audioCtx: null,
  droneOsc: null,
  droneGain: null,

  // 1. ALL CITIZENS (Universal Roster — Every citizen is on the ballot & ranked by Soulbound Karma)
  citizens: [
    {
      id: 'CIT-01',
      name: 'Vikramaditya Builders (Reformed)',
      vocation: 'Master Builder & Water Engineer',
      cash: 1800000,
      given: 3200000,
      sevaHours: 85,
      karma: 198420,
      lastDeed: 'Gave 64% of fortune to build Town Clean Water Plant & forgave 45 farmer loans'
    },
    {
      id: 'CIT-02',
      name: 'Acharya Meera Devi',
      vocation: 'Gurukula Mathematics & Ethics Teacher',
      cash: 82000,
      given: 48000,
      sevaHours: 420,
      karma: 68940,
      lastDeed: 'Taught 180 town children free for 3 years; donated 37% of modest savings to library'
    },
    {
      id: 'CIT-03',
      name: 'Vaidya Thirumoolar Selvam',
      vocation: 'Siddha & Modern Physician',
      cash: 195000,
      given: 210000,
      sevaHours: 360,
      karma: 62400,
      lastDeed: 'Runs 24/7 free maternity & emergency clinic; zero fees charged to any villager'
    },
    {
      id: 'CIT-04',
      name: 'Anbu Kisan &Weaver Cooperative',
      vocation: 'Organic Farmer & Handloom Guild',
      cash: 260000,
      given: 220000,
      sevaHours: 290,
      karma: 54120,
      lastDeed: 'Supplies 1,000 daily meals to Annadana Hall & maintains town seed bank'
    },
    {
      id: 'CIT-05',
      name: 'Karikalan Solar & Irrigation',
      vocation: 'Renewable Energy Technologist',
      cash: 340000,
      given: 190000,
      sevaHours: 210,
      karma: 41800,
      lastDeed: 'Installed solar microgrids across 4 wards with 0% mutual credit'
    },
    {
      id: 'CIT-06',
      name: 'Selvi Karpagam',
      vocation: 'Botanist & Lake Restoration Lead',
      cash: 95000,
      given: 45000,
      sevaHours: 310,
      karma: 38900,
      lastDeed: 'Planted 12,000 native banyan, neem & fruit trees around the town watershed'
    },
    {
      id: 'CIT-07',
      name: 'Ilankovan Nyaya Sabha',
      vocation: 'Constitutional Auditor & Mediator',
      cash: 110000,
      given: 52000,
      sevaHours: 275,
      karma: 34500,
      lastDeed: 'Resolved 94 local disputes peacefully without court fees; audited 18 road contracts'
    },
    {
      id: 'CIT-08',
      name: 'Murugan Annadana Trust',
      vocation: 'Community Kitchen Steward',
      cash: 140000,
      given: 130000,
      sevaHours: 240,
      karma: 31200,
      lastDeed: 'Ensured zero hunger across all 12 wards for 600 consecutive days'
    },
    {
      id: 'CIT-09',
      name: 'Senthamizh Digital Commons',
      vocation: 'Open-Source Civic Hardware Maker',
      cash: 125000,
      given: 60000,
      sevaHours: 195,
      karma: 26400,
      lastDeed: 'Built free mesh-network Wi-Fi and offline ledger terminals for every street'
    },
    {
      id: 'CIT-10',
      name: 'Kavitha Artisans Collective',
      vocation: 'Eco-Housing & Terracotta Potter',
      cash: 88000,
      given: 34000,
      sevaHours: 180,
      karma: 22150,
      lastDeed: 'Built cooling clay roofs for 30 elderly widows free of cost'
    },
    {
      id: 'CIT-11',
      name: 'Dhanapati Hoardings Pvt Ltd',
      vocation: 'Idle Speculator & Luxury Hoarder',
      cash: 9550000,
      given: 0,
      sevaHours: 0,
      karma: 0,
      lastDeed: 'Hoarded ₹95.5L idle cash — 0% given, losing 5%/epoch to Anti-Hoarding Demurrage'
    }
  ],

  // 2. DAILY PUBLIC PRIORITY POLL ("What gets implemented first today?")
  dailyPolls: [
    {
      id: 'POLL-01',
      title: 'Expand 24/7 Clean Drinking Water & Desalination Bio-Filters to East Ward',
      category: 'Water & Sanitation (Prana)',
      cost: 850000,
      votes: 4820,
      karmaWeightedVotes: 94200,
      status: 'LEADING #1 — NEXT TO AUTO-EXECUTE'
    },
    {
      id: 'POLL-02',
      title: 'Upgrade Town Gurukula Science, AI & Robotics Makerspace (Free for All Youth)',
      category: 'Vidyadana (Education)',
      cost: 620000,
      votes: 4510,
      karmaWeightedVotes: 88150,
      status: 'RANK #2'
    },
    {
      id: 'POLL-03',
      title: '100kW Community Agrivoltaics Solar Canopy Over Organic Vegetable Market',
      category: 'Urja (Clean Energy)',
      cost: 780000,
      votes: 4190,
      karmaWeightedVotes: 79400,
      status: 'RANK #3'
    },
    {
      id: 'POLL-04',
      title: 'Mobile Siddha, Ayurveda & Modern Diagnostic Van for Senior Citizens',
      category: 'Aarogya (Healthcare)',
      cost: 540000,
      votes: 3890,
      karmaWeightedVotes: 72100,
      status: 'RANK #4'
    }
  ],

  // 3. TOP 10 CITIZEN BOONS ("Kalpavriksha — Wishes of the People, Voted by All")
  boons: [
    { rank: 1, citizenId: 'CIT-02', recipient: 'Acharya Meera Devi', wish: 'Solar-Powered Planetarium & Classical Manuscript Library for Town Children', cost: 320000, votes: 6120, granted: true },
    { rank: 2, citizenId: 'CIT-03', recipient: 'Vaidya Thirumoolar Selvam', wish: 'Herbal Medicinal Forest Sanctuary & Free Post-Partum Care Cottage', cost: 280000, votes: 5840, granted: true },
    { rank: 3, citizenId: 'CIT-04', recipient: 'Anbu Kisan & Weaver Guild', wish: 'Zero-Energy Cold Storage & Organic Cotton Spinning Looms for 60 Families', cost: 410000, votes: 5490, granted: false },
    { rank: 4, citizenId: 'CIT-06', recipient: 'Selvi Karpagam', wish: 'Sacred Temple Tank & Lotus Wetland Bio-Restoration Equipment', cost: 190000, votes: 5120, granted: false },
    { rank: 5, citizenId: 'CIT-10', recipient: 'Kavitha Artisans Collective', wish: 'Community Wood-Free Solar Kiln for Zero-Smoke Pottery & Roof Tiles', cost: 165000, votes: 4870, granted: false },
    { rank: 6, citizenId: 'CIT-09', recipient: 'Senthamizh Digital Commons', wish: 'Open-Source Local Language Voice AI Server for Elderly & Farmers', cost: 240000, votes: 4610, granted: false },
    { rank: 7, citizenId: 'CIT-08', recipient: 'Murugan Annadana Trust', wish: 'Biogas Digester Converting Kitchen Waste into Clean Cooking Fuel', cost: 135000, votes: 4390, granted: false },
    { rank: 8, citizenId: 'CIT-05', recipient: 'Karikalan Solar & Irrigation', wish: 'Electric Cargo Trikes for Zero-Emission Farm-to-Home Delivery', cost: 210000, votes: 4150, granted: false },
    { rank: 9, citizenId: 'CIT-07', recipient: 'Ilankovan Nyaya Sabha', wish: 'Open-Air Amphitheatre for Daily Town Sabha & Evening Cultural Music', cost: 250000, votes: 3980, granted: false },
    { rank: 10, citizenId: 'CIT-01', recipient: 'Vikramaditya Builders', wish: 'Rainwater Harvesting Recharge Wells Along Every Street Corner', cost: 290000, votes: 3760, granted: false }
  ],

  // 4. ALL TOWN STEWARDSHIP POSITIONS (100% Citizens Eligible, Elected by All, Ranked by Dharma)
  positions: [
    {
      roleId: 'POS-01',
      title: 'Nagara Dharma-Pala (Chief Town Steward)',
      domain: 'Overall Coordination & Constitutional Guardian',
      holderId: 'CIT-01',
      votes: 8420
    },
    {
      roleId: 'POS-02',
      title: 'Kulapati — Vidya & Gurukula Steward',
      domain: 'Universal Free Education, Arts & Research',
      holderId: 'CIT-02',
      votes: 7950
    },
    {
      roleId: 'POS-03',
      title: 'Dhanvantari — Aarogya & Wellness Steward',
      domain: 'Free Clinics, Maternal Care & Preventive Health',
      holderId: 'CIT-03',
      votes: 7610
    },
    {
      roleId: 'POS-04',
      title: 'Annapurna — Food, Agriculture & Seed Steward',
      domain: 'Organic Farming, Annadana Kitchens & Zero Hunger',
      holderId: 'CIT-04',
      votes: 7340
    },
    {
      roleId: 'POS-05',
      title: 'Varuna & Surya — Water, Energy & Infra Steward',
      domain: 'Clean Water, Solar Microgrids & Roads',
      holderId: 'CIT-05',
      votes: 6890
    },
    {
      roleId: 'POS-06',
      title: 'Dharma-Adhikari — Nyaya & Glass Treasury Auditor',
      domain: 'Dispute Resolution, Zero-Corruption Audit & Citizen Jury',
      holderId: 'CIT-07',
      votes: 6520
    }
  ],

  // 5. 8 BASIC NECESSITIES OF THE FRESH TOWN (Ashta-Adhara)
  necessities: [
    { name: '1. Annam (100% Zero-Hunger Organic Nutrition)', coverage: 100, steward: 'Anbu Kisan & Murugan Annadana', costToCitizen: '0% Tax • Funded by Commons & Seva' },
    { name: '2. Jalam (24/7 Pure Mineralized Drinking Water)', coverage: 98, steward: 'Vikramaditya Water Commons', costToCitizen: 'Free Basic Lifeline (150L/person/day)' },
    { name: '3.Griham (Eco-Dharma Sanctuary Housing)', coverage: 94, steward: 'Kavitha Artisans & Builders Guild', costToCitizen: '0% Interest Mutual Credit Lease-to-Own' },
    { name: '4. Vidya (Grade 1–12 Gurukula + Higher Vidyapitham)', coverage: 100, steward: 'Acharya Meera Devi', costToCitizen: '100% Free • Taught by High-Dharma Acharyas' },
    { name: '5. Aarogya (Holistic Siddha + Modern Medical Care)', coverage: 97, steward: 'Vaidya Thirumoolar Selvam', costToCitizen: '100% Free Preventive & Emergency Care' },
    { name: '6. Urja & Jala-Vani (Solar Microgrid + Mesh Internet)', coverage: 96, steward: 'Karikalan Solar & Senthamizh Commons', costToCitizen: 'Community Co-Owned • Zero Corporate Rent' },
    { name: '7. Runa-Mukti (0% Mutual Credit & Cooperative Tools)', coverage: 100, steward: 'Town Dharma Commons Pool', costToCitizen: '0% APR (Replaces Predatory Banks)' },
    { name: '8. Nyaya & Kala (Peaceful Justice & Sacred Culture)', coverage: 100, steward: 'Ilankovan Nyaya Sabha', costToCitizen: 'Zero Court Fees • Resolved in 7 Days' }
  ],

  // 6. TRI-TIER CIVIC TRIAGE & RESOLUTION ENGINE
  // A. Major Incidents -> Voted by URGENCY (Severity x Time-Criticality)
  majorIncidents: [
    {
      id: 'INC-01',
      title: 'Flash Monsoon Embankment Breach Near South Paddy Canal',
      ward: 'South Canal Ward 6',
      steward: 'Vikramaditya Builders & Varuna Rescue Squad',
      urgencyLevel: 'CRITICAL — SLA < 30 MINS',
      urgencyScore: 9850,
      citizensReporting: 640,
      bountyPool: 350000,
      karmaReward: 12500,
      resolved: false
    },
    {
      id: 'INC-02',
      title: 'Transformer Lightning Surge on Primary Clinic Cold-Chain Line',
      ward: 'Central Aarogya Ward 2',
      steward: 'Karikalan Solar & Microgrid Rapid Team',
      urgencyLevel: 'HIGH — SLA < 1 HOUR',
      urgencyScore: 8420,
      citizensReporting: 410,
      bountyPool: 180000,
      karmaReward: 7800,
      resolved: false
    },
    {
      id: 'INC-03',
      title: 'Fallen Heritage Banyan Branch Blocking East Market Artery',
      ward: 'East Market Ward 4',
      steward: 'Selvi Karpagam Tree & Road Seva Guild',
      urgencyLevel: 'MODERATE — SLA < 3 HOURS',
      urgencyScore: 5190,
      citizensReporting: 235,
      bountyPool: 65000,
      karmaReward: 3200,
      resolved: false
    }
  ],

  // B. Top Issues -> Voted by PRIORITY (P1 Critical -> P2 High -> P3 Medium)
  topIssues: [
    {
      id: 'ISS-01',
      title: 'Low Evening Water Pressure in Elevated North Hillock Homes',
      category: 'Jalam (Water Distribution)',
      priorityTier: 'P1 — HIGHEST PRIORITY',
      priorityScore: 9140,
      votes: 3420,
      cost: 420000,
      karmaReward: 6400,
      addressed: false
    },
    {
      id: 'ISS-02',
      title: 'Monsoon Potholes & Drainage Silt Along Craft Weaver Lane',
      category: 'Bhumi Seva (Roads & Stormwater)',
      priorityTier: 'P1 — HIGHEST PRIORITY',
      priorityScore: 8350,
      votes: 2980,
      cost: 310000,
      karmaReward: 5100,
      addressed: false
    },
    {
      id: 'ISS-03',
      title: 'Need Evening Solar Shuttle Carts for Elderly Attending Night Sabha',
      category: 'Senior Mobility & Access',
      priorityTier: 'P2 — HIGH PRIORITY',
      priorityScore: 6720,
      votes: 2410,
      cost: 220000,
      karmaReward: 3900,
      addressed: false
    },
    {
      id: 'ISS-04',
      title: 'Acoustic Echo & Shade Sail Upgrade in Youth Gurukula Courtyard',
      category: 'Vidyadana (School Facilities)',
      priorityTier: 'P3 — STANDARD PRIORITY',
      priorityScore: 4980,
      votes: 1850,
      cost: 140000,
      karmaReward: 2600,
      addressed: false
    }
  ],

  // C. Top Problems -> Voted by MAJORITY (1-Citizen-1-Vote Headcount Consensus)
  topProblems: [
    {
      id: 'PROB-01',
      title: 'Eliminate 100% of Single-Use Plastic Packaging Across Town Markets',
      rootCause: 'External plastic wrapper waste entering town compost & water channels',
      solutionBlueprint: 'Replace with banana-leaf, terracotta & refundable steel tiffin containers via Artisan Guild',
      yesVotes: 19450,
      totalElectorate: 25000,
      budget: 580000,
      karmaReward: 9500,
      solved: false
    },
    {
      id: 'PROB-02',
      title: 'Groundwater Depletion During Dry Summer Months (March–May)',
      rootCause: 'Surface runoff escaping before recharging deep aquifers',
      solutionBlueprint: 'Construct 40 interconnected check-dams, temple-tank recharge shafts & Miyawaki forest belts',
      yesVotes: 17820,
      totalElectorate: 25000,
      budget: 920000,
      karmaReward: 14800,
      solved: false
    },
    {
      id: 'PROB-03',
      title: 'Post-Harvest Vegetable Spoilage Before Reaching Regional Cities',
      rootCause: 'Lack of zero-cost solar cold rooms & value-added dehydration units',
      solutionBlueprint: 'Build Cooperative Solar Cold-Storage & Sun-Drying Food Park at Town Hub',
      yesVotes: 15640,
      totalElectorate: 25000,
      budget: 750000,
      karmaReward: 11200,
      solved: false
    },
    {
      id: 'PROB-04',
      title: 'Youth Leaving Villages for Repetitive Urban Call-Center Jobs',
      rootCause: 'Lack of local high-tech AI, robotics & sovereign software cooperatives',
      solutionBlueprint: 'Establish Town AI & Open-Hardware Guild paying global-grade dividends locally',
      yesVotes: 11900,
      totalElectorate: 25000,
      budget: 680000,
      karmaReward: 10400,
      solved: false
    }
  ],

  chain: []
};

function fmtINR(val) {
  const scaled = val * SCALE_META[SCALE].mult;
  return '₹' + Math.round(scaled).toLocaleString('en-IN');
}

function getTierBadge(karma) {
  if (karma >= 50000) return { label: 'Mahadani / Rajarshi (Supreme Benefactor)', cls: 'bg-amber-500/20 text-amber-300 border-amber-500/40' };
  if (karma >= 25000) return { label: 'Lok-Stambha (Pillar of the Town)', cls: 'bg-teal-500/20 text-teal-300 border-teal-500/40' };
  if (karma >= 5000)  return { label: 'Dharma-Rakshak (Community Guardian)', cls: 'bg-sky-500/20 text-sky-300 border-sky-500/40' };
  if (karma >= 500)   return { label: 'Sevak (Active Contributor)', cls: 'bg-slate-800 text-slate-300 border-slate-700' };
  return { label: 'Sanchaya-Baddha (Idle Hoarder — 0 Fame & Ineligible for Office)', cls: 'bg-red-500/20 text-red-300 border-red-500/40' };
}

async function sha256(message) {
  if (window.crypto && window.crypto.subtle) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return '9a4f82c10e7b3d564192837465a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1';
}

async function recordBlock(txType, actor, details, amount, karmaDelta) {
  const index = state.chain.length;
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const prevHash = index === 0 ? '0'.repeat(64) : state.chain[0].hash;
  const payload = `${index}|${timestamp}|${txType}|${actor}|${details}|${amount}|${karmaDelta}|${prevHash}`;
  const hash = await sha256(payload);

  state.chain.unshift({
    index,
    timestamp,
    txType,
    actor,
    details,
    amount,
    karmaDelta,
    prevHash,
    hash
  });
  renderAll();
}

// =========================================================================
// SHELL CONTROLS (GURUKULADESAM LEFT STRIP, FONT SCALER, PALM-LEAF, OM DRONE)
// =========================================================================
function toggleLeftStrip() {
  document.body.classList.toggle('strip-expanded');
}

function switchSection(secId) {
  const sections = ['overview', 'triage', 'polls', 'boons', 'elections', 'dharma', 'necessities', 'explorer'];
  sections.forEach(s => {
    const el = document.getElementById('sec-' + s);
    if (el) el.classList.toggle('hidden', s !== secId);
    const navBtn = document.getElementById('strip-nav-' + s);
    if (navBtn) navBtn.classList.toggle('active', s === secId);
  });
  const titles = {
    overview: '1. Dharma Leaderboard & Anti-Hoarding Engine',
    triage: '2. Civic Triage: Incidents (Urgency) • Issues (Priority) • Problems (Majority)',
    polls: '3. Daily Public Priority Polling (Direct Democracy)',
    boons: '4. Top 10 Citizen Boons (Kalpavriksha Wishes)',
    elections: '5. Universal Dharma Stewardship Council',
    dharma: '6. Summon Karmic Genie (Mint Soulbound Fame)',
    necessities: '7. Fresh Town 8 Basic Necessities (Ashta-Adhara)',
    explorer: '8. Proof-of-Dharma SHA-256 Block Explorer'
  };
  const crumb = document.getElementById('currentSectionCrumb');
  if (crumb && titles[secId]) crumb.textContent = titles[secId];
}

function setScale(s) {
  SCALE = s;
  ['TOWN', 'CITY', 'STATE', 'COUNTRY'].forEach(k => {
    const btn = document.getElementById('scale-' + k);
    if (btn) {
      btn.className = k === s ? 'context-tool-btn active' : 'context-tool-btn';
    }
  });
  renderAll();
}

function adjustFontSize(delta) {
  state.fontScale = Math.min(1.25, Math.max(0.85, +(state.fontScale + delta).toFixed(2)));
  document.documentElement.style.setProperty('--font-scale', state.fontScale);
  const ind = document.getElementById('fontScaleIndicator');
  if (ind) ind.textContent = Math.round(state.fontScale * 100) + '%';
}

function togglePalmLeafMode() {
  document.documentElement.classList.remove('theme-light');
  document.documentElement.classList.toggle('theme-palmleaf');
}

function cycleTheme() {
  state.themeIndex = (state.themeIndex + 1) % 3;
  document.documentElement.classList.remove('theme-palmleaf', 'theme-light');
  if (state.themeIndex === 1) document.documentElement.classList.add('theme-palmleaf');
  if (state.themeIndex === 2) document.documentElement.classList.add('theme-light');
}

function toggleOmDrone() {
  const btn = document.getElementById('omDroneBtn');
  if (!state.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    state.audioCtx = new AudioContext();
    state.droneOsc = state.audioCtx.createOscillator();
    state.droneGain = state.audioCtx.createGain();
    state.droneOsc.type = 'sine';
    state.droneOsc.frequency.value = 136.1; // Sacred Om / C# Tanpura root frequency (Hz)
    state.droneGain.gain.value = 0.04;
    state.droneOsc.connect(state.droneGain);
    state.droneGain.connect(state.audioCtx.destination);
    state.droneOsc.start();
    if (btn) btn.classList.add('active');
  } else {
    state.droneOsc.stop();
    state.audioCtx.close();
    state.audioCtx = null;
    if (btn) btn.classList.remove('active');
  }
}

// =========================================================================
// INTERACTIVE ACTIONS FOR ALL TOWN MODULES
// =========================================================================

// 1. Anti-Hoarding Demurrage & Awakening
async function triggerHoardingDemurrage() {
  const hoarder = state.citizens.find(c => c.id === 'CIT-11');
  if (!hoarder || hoarder.cash <= 1000000) return;
  const excess = hoarder.cash - 1000000;
  const demurrage = Math.round(excess * 0.05);
  hoarder.cash -= demurrage;
  state.commonsPool += demurrage;
  hoarder.lastDeed = `Idle Hoard Demurrage: ₹${demurrage.toLocaleString('en-IN')} auto-swept to Town Commons Pool (0 Karma earned)`;

  await recordBlock('HOARDING_DEMURRAGE', hoarder.name, '5% Idle Hoard Swept into Town Commons Pool', demurrage, 0);
}

async function awakenHoarderToGive() {
  const hoarder = state.citizens.find(c => c.id === 'CIT-11');
  if (!hoarder) return;
  const giveAmt = Math.min(5500000, Math.round(hoarder.cash * 0.65));
  if (giveAmt <= 0) return;

  const res = calculateSacrificialKarma(hoarder, giveAmt, 'RUNA_VIMOCHANA', 50);
  hoarder.cash -= giveAmt;
  hoarder.given += giveAmt;
  hoarder.sevaHours += 50;
  hoarder.karma = Math.round(hoarder.karma + res.karma);
  hoarder.vocation = 'Reformed Philanthropist & Commons Patron';
  hoarder.lastDeed = 'Gave away 65% of hoard to fund Free Town Hospital & Farmer Debt Jubilee for Mahadani Fame!';
  state.commonsPool += giveAmt;

  await recordBlock('MAHADANA_AWAKENING', hoarder.name, 'Converted ₹55L Idle Hoard into Free Hospital & Debt Jubilee', giveAmt, res.karma);
}

// 2. Daily Priority Poll Voting & Execution
async function voteDailyPoll(pollId) {
  const poll = state.dailyPolls.find(p => p.id === pollId);
  if (!poll) return;
  poll.votes += 145;
  poll.karmaWeightedVotes += 4200;
  state.dailyPolls.sort((a, b) => b.karmaWeightedVotes - a.karmaWeightedVotes);
  state.dailyPolls.forEach((p, idx) => {
    p.status = idx === 0 ? 'LEADING #1 — NEXT TO AUTO-EXECUTE' : `RANK #${idx + 1}`;
  });
  await recordBlock('DAILY_SABHA_VOTE', 'Town Citizens (Sabha Consensus)', `Voted Priority: "${poll.title}"`, 0, 120);
}

async function executeTopDailyPriority() {
  state.dailyPolls.sort((a, b) => b.karmaWeightedVotes - a.karmaWeightedVotes);
  const top = state.dailyPolls[0];
  if (!top) return;
  if (state.commonsPool < top.cost) {
    alert('Run Anti-Hoarding Demurrage or Perform Dharma to replenish the Town Commons Pool first!');
    return;
  }
  state.commonsPool -= top.cost;
  top.status = 'EXECUTED & FUNDED TODAY ON-CHAIN ✓';
  await recordBlock('DAILY_PRIORITY_EXECUTED', 'Town Commons Smart Treasury', `Auto-Executed #1 Voted Priority: "${top.title}"`, top.cost, 1500);
}

async function proposeDailyPriority() {
  const titleEl = document.getElementById('new-poll-title');
  const catEl = document.getElementById('new-poll-cat');
  const costEl = document.getElementById('new-poll-cost');
  const title = titleEl.value.trim();
  if (!title) return;
  const cost = parseInt(costEl.value, 10) || 450000;

  state.dailyPolls.push({
    id: 'POLL-0' + (state.dailyPolls.length + 1),
    title,
    category: catEl.value,
    cost,
    votes: 1200,
    karmaWeightedVotes: 28500,
    status: `RANK #${state.dailyPolls.length + 1}`
  });
  titleEl.value = '';
  await recordBlock('NEW_DAILY_PROPOSAL', 'Citizen Initiative', `Proposed Daily Priority: "${title}"`, cost, 250);
}

// 3. Top 10 Citizen Boons (Kalpavriksha) Voting & Realization
async function voteCitizenBoon(rankIdx) {
  const boon = state.boons[rankIdx];
  if (!boon) return;
  boon.votes += 210;
  state.boons.sort((a, b) => b.votes - a.votes);
  state.boons.forEach((b, i) => { b.rank = i + 1; });
  await recordBlock('KALPAVRIKSHA_BOON_VOTE', 'All-Citizen Boon Poll', `Voted to realize wish of ${boon.recipient}: "${boon.wish}"`, boon.cost, 180);
}

async function grantNextTopBoon() {
  const nextBoon = state.boons.find(b => !b.granted);
  if (!nextBoon) return;
  if (state.commonsPool < nextBoon.cost) {
    alert('Insufficient Commons Pool — run Anti-Hoarding Demurrage or Dāna to fund this boon!');
    return;
  }
  state.commonsPool -= nextBoon.cost;
  nextBoon.granted = true;
  await recordBlock('BOON_REALIZED', 'Karmic Genie Kalpavriksha Pool', `Granted Citizen Boon #${nextBoon.rank} to ${nextBoon.recipient}: "${nextBoon.wish}"`, nextBoon.cost, 2400);
}

// 4. Universal Dharma Stewardship Elections (All Citizens Eligible, Ranked by Karma)
async function castStewardVote(roleId, candidateId) {
  const pos = state.positions.find(p => p.roleId === roleId);
  const cand = state.citizens.find(c => c.id === candidateId);
  if (!pos || !cand) return;

  if (cand.karma < 500) {
    alert(`CONSTITUTIONAL DHARMA LOCK: ${cand.name} has 0 Soulbound Karma (Idle Hoarder). In a Karmic Genie Town, only citizens with verified Seva & Dāna can hold public stewardship!`);
    return;
  }

  pos.holderId = cand.id;
  pos.votes += 320;
  await recordBlock('UNIVERSAL_STEWARD_ELECTION', 'All-Citizen Open Ballot', `Elected ${cand.name} (${cand.karma.toLocaleString()} Karma) as ${pos.title}`, 0, 500);
}

// 5. Perform Dharma (Sacrificial Multiplier)
function calculateSacrificialKarma(actor, amountGiven, pillarKey, sevaHours) {
  const pMult = PILLARS[pillarKey] ? PILLARS[pillarKey].mult : 1.5;
  const preWealth = Math.max(actor.cash, 1);
  const frac = Math.min(amountGiven / preWealth, 1.0);
  const boost = 1.0 + (3.0 * Math.sqrt(frac));
  const danaKarma = (amountGiven / 100.0) * pMult * boost;
  const sevaKarma = (sevaHours * 50.0) * pMult;
  return {
    karma: Math.round((danaKarma + sevaKarma) * 10) / 10,
    pct: Math.round(frac * 1000) / 10,
    boost: Math.round(boost * 100) / 100
  };
}

function previewKarmaCalculation() {
  const actorEl = document.getElementById('dharma-actor');
  if (!actorEl || !actorEl.value) return;
  const actor = state.citizens.find(a => a.id === actorEl.value) || state.citizens[0];
  const pillar = document.getElementById('dharma-pillar').value;
  const amount = parseFloat(document.getElementById('dharma-amount').value) || 0;
  const seva = parseFloat(document.getElementById('dharma-seva').value) || 0;

  const res = calculateSacrificialKarma(actor, amount, pillar, seva);
  document.getElementById('preview-sacrifice').textContent = `${res.pct}% of Current Hoard (${res.boost}x Sacrificial Boost)`;
  document.getElementById('preview-karma').textContent = `+${res.karma.toLocaleString()} Soulbound Karma`;
}

async function executeDharmaAct() {
  const actorId = document.getElementById('dharma-actor').value;
  const pillar = document.getElementById('dharma-pillar').value;
  const amount = parseFloat(document.getElementById('dharma-amount').value) || 0;
  const seva = parseFloat(document.getElementById('dharma-seva').value) || 0;
  const memo = document.getElementById('dharma-memo').value.trim() || 'Verified Community Dharma';

  const actor = state.citizens.find(a => a.id === actorId);
  if (!actor) return;
  if (amount > actor.cash) {
    alert(`${actor.name} only has ₹${actor.cash.toLocaleString('en-IN')} available!`);
    return;
  }

  const res = calculateSacrificialKarma(actor, amount, pillar, seva);
  actor.cash -= amount;
  actor.given += amount;
  actor.sevaHours += seva;
  actor.karma = Math.round(actor.karma + res.karma);
  actor.lastDeed = memo;
  state.commonsPool += amount;

  await recordBlock('PROOF_OF_DHARMA', actor.name, memo, amount, res.karma);
  switchSection('overview');
}

// =========================================================================
// 6. TRI-TIER CIVIC TRIAGE ACTIONS (INCIDENTS -> URGENCY, ISSUES -> PRIORITY, PROBLEMS -> MAJORITY)
// =========================================================================

// A. Major Incidents (Voted by URGENCY)
async function voteIncidentUrgency(incId) {
  const inc = state.majorIncidents.find(i => i.id === incId);
  if (!inc || inc.resolved) return;
  inc.citizensReporting += 45;
  inc.urgencyScore += 620;
  state.majorIncidents.sort((a, b) => (a.resolved - b.resolved) || (b.urgencyScore - a.urgencyScore));
  await recordBlock('INCIDENT_URGENCY_VOTE', 'Emergency Citizen Signal', `Escalated Urgency (${inc.urgencyScore}): "${inc.title}"`, 0, 90);
}

async function dispatchTopIncidentResponse(incId) {
  const inc = state.majorIncidents.find(i => i.id === incId);
  if (!inc || inc.resolved) return;
  if (state.commonsPool < inc.bountyPool) {
    alert('Insufficient Commons Pool — run Anti-Hoarding Demurrage or Dāna to replenish emergency reserve!');
    return;
  }
  state.commonsPool -= inc.bountyPool;
  inc.resolved = true;

  // Reward the lead steward's Karma
  const leadCitizen = state.citizens[0];
  leadCitizen.karma += inc.karmaReward;
  leadCitizen.sevaHours += 12;
  leadCitizen.lastDeed = `Resolved Major Incident (${inc.urgencyLevel}): ${inc.title}`;

  await recordBlock('INCIDENT_RESOLVED_SLA', inc.steward, `Emergency Dispatched & Resolved: "${inc.title}"`, inc.bountyPool, inc.karmaReward);
}

async function reportMajorIncident() {
  const titleEl = document.getElementById('new-inc-title');
  const wardEl = document.getElementById('new-inc-ward');
  const slaEl = document.getElementById('new-inc-sla');
  const title = titleEl.value.trim();
  if (!title) return;

  state.majorIncidents.unshift({
    id: 'INC-0' + (state.majorIncidents.length + 1),
    title,
    ward: wardEl.value.trim() || 'Central Ward 1',
    steward: 'Rapid Dharma Seva Force',
    urgencyLevel: slaEl.value,
    urgencyScore: slaEl.value.includes('CRITICAL') ? 9950 : 7500,
    citizensReporting: 180,
    bountyPool: 200000,
    karmaReward: 8500,
    resolved: false
  });
  titleEl.value = '';
  await recordBlock('MAJOR_INCIDENT_REPORTED', 'Citizen Emergency Alert', `Reported Major Incident (${slaEl.value}): "${title}"`, 200000, 300);
}

// B. Top Issues (Voted by PRIORITY: P1 -> P2 -> P3)
async function voteIssuePriority(issId, boostAmount) {
  const iss = state.topIssues.find(i => i.id === issId);
  if (!iss || iss.addressed) return;
  iss.votes += 130;
  iss.priorityScore += boostAmount;
  if (iss.priorityScore >= 8000) iss.priorityTier = 'P1 — HIGHEST PRIORITY';
  else if (iss.priorityScore >= 6000) iss.priorityTier = 'P2 — HIGH PRIORITY';
  state.topIssues.sort((a, b) => (a.addressed - b.addressed) || (b.priorityScore - a.priorityScore));
  await recordBlock('ISSUE_PRIORITY_VOTE', 'Citizen Priority Matrix', `Voted Priority (${iss.priorityTier}) for Issue: "${iss.title}"`, 0, 110);
}

async function addressTopPriorityIssue(issId) {
  const iss = state.topIssues.find(i => i.id === issId);
  if (!iss || iss.addressed) return;
  if (state.commonsPool < iss.cost) {
    alert('Insufficient Commons Pool — run Anti-Hoarding Demurrage or Dāna first!');
    return;
  }
  state.commonsPool -= iss.cost;
  iss.addressed = true;
  await recordBlock('TOP_ISSUE_ADDRESSED', 'Priority Civic Squad', `Addressed ${iss.priorityTier} Issue: "${iss.title}"`, iss.cost, iss.karmaReward);
}

async function submitNewIssue() {
  const titleEl = document.getElementById('new-iss-title');
  const catEl = document.getElementById('new-iss-cat');
  const prioEl = document.getElementById('new-iss-prio');
  const title = titleEl.value.trim();
  if (!title) return;

  const scoreMap = { 'P1 — HIGHEST PRIORITY': 8800, 'P2 — HIGH PRIORITY': 6900, 'P3 — STANDARD PRIORITY': 5100 };
  state.topIssues.push({
    id: 'ISS-0' + (state.topIssues.length + 1),
    title,
    category: catEl.value,
    priorityTier: prioEl.value,
    priorityScore: scoreMap[prioEl.value] || 6500,
    votes: 950,
    cost: 260000,
    karmaReward: 4500,
    addressed: false
  });
  state.topIssues.sort((a, b) => (a.addressed - b.addressed) || (b.priorityScore - a.priorityScore));
  titleEl.value = '';
  await recordBlock('NEW_ISSUE_LOGGED', 'Citizen Priority Queue', `Logged ${prioEl.value} Issue: "${title}"`, 260000, 200);
}

// C. Top Problems (Voted by MAJORITY: 1-Citizen-1-Vote >50% Mandate)
async function voteProblemMajority(probId) {
  const prob = state.topProblems.find(p => p.id === probId);
  if (!prob || prob.solved) return;
  prob.yesVotes = Math.min(prob.totalElectorate, prob.yesVotes + 850);
  state.topProblems.sort((a, b) => (a.solved - b.solved) || (b.yesVotes - a.yesVotes));
  const pct = ((prob.yesVotes / prob.totalElectorate) * 100).toFixed(1);
  await recordBlock('PROBLEM_MAJORITY_VOTE', 'Town Majority Referendum', `Majority Vote (${pct}% Mandate) for Problem: "${prob.title}"`, 0, 150);
}

async function solveMajorityProblem(probId) {
  const prob = state.topProblems.find(p => p.id === probId);
  if (!prob || prob.solved) return;
  const majorityPct = (prob.yesVotes / prob.totalElectorate) * 100;
  if (majorityPct < 50) {
    alert(`MAJORITY LOCK: This structural problem currently has ${majorityPct.toFixed(1)}% support. Vote it above >50% majority mandate to unlock automatic Commons execution!`);
    return;
  }
  if (state.commonsPool < prob.budget) {
    alert('Insufficient Commons Pool — run Anti-Hoarding Demurrage or Dāna first!');
    return;
  }
  state.commonsPool -= prob.budget;
  prob.solved = true;
  await recordBlock('MAJORITY_PROBLEM_SOLVED', 'Town Structural Reform Sabha', `Executed Majority Mandate (${majorityPct.toFixed(1)}%): "${prob.title}"`, prob.budget, prob.karmaReward);
}

async function proposeStructuralProblem() {
  const titleEl = document.getElementById('new-prob-title');
  const blueprintEl = document.getElementById('new-prob-blueprint');
  const title = titleEl.value.trim();
  if (!title) return;

  state.topProblems.push({
    id: 'PROB-0' + (state.topProblems.length + 1),
    title,
    rootCause: 'Citizen-identified systemic bottleneck',
    solutionBlueprint: blueprintEl.value.trim() || '100% Cooperative Dharma Commons Replacement',
    yesVotes: 13200,
    totalElectorate: 25000,
    budget: 640000,
    karmaReward: 9800,
    solved: false
  });
  state.topProblems.sort((a, b) => (a.solved - b.solved) || (b.yesVotes - a.yesVotes));
  titleEl.value = '';
  blueprintEl.value = '';
  await recordBlock('NEW_PROBLEM_REFERENDUM', 'Citizen Majority Ballot', `Opened Majority Referendum: "${title}"`, 640000, 250);
}

// =========================================================================
// MASTER RENDER
// =========================================================================
function renderAll() {
  const ranked = [...state.citizens].sort((a, b) => b.karma - a.karma);
  const totalKarma = ranked.reduce((s, a) => s + a.karma, 0);

  document.getElementById('kpi-scale').textContent = SCALE_META[SCALE].name;
  document.getElementById('kpi-pop').textContent = SCALE_META[SCALE].pop;
  document.getElementById('kpi-karma').textContent = Math.round(totalKarma * SCALE_META[SCALE].mult).toLocaleString('en-IN');
  document.getElementById('kpi-commons').textContent = fmtINR(state.commonsPool);
  document.getElementById('kpi-leader').textContent = ranked[0].name;

  // 1. Render Overview Leaderboard
  const lbEl = document.getElementById('leaderboard-list');
  if (lbEl) {
    lbEl.innerHTML = ranked.map((a, idx) => {
      const badge = getTierBadge(a.karma);
      const totalHandled = a.cash + a.given;
      const pctGiven = totalHandled > 0 ? Math.round((a.given / totalHandled) * 1000) / 10 : 0;

      return `
        <div class="gkd-card ${idx === 0 ? 'gold-border' : ''}" style="padding:16px;">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${idx === 0 ? 'bg-amber-500 text-black' : 'bg-slate-800 text-teal-300 border border-slate-700'}">
                #${idx + 1}
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="font-bold text-base">${a.name}</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full border font-semibold ${badge.cls}">${badge.label}</span>
                </div>
                <div class="text-xs text-slate-400 mt-0.5">${a.vocation} • <span class="text-slate-200">${a.lastDeed}</span></div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-400">Soulbound Karma (Fame)</div>
              <div class="text-lg font-extrabold text-amber-400">${Math.round(a.karma * SCALE_META[SCALE].mult).toLocaleString('en-IN')}</div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-xs">
            <div>
              <span class="text-slate-400">Given Away (Dāna):</span>
              <div class="font-bold text-emerald-400">${fmtINR(a.given)} (${pctGiven}% of Wealth)</div>
            </div>
            <div>
              <span class="text-slate-400">Verified Seva:</span>
              <div class="font-bold text-sky-400">${a.sevaHours} Hours</div>
            </div>
            <div>
              <span class="text-slate-400">Personal Cash Left:</span>
              <div class="hash-mono text-slate-300">${fmtINR(a.cash)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render Daily Priority Polls
  const pollsEl = document.getElementById('daily-polls-list');
  if (pollsEl) {
    const maxVotes = Math.max(...state.dailyPolls.map(p => p.karmaWeightedVotes), 1);
    pollsEl.innerHTML = state.dailyPolls.map((p, idx) => {
      const pct = Math.round((p.karmaWeightedVotes / maxVotes) * 100);
      return `
        <div class="gkd-card ${idx === 0 ? 'gold-border' : ''}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <span class="text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${idx === 0 ? 'bg-amber-500 text-black' : 'bg-slate-800 text-teal-300'}">${p.status}</span>
              <span class="text-xs text-slate-400 ml-2">${p.category}</span>
              <h3 class="text-base font-bold mt-1.5">${p.title}</h3>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-400">Required Commons Budget</div>
              <div class="text-base font-bold text-emerald-400">${fmtINR(p.cost)}</div>
            </div>
          </div>
          <div class="progress-bar-bg my-2.5">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="text-slate-300">
              <strong>${p.votes.toLocaleString()} Citizens Voted</strong> • Dharma-Weighted Consensus: <span class="text-amber-400 font-bold">${p.karmaWeightedVotes.toLocaleString()}</span>
            </div>
            <button onclick="voteDailyPoll('${p.id}')" class="btn-teal py-1.5 px-3">
              + Vote for This Today
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Top 10 Citizen Boons (Kalpavriksha)
  const boonsEl = document.getElementById('boons-list');
  if (boonsEl) {
    boonsEl.innerHTML = state.boons.map((b, idx) => `
      <div class="gkd-card ${b.granted ? 'gold-border' : ''}" style="padding:15px;">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${b.granted ? 'bg-emerald-500 text-black' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
              #${b.rank}
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-bold text-sm">${b.recipient}</span>
                <span class="text-xs px-2 py-0.5 rounded-full ${b.granted ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'bg-slate-800 text-slate-300'}">
                  ${b.granted ? 'BOON REALIZED BY TOWN ✓' : 'TOP 10 WISH QUEUE'}
                </span>
              </div>
              <div class="text-xs text-teal-300 font-semibold mt-1">Wish: "${b.wish}"</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right text-xs">
              <div class="text-slate-400">${b.votes.toLocaleString()} Votes</div>
              <div class="font-bold text-amber-400">${fmtINR(b.cost)}</div>
            </div>
            <button onclick="voteCitizenBoon(${idx})" class="btn-teal py-1.5 px-3 text-xs">
              Vote Boon
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Universal Stewardship Elections (Every Citizen on the Ballot!)
  const elecEl = document.getElementById('elections-grid');
  if (elecEl) {
    elecEl.innerHTML = state.positions.map(pos => {
      const currentHolder = state.citizens.find(c => c.id === pos.holderId) || ranked[0];
      const optionsHtml = ranked.map((c, idx) =>
        `<option value="${c.id}" ${c.id === pos.holderId ? 'selected' : ''}>
          #${idx + 1} ${c.name} — ${c.karma.toLocaleString()} Karma (${c.vocation})
        </option>`
      ).join('');

      return `
        <div class="gkd-card">
          <div class="text-xs font-bold uppercase text-amber-400">${pos.domain}</div>
          <h3 class="text-base font-bold mt-1">${pos.title}</h3>
          <div class="my-3 p-3 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs">
            <div class="text-slate-400">Currently Elected Steward (By Universal Dharma Ballot):</div>
            <div class="text-sm font-bold text-teal-300 mt-0.5">${currentHolder.name}</div>
            <div class="text-amber-400 font-semibold mt-0.5">Soulbound Karma: ${currentHolder.karma.toLocaleString()} • ${pos.votes.toLocaleString()} Citizen Votes</div>
          </div>
          <label class="block text-xs text-slate-400 mb-1">All Citizens Are on the Ballot (Sorted by Verified Good Deeds):</label>
          <div class="flex gap-2">
            <select id="ballot-${pos.roleId}" class="flex-grow px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white">
              ${optionsHtml}
            </select>
            <button onclick="castStewardVote('${pos.roleId}', document.getElementById('ballot-${pos.roleId}').value)" class="btn-gold py-1.5 px-3 text-xs">
              Cast Vote
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 5. Populate Actor Dropdown in Dharma Genie Tab
  const actorSel = document.getElementById('dharma-actor');
  if (actorSel) {
    if (actorSel.options.length === 0) {
      state.citizens.forEach(c => {
        actorSel.add(new Option(`${c.name} (Cash: ₹${c.cash.toLocaleString('en-IN')})`, c.id));
      });
    } else {
      Array.from(actorSel.options).forEach(opt => {
        const acc = state.citizens.find(a => a.id === opt.value);
        if (acc) opt.text = `${acc.name} (Available: ${fmtINR(acc.cash)})`;
      });
    }
    previewKarmaCalculation();
  }

  // 6. Render 8 Basic Necessities of the Fresh Town
  const necEl = document.getElementById('necessities-grid');
  if (necEl) {
    necEl.innerHTML = state.necessities.map(n => `
      <div class="gkd-card">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-bold text-teal-300">${n.name}</h3>
          <span class="text-xs font-extrabold text-amber-400">${n.coverage}% Guaranteed</span>
        </div>
        <div class="progress-bar-bg mb-3">
          <div class="progress-bar-fill" style="width:${n.coverage}%"></div>
        </div>
        <div class="text-xs text-slate-300"><strong>Elected Steward:</strong> ${n.steward}</div>
        <div class="text-xs text-emerald-400 font-semibold mt-1">${n.costToCitizen}</div>
      </div>
    `).join('');
  }

  // 6B. Render Tri-Tier Civic Triage (Major Incidents -> Urgency, Top Issues -> Priority, Top Problems -> Majority)
  const incEl = document.getElementById('incidents-list');
  if (incEl) {
    const maxUrgency = Math.max(...state.majorIncidents.map(i => i.urgencyScore), 1);
    incEl.innerHTML = state.majorIncidents.map((inc, idx) => {
      const pct = Math.min(100, Math.round((inc.urgencyScore / maxUrgency) * 100));
      const badgeCls = inc.resolved
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
        : (inc.urgencyLevel.includes('CRITICAL') ? 'bg-red-500 text-white' : 'bg-amber-500 text-black');

      return `
        <div class="gkd-card ${!inc.resolved && idx === 0 ? 'border-red-500/70' : ''}" style="padding:15px;">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeCls}">
              ${inc.resolved ? 'INCIDENT RESOLVED ✓' : inc.urgencyLevel}
            </span>
            <span class="text-xs font-mono text-red-400 font-bold">Urgency Index: ${inc.urgencyScore.toLocaleString()}</span>
          </div>
          <h4 class="text-sm font-bold text-white">${inc.title}</h4>
          <div class="text-xs text-slate-400 mt-1">Ward: <span class="text-slate-200">${inc.ward}</span> • Lead: <span class="text-teal-300">${inc.steward}</span></div>
          <div class="progress-bar-bg my-2.5">
            <div class="progress-bar-fill" style="width:${pct}%; background: linear-gradient(90deg, #ef4444 0%, #f59e0b 100%);"></div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div>
              <span class="text-slate-300"><strong>${inc.citizensReporting}</strong> Alerts</span> •
              <span class="text-amber-400 font-bold">+${inc.karmaReward.toLocaleString()} Karma</span>
            </div>
            <div class="flex gap-1.5">
              ${!inc.resolved ? `
                <button onclick="voteIncidentUrgency('${inc.id}')" class="btn-teal py-1 px-2.5 text-xs">
                  + Vote Urgency
                </button>
                <button onclick="dispatchTopIncidentResponse('${inc.id}')" class="btn-gold py-1 px-2.5 text-xs">
                  Dispatch (${fmtINR(inc.bountyPool)})
                </button>
              ` : `<span class="text-emerald-400 font-bold">SLA Verified On-Chain ✓</span>`}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const issEl = document.getElementById('issues-list');
  if (issEl) {
    const maxPrio = Math.max(...state.topIssues.map(i => i.priorityScore), 1);
    issEl.innerHTML = state.topIssues.map((iss, idx) => {
      const pct = Math.min(100, Math.round((iss.priorityScore / maxPrio) * 100));
      const badgeCls = iss.addressed
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
        : (iss.priorityTier.startsWith('P1') ? 'bg-amber-500 text-black' : 'bg-sky-500/20 text-sky-300 border-sky-500/40');

      return `
        <div class="gkd-card ${!iss.addressed && idx === 0 ? 'gold-border' : ''}" style="padding:15px;">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeCls}">
              ${iss.addressed ? 'ISSUE ADDRESSED ✓' : iss.priorityTier}
            </span>
            <span class="text-xs font-mono text-amber-400 font-bold">Priority Score: ${iss.priorityScore.toLocaleString()}</span>
          </div>
          <h4 class="text-sm font-bold text-white">${iss.title}</h4>
          <div class="text-xs text-slate-400 mt-1">${iss.category} • <strong>${iss.votes.toLocaleString()}</strong> Priority Votes</div>
          <div class="progress-bar-bg my-2.5">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="text-amber-400 font-bold">Reward: +${iss.karmaReward.toLocaleString()} Karma</div>
            <div class="flex gap-1.5">
              ${!iss.addressed ? `
                <button onclick="voteIssuePriority('${iss.id}', 550)" class="btn-teal py-1 px-2.5 text-xs">
                  + Boost Priority
                </button>
                <button onclick="addressTopPriorityIssue('${iss.id}')" class="btn-gold py-1 px-2.5 text-xs">
                  Fix Issue (${fmtINR(iss.cost)})
                </button>
              ` : `<span class="text-emerald-400 font-bold">Resolved ✓</span>`}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const probEl = document.getElementById('problems-list');
  if (probEl) {
    probEl.innerHTML = state.topProblems.map((prob, idx) => {
      const majorityPct = Math.min(100, Math.round((prob.yesVotes / prob.totalElectorate) * 1000) / 10);
      const hasMajority = majorityPct >= 50.0;
      const badgeCls = prob.solved
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
        : (hasMajority ? 'bg-teal-500 text-black font-extrabold' : 'bg-slate-800 text-slate-300');

      return `
        <div class="gkd-card ${!prob.solved && idx === 0 ? 'gold-border' : ''}" style="padding:15px;">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeCls}">
              ${prob.solved ? 'STRUCTURAL PROBLEM SOLVED ✓' : (hasMajority ? `MAJORITY MANDATE (${majorityPct}%)` : `POLLING (${majorityPct}% / 50%)`)}
            </span>
            <span class="text-xs font-mono text-teal-300 font-bold">${prob.yesVotes.toLocaleString()} / ${prob.totalElectorate.toLocaleString()} Citizens</span>
          </div>
          <h4 class="text-sm font-bold text-white">${prob.title}</h4>
          <div class="text-xs text-slate-400 mt-1"><strong>Root Solution:</strong> <span class="text-slate-200">${prob.solutionBlueprint}</span></div>
          <div class="progress-bar-bg my-2.5">
            <div class="progress-bar-fill" style="width:${majorityPct}%; background: linear-gradient(90deg, #10b981 0%, #2dd4bf 100%);"></div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="text-amber-400 font-bold">+${prob.karmaReward.toLocaleString()} Karma</div>
            <div class="flex gap-1.5">
              ${!prob.solved ? `
                <button onclick="voteProblemMajority('${prob.id}')" class="btn-teal py-1 px-2.5 text-xs">
                  + Vote Majority
                </button>
                <button onclick="solveMajorityProblem('${prob.id}')" class="btn-gold py-1 px-2.5 text-xs">
                  Execute Reform (${fmtINR(prob.budget)})
                </button>
              ` : `<span class="text-emerald-400 font-bold">Mandate Enacted ✓</span>`}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 7. Render Block Explorer
  const chainEl = document.getElementById('chain-container');
  if (chainEl) {
    chainEl.innerHTML = state.chain.map(b => `
      <div class="gkd-card" style="padding:14px;">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-1 text-xs">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-500 text-black font-bold">Block #${b.index}</span>
            <span class="hash-mono px-2 py-0.5 rounded bg-slate-800 text-teal-300">${b.txType}</span>
            <span class="text-slate-400">${b.timestamp}</span>
          </div>
          <div class="font-bold text-amber-400">+${b.karmaDelta.toLocaleString()} Karma Minted</div>
        </div>
        <div class="text-xs font-semibold mt-1">${b.actor} → ${b.details} (${fmtINR(b.amount)})</div>
        <div class="mt-2 pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:justify-between gap-1 hash-mono text-xs text-slate-500">
          <span class="truncate">Prev: ${b.prevHash}</span>
          <span class="truncate text-emerald-400">SHA-256: ${b.hash}</span>
        </div>
      </div>
    `).join('');
  }
}

async function bootApp() {
  await recordBlock('GENESIS_DHARMA_GRAMAM', 'Constitutional Sabha', 'Fresh Dharma Town Initialized — 8 Basic Necessities + Universal Ballot + Kalpavriksha Boons', 4650000, 0);
  await recordBlock('PROOF_OF_DHARMA', 'Acharya Meera Devi', '3 Years Free Gurukula Teaching + 37% Savings Donated', 48000, 68940);
  await recordBlock('PROOF_OF_DHARMA', 'Vikramaditya Builders', 'Gave 64% of Fortune for Town Clean Water Plant & Debt Jubilee', 3200000, 198420);
  await recordBlock('BOON_REALIZED', 'Kalpavriksha Citizen Poll', 'Realized #1 Voted Citizen Boon for Acharya Meera Devi (Children Planetarium)', 320000, 2400);
}

window.addEventListener('DOMContentLoaded', bootApp);

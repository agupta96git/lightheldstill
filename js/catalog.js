// ============================================================
// Portfolio catalog — fully verified categorization
// Every image visually confirmed + pixel-analyzed
// ============================================================

const CATALOG = [

  // ── STONE & SKY ──────────────────────────────────────────
  // Color landscapes: mountains, canyons, geology, wide vistas
  { id:"p005", title:"Tegernsee, Lone Sail",          collection:"stone-sky" },
  { id:"p006", title:"Alpine Ridge, Clearing Storm",  collection:"stone-sky", hero:true },
  { id:"p075", title:"Maroon Bells, Autumn",          collection:"stone-sky", hero:true },
  { id:"p079", title:"Highland Pasture, Storm Light", collection:"stone-sky", hero:true },
  { id:"p080", title:"A82, Glencoe",                  collection:"stone-sky", hero:true },
  { id:"p081", title:"Rainbow at the Cliff's Edge",   collection:"stone-sky", hero:true },
  { id:"p082", title:"Snow on the Munros",            collection:"stone-sky" },
  { id:"p093", title:"Zion Alpenglow",                collection:"stone-sky", hero:true },
  { id:"p094", title:"Zion, Last Light",              collection:"stone-sky" },
  { id:"p095", title:"Zion Canyon, Mid-Day",          collection:"stone-sky" },
  { id:"p100", title:"Zion, Tree at Dusk",            collection:"stone-sky", hero:true },
  { id:"p114", title:"First Light, Bryce",            collection:"stone-sky", hero:true },
  { id:"p123", title:"Öxarárfoss, Iceland",           collection:"stone-sky", hero:true },
  { id:"p127", title:"Foss á Síðu, Green Valley",    collection:"stone-sky", hero:true },

  // ── WATER & MOTION ───────────────────────────────────────
  // Water drop refractions, reflections, long exposures
  { id:"p009", title:"Cherry Blossoms, Tidal Basin",  collection:"stone-sky" },
  { id:"p050", title:"Autumn Pond, Orange Fire",      collection:"stone-sky", hero:true },
  { id:"p051", title:"Autumn Pond, Willow Bridge",    collection:"stone-sky" },
  { id:"p068", title:"Water Drop, Refraction I",      collection:"light", hero:true },
  { id:"p070", title:"Water Drop, Refraction II",     collection:"light", hero:true },
  { id:"p071", title:"Water Drop, Refraction III",    collection:"light", hero:true },
  { id:"p072", title:"Water Drop, Refraction IV",     collection:"light", hero:true },

  // ── BEYOND VISIBLE (infrared) ─────────────────────────────
  // All infrared — identified by color channel swap (red sky, teal/white foliage)
  { id:"p085", title:"Daisy, Infrared",               collection:"beyond-visible", hero:true },
  { id:"p086", title:"White Gladiolus, Infrared",     collection:"beyond-visible", hero:true },
  { id:"p087", title:"Carpenter Bee, Infrared",       collection:"beyond-visible", hero:true },
  { id:"p088", title:"Carpenter Bee, Infrared II",    collection:"beyond-visible" },
  { id:"p089", title:"Crocus Cluster, Infrared",      collection:"beyond-visible" },
  { id:"p090", title:"Crocus, Infrared",              collection:"beyond-visible", hero:true },
  { id:"p118", title:"Canopy Fire, Infrared",         collection:"beyond-visible" },
  { id:"p119", title:"The Old Oak, Infrared",         collection:"beyond-visible", hero:true },
  { id:"p121", title:"Dandelion Field, Infrared",     collection:"beyond-visible", hero:true },

  // ── FLORA (color) ─────────────────────────────────────────
  // Flowers, leaves, botanical macros — all color
  { id:"p010", title:"Parrot Tulip Field",            collection:"flora", hero:true },
  { id:"p013", title:"Magnolia Buds",                 collection:"flora" },
  { id:"p029", title:"Wildflower Field",              collection:"stone-sky" },
  { id:"p031", title:"Backlit Leaf, Bokeh",           collection:"flora" },
  { id:"p032", title:"Leaf Vein Macro",               collection:"flora", hero:true },
  { id:"p041", title:"Hydrangea, Close",              collection:"flora", hero:true },
  { id:"p043", title:"Daylily, Stamen",               collection:"flora", hero:true },
  { id:"p044", title:"Tulip Flame, Abstract I",       collection:"flora", hero:true },
  { id:"p045", title:"Tulip Flame, Abstract II",      collection:"flora", hero:true },
  { id:"p046", title:"Fallen Yellow Leaf",            collection:"flora" },
  { id:"p047", title:"Fallen Leaf, Sunlit",           collection:"flora" },
  { id:"p054", title:"Leaf Skeleton, Gold",           collection:"flora", hero:true },
  { id:"p055", title:"Leaf Eye",                      collection:"flora", hero:true },
  { id:"p057", title:"Red Tulip Bud, Rain Drops",     collection:"flora", hero:true },
  { id:"p058", title:"Grape Hyacinth, Red",           collection:"flora", hero:true },
  { id:"p059", title:"Grape Hyacinth, Close",         collection:"flora" },
  { id:"p060", title:"Cherry Blossom, Macro I",       collection:"flora" },
  { id:"p061", title:"Cherry Blossom, Macro II",      collection:"flora", hero:true },
  { id:"p063", title:"Red Tulips, Rain",              collection:"flora" },
  { id:"p064", title:"Small Red Tulip",               collection:"flora" },
  { id:"p065", title:"Yellow Tulip Buds, Rain",       collection:"flora", hero:true },
  { id:"p066", title:"Yellow Tulip, Close",           collection:"flora", hero:true },
  { id:"p073", title:"Pink Lily, Stamen",             collection:"flora", hero:true },
  { id:"p092", title:"Pink Tulip, Backlit",           collection:"flora" },
  { id:"p096", title:"Claret Cup Cactus Bloom",       collection:"flora", hero:true },
  { id:"p120", title:"Rose Behind Bars",              collection:"flora" },
  { id:"p128", title:"Lotus Bud",                     collection:"flora", hero:true },
  { id:"p129", title:"Lotus in Pink Fog",             collection:"flora" },
  { id:"p131", title:"Sacred Lotus, Open",            collection:"flora", hero:true },
  { id:"p132", title:"Lotus Rising, Dark",            collection:"flora", hero:true },
  { id:"p133", title:"Lotus Interior, Macro",         collection:"flora", hero:true },
  // Birds, mammals, insects, reptiles — all color
  { id:"p074", title:"Sleeping Calf",                 collection:"light" },
  { id:"p122", title:"Lichen Mosaic",                 collection:"flora" },

  // ── BLACK & WHITE ─────────────────────────────────────────
  // Verified B&W (avg_sat < 15) — confirmed via pixel analysis
  { id:"p003", title:"Yosemite, Storm Light",         collection:"black-white", hero:true },
  { id:"p028", title:"Seagulls over Water",           collection:"black-white" },
  { id:"p042", title:"Beech Tree Roots",              collection:"black-white", hero:true },
  { id:"p048", title:"Oxalis, Night",                 collection:"black-white", hero:true },
  { id:"p052", title:"Geese Over Lincoln Memorial",   collection:"black-white", hero:true },
  { id:"p053", title:"Child and Geese, Potomac",      collection:"black-white", hero:true },
  { id:"p056", title:"Daffodil, Rain",                collection:"black-white" },
  { id:"p062", title:"Dandelion at Dusk",             collection:"black-white", hero:true },
  { id:"p076", title:"Zion Ramparts, B&W",            collection:"black-white", hero:true },
  { id:"p084", title:"Loch Morlich, Two Figures",     collection:"black-white", hero:true },
  { id:"p091", title:"Crocus Cluster, B&W",           collection:"black-white" },
  { id:"p097", title:"Sun Through Trees, B&W",        collection:"black-white" },
  { id:"p098", title:"Bison Herd, Utah Mesa",         collection:"black-white", hero:true },
  { id:"p099", title:"Zion Road, Last Light",         collection:"black-white", hero:true },
  { id:"p101", title:"Zion Ramparts, B&W II",         collection:"black-white" },
  { id:"p102", title:"Bighorns on Ancient Stone, B&W",collection:"black-white", hero:true },
  { id:"p103", title:"Crossbedded Sandstone",         collection:"black-white", hero:true },
  { id:"p104", title:"Canyon Sentinel, B&W",          collection:"black-white" },
  { id:"p106", title:"Hoodoo City, B&W",              collection:"black-white", hero:true },
  { id:"p107", title:"Hoodoo City II, B&W",           collection:"black-white" },
  { id:"p110", title:"Hoodoos Under Storm, B&W",      collection:"black-white", hero:true },
  { id:"p111", title:"Sentinel and Storm, B&W",       collection:"black-white", hero:true },
  { id:"p113", title:"Driftwood Guardian, B&W",       collection:"black-white" },
  { id:"p115", title:"Moonrise Hoodoos, B&W",         collection:"black-white", hero:true },
  { id:"p124", title:"Kerið Crater, B&W",             collection:"black-white", hero:true },
  { id:"p125", title:"Skógafoss, B&W",                collection:"black-white", hero:true },
  { id:"p126", title:"Skógafoss, Close B&W",          collection:"black-white" },
  { id:"p130", title:"Bryce Canyon Road, B&W",        collection:"black-white" },

  // ── LIGHT ─────────────────────────────────────────────────
  // Images where light quality / atmosphere is the primary subject
  { id:"p002", title:"Golden Hour, Beach",            collection:"light", hero:true },
  { id:"p004", title:"Angel Oak, Lowcountry",         collection:"light", hero:true },
  { id:"p007", title:"Red Maple, Autumn",             collection:"light", hero:true },
  { id:"p008", title:"Autumn Forest, Sunburst",       collection:"light", hero:true },
  { id:"p030", title:"Lone Tree on Hill",             collection:"light", hero:true },
  { id:"p069", title:"Dandelion at Dusk",             collection:"light", hero:true },
  { id:"p105", title:"Cairn Cloud, Bryce",            collection:"stone-sky" },
  { id:"p108", title:"The Last Roots, Bryce",         collection:"light", hero:true },
  { id:"p109", title:"Bryce Twilight, Purple",        collection:"light" },
  { id:"p112", title:"Utah Layers",                   collection:"stone-sky" },
  { id:"p116", title:"Dead Trees at Dusk, Crimson",   collection:"light" },
  { id:"p117", title:"The Bench at Sunrise",          collection:"stone-sky" },
  // ── NEW ENGLAND IR (Acadia) ──────────────────────────────
  { id:"ne01", title:"Porcupine Island, IR",       collection:"beyond-visible", hero:true },
  { id:"ne02", title:"Eagle Lake, Purple Sky",      collection:"beyond-visible", hero:true },
  { id:"ne03", title:"Cadillac, Fissure Rock",      collection:"beyond-visible", hero:true },
  { id:"ne04", title:"Cadillac, Ferry Wake",        collection:"beyond-visible", hero:true },
  { id:"ne05", title:"Cadillac Summit, Hikers",     collection:"beyond-visible", hero:true },
  { id:"ne06", title:"Porcupine Island, Storm",     collection:"beyond-visible", hero:true },
  { id:"ne07", title:"Eagle Lake, Broad View",      collection:"beyond-visible", hero:true },
];

const COLLECTIONS = {
  "stone-sky": {
    name: "Stone & Sky",
    desc: "Rock shaped by deep time — from the hoodoos of Bryce to the glens of Scotland and the lava fields of Iceland.",
    cover: "p093"
  },
  "beyond-visible": {
    name: "Beyond Visible",
    desc: "Infrared photography renders the familiar world in frequencies the eye cannot see.",
    cover: "ne04"
  },
  "flora": {
    name: "Flora",
    desc: "Flowers, leaves, and botanical forms — from tulip flame abstracts to lotus rising from dark water.",
    cover: "p131"
  },
  "black-white": {
    name: "Black & White",
    desc: "When color is stripped away, only light, form, and time remain.",
    cover: "p102"
  },
  "light": {
    name: "Light",
    desc: "Photographs where light itself is the subject — golden hour, fire skies, and the quality of a single afternoon.",
    cover: "p069"
  }
};

// Print sizes. Prices are placeholders until final; 11x14 is new.
// When Stripe Payment Links exist, put each URL in PAY_LINKS (key: "<size>").
const SIZES = [
  { label:'5×7',    price:35 },
  { label:'8×10',   price:65 },
  { label:'8.5×11', price:75 },
  { label:'11×14',  price:95 }
];
const PAY_LINKS = {};   // e.g. { '8×10': 'https://buy.stripe.com/...' }
const CONTACT_EMAIL = 'contact.lightheldstill@gmail.com';
const COLLECTION_ORDER = ['stone-sky','beyond-visible','flora','black-white','light'];
const SELECTED = ['p006','p080','p114','p123','p127','p100'];

function imgPath(id, size) { return `images/${size}/${id}.jpg`; }
function byCollection(key) { return CATALOG.filter(p => p.collection === key); }
function byId(id) { return CATALOG.find(p => p.id === id); }
function esc(t) { return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'); }

function photoTiles(container, items, listKey) {
  container.innerHTML = items.map(p => `
    <a class="tile" href="photo.html?id=${p.id}&c=${listKey}">
      <div class="frame"><div class="frame-in"><img src="${imgPath(p.id,'mid')}" alt="${esc(p.title)}" loading="lazy"></div></div>
      <div class="tile-cap">${esc(p.title)}</div>
    </a>`).join('');
}

function siteChrome(active) {
  const links = COLLECTION_ORDER.map(k => `<a href="collection.html?c=${k}">${esc(COLLECTIONS[k].name)}</a>`).join('');
  document.getElementById('site-header').innerHTML = `
    <a href="index.html" class="mark" aria-label="Light Held Still, home">LHS</a>
    <nav class="mono topnav">
      <a href="index.html" class="${active==='home'?'cur':''}">Home</a>
      <span class="dd">
        <a href="portfolio.html" class="${active==='portfolio'?'cur':''}" id="dd-trigger">Portfolio ▾</a>
        <span class="dd-menu">${links}<a href="collection.html?c=all">All images</a></span>
      </span>
      <a href="index.html#about" class="${active==='about'?'cur':''}">About</a>
      <a href="index.html#contact">Contact</a>
    </nav>
    <a href="index.html#selected" class="mono cta-block">Order a print</a>`;
  const fl = COLLECTION_ORDER.map(k => `<a href="collection.html?c=${k}" class="flink">${esc(COLLECTIONS[k].name)}</a>`).join('');
  document.getElementById('site-footer').innerHTML = `
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="serif foot-mark">Light Held Still</div>
        <p>Fine art photography by Ashwani Gupta. Prints made to order.</p>
      </div>
      <div><div class="mono dim">Portfolio</div>${fl}<a href="collection.html?c=all" class="flink">All images</a></div>
      <div><div class="mono dim">Info</div>
        <a href="index.html#about" class="flink">About</a>
        <a href="index.html#contact" class="flink">Contact</a>
        <a href="mailto:${CONTACT_EMAIL}" class="flink">${CONTACT_EMAIL}</a></div>
    </div>
    <div class="mono foot-base dim"><span>© 2026 Light Held Still. All images reserved.</span><span>Each print made and packed by hand</span></div>`;
  const dd = document.querySelector('.dd');
  document.getElementById('dd-trigger').addEventListener('click', e => {
    if (window.matchMedia('(hover: none)').matches && !dd.classList.contains('open')) { e.preventDefault(); dd.classList.add('open'); }
  });
  document.addEventListener('click', e => { if (!dd.contains(e.target)) dd.classList.remove('open'); });
}

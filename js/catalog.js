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
  { id:"p009", title:"Cherry Blossoms, Tidal Basin",  collection:"flora" },
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
  { id:"p029", title:"Wildflower Field",              collection:"flora" },
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
  { id:"p122", title:"Lichen Mosaic",                 collection:"flora" },

  // ── BLACK & WHITE ─────────────────────────────────────────
  // Verified B&W (avg_sat < 15) — confirmed via pixel analysis
  { id:"p003", title:"Yosemite, Storm Light",         collection:"black-white", hero:true },
  { id:"p028", title:"Seagulls over Water",           collection:"black-white" },
  { id:"p042", title:"Beech Tree Roots",              collection:"black-white", hero:true },
  { id:"p048", title:"Oxalis, Night",                 collection:"flora", hero:true },
  { id:"p052", title:"Geese Over Lincoln Memorial",   collection:"black-white", hero:true },
  { id:"p053", title:"Child and Geese, Potomac",      collection:"black-white", hero:true },
  { id:"p056", title:"Daffodil, Rain",                collection:"flora" },
  { id:"p062", title:"Dandelion at Dusk",             collection:"flora", hero:true },
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
  { id:"p130", title:"Water Lily, Night",               collection:"flora" },

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
    name: "Land & Sky",
    desc: "Canyons, mountains, water, and weather, from the hoodoos of Bryce and the walls of Zion to the glens of Scotland and the green valleys of Iceland.",
    cover: "p093",
    unit: "places",
    chapters: [
      { name:"Utah", note:"Zion and Bryce, in first and last light.", ids:["p093","p095","p114","p100","p094","p105","p112"] },
      { name:"Scotland", note:"Glencoe and the Highlands, mostly in weather.", ids:["p079","p080","p082"] },
      { name:"Iceland", note:"Waterfalls and the green valleys of the south.", ids:["p123","p127"] },
      { name:"The Alps", note:"Clearing storms over the Bavarian lakes and ridges.", ids:["p006","p005"] },
      { name:"Elsewhere", note:"Colorado aspens, a coastal rainbow, a quiet pond, and one bench at sunrise.", ids:["p051","p075","p081","p050","p117"] }
    ]
  },
  "beyond-visible": {
    name: "Beyond Visible",
    desc: "Infrared photography renders the familiar world in frequencies the eye cannot see.",
    cover: "ne04",
    chapters: [
      { name:"Acadia", note:"Mount Desert Island's coast and mountains, in infrared.", ids:["ne01","ne02","ne03","ne04","ne05","ne06","ne07"] },
      { name:"Blooms & Bees", note:"Flowers and insects, with their colors shifted out of the visible range.", ids:["p085","p086","p087","p088","p089","p090","p121"] },
      { name:"Trees", note:"Canopies and old oaks in colors the eye never sees.", ids:["p118","p119"] }
    ]
  },
  "flora": {
    name: "Flora",
    desc: "Flowers, leaves, and botanical forms — from tulip flame abstracts to lotus rising from dark water.",
    cover: "p131",
    chapters: [
      { name:"Tulips", note:"Parrot fields, flame abstracts, and rain on the buds.", ids:["p010","p044","p045","p057","p063","p064","p065","p066","p092"] },
      { name:"Lotus", note:"Lotus and water lilies, opening out of dark water.", ids:["p131","p128","p129","p132","p133","p130"] },
      { name:"Blossoms", note:"Cherry blossoms, magnolia buds, hyacinth and other single blooms up close.", ids:["p009","p013","p060","p061","p041","p043","p073","p058","p059","p096","p120"] },
      { name:"Leaves", note:"Veins, skeletons, fallen gold, and the textures between.", ids:["p031","p032","p046","p047","p054","p055","p122"] },
      { name:"Wildflowers", note:"A field, an oxalis at night, a daffodil in rain, and a dandelion at dusk.", ids:["p029","p048","p056","p062"] }
    ]
  },
  "black-white": {
    name: "Black & White",
    desc: "When color is stripped away, only light, form, and time remain.",
    cover: "p102",
    chapters: [
      { name:"Canyon Country", note:"Zion's ramparts and the hoodoos of Bryce, stripped down to light and form.", ids:["p076","p099","p101","p103","p104","p106","p107","p110","p111","p115"] },
      { name:"Iceland", note:"Skógafoss and the Kerið crater.", ids:["p125","p126","p124"] },
      { name:"Wildlife", note:"Bison, bighorns, gulls and geese.", ids:["p098","p102","p028","p052"] },
      { name:"Elsewhere", note:"Yosemite storm light, Loch Morlich, beech roots, and a few quiet frames.", ids:["p003","p084","p042","p097","p113","p091","p053"] }
    ]
  },
  "light": {
    name: "Light",
    desc: "Photographs where light itself is the subject — golden hour, fire skies, and the quality of a single afternoon.",
    cover: "p069",
    chapters: [
      { name:"Water Drops", note:"Refraction through single drops of water.", ids:["p068","p070","p071","p072"] },
      { name:"Trees & Shore", note:"A beach at golden hour, an old oak, autumn maples, and a lone tree on a hill.", ids:["p002","p004","p007","p008","p030"] },
      { name:"Dusk", note:"The last light of the day, from a dandelion to Bryce twilight.", ids:["p069","p108","p109","p116"] }
    ]
  }
};

// Print sizes. Prices are placeholders until final; 11x14 is new.
// When Stripe Payment Links exist, put each URL in PAY_LINKS (key: "<size>").
const SIZES = [
  { label:'5×7',    price:35 },
  { label:'8.5×11', price:75 },
  { label:'11×14',  price:95 }
];
const PAY_LINKS = {};   // e.g. { '8.5×11': 'https://buy.stripe.com/...' }
const CONTACT_EMAIL = 'contact.lightheldstill@gmail.com';
const COLLECTION_ORDER = ['beyond-visible','stone-sky','flora','black-white','light'];
const SELECTED = ['p079','p119','p093','p131','p102','p069'];   // hero slideshow
const COVERS = { 'beyond-visible':['p119','50% 38%'], 'stone-sky':['p093','50% 8%'], 'flora':['p131','50% 45%'], 'black-white':['p102','50% 50%'], 'light':['p069','50% 50%'] };
const MARK = '<svg class="logo" viewBox="0 0 40 40" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12V3h9M28 3h9v9M37 28v9h-9M12 37H3v-9"/></g><circle cx="20" cy="20" r="4.2" fill="#d9b25a"/></svg>';

function imgPath(id, size) { return `images/${size}/${id}.jpg`; }
function chapterOrder(key){ const c=COLLECTIONS[key]; if(!c||!c.chapters) return null;
  const o=[]; c.chapters.forEach(h=>{ h.ids.forEach(i=>o.push(i)); }); return o; }
function byCollection(key) {
  const items = CATALOG.filter(p => p.collection === key), o = chapterOrder(key);
  return o ? items.slice().sort((a,b)=>o.indexOf(a.id)-o.indexOf(b.id)) : items;
}
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
    <div class="rib">
      <nav class="rl mono">
        <span class="dd"><a href="portfolio.html" class="${active==='portfolio'?'cur':''}" id="dd-trigger">Portfolio ▾</a>
          <span class="dd-menu">${links}<a href="collection.html?c=all">All images</a></span></span>
        <a href="index.html#about">About</a>
      </nav>
      <a href="index.html" class="brand" aria-label="Light Held Still, home">${MARK}<span class="wm">Light Held Still</span></a>
      <nav class="rr mono">
        <a href="index.html#contact">Contact</a>
        <a href="portfolio.html" class="pill">Order a print</a>
      </nav>
    </div>`;
  const fl = COLLECTION_ORDER.map(k => `<a href="collection.html?c=${k}" class="flink">${esc(COLLECTIONS[k].name)}</a>`).join('');
  document.getElementById('site-footer').innerHTML = `
    <div class="foot-grid" id="contact">
      <div class="foot-brand">
        <div class="brand">${MARK}<span class="wm">Light Held Still</span></div>
        <p>Fine art photography by Ashwani Gupta. Prints made to order.</p>
      </div>
      <div><div class="mono dim">Portfolio</div>${fl}<a href="collection.html?c=all" class="flink">All images</a></div>
      <div><div class="mono dim">Info</div>
        <a href="index.html#about" class="flink">About</a>
        <a href="mailto:${CONTACT_EMAIL}" class="flink">${CONTACT_EMAIL}</a></div>
    </div>
    <div class="mono foot-base dim"><span>© 2026 Light Held Still. All images reserved.</span><span>Each print made and packed by hand</span></div>`;
  const dd = document.querySelector('.dd');
  document.getElementById('dd-trigger').addEventListener('click', e => {
    if (window.matchMedia('(hover: none)').matches && !dd.classList.contains('open')) { e.preventDefault(); dd.classList.add('open'); }
  });
  document.addEventListener('click', e => { if (!dd.contains(e.target)) dd.classList.remove('open'); });
}

function bandHTML(k) {
  const c = COLLECTIONS[k], n = byCollection(k).length, [id,pos] = COVERS[k];
  return `<a class="band" href="collection.html?c=${k}">
    <img src="${imgPath(id,'full')}" alt="${esc(c.name)}" style="object-position:${pos}" loading="lazy">
    <div class="band-t"><span class="band-n">${esc(c.name)}</span>
      <span class="band-m"><span class="mono">${n} photographs</span><span class="band-d">${esc(c.desc)}</span></span></div></a>`;
}

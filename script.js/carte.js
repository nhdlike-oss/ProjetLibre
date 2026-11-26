// Créer la carte
const map = L.map('map').setView([48.4280, -71.0686], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

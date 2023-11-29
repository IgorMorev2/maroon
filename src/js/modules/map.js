async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
  const center = [30.323036499999905, 59.93863106417265];

  const map = new YMap(
    document.querySelector('.contacts__map'),
    {
      location: {
        center: center,
        zoom: 17
      }
    }
  );

  // Добавьте слой с дорогами и зданиями
  map.addChild(new YMapDefaultSchemeLayer());

  // Добавьте слой для маркеров
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerContent = document.createElement('div');
  markerContent.className = 'contacts__marker-map';
  markerContent.innerHTML = '<svg class="icon"><use href="./img/icons/icons.svg#marker-map"></use></svg>';

  markerContent.style.height = '22px';
  markerContent.style.width = '16px';

  const marker = new YMapMarker({
    coordinates: center,
  }, markerContent);

  map.addChild(marker);
}

initMap();


$(document).ready(function () {
  setTimeout(function () {
    balanceText($("h1, .lede, h2, .byline .author, h3"), {
      watch: true,
    });
    truncateEmbeds();
  }, 500);
});

function truncateEmbeds() {
  var buttonHTML =
    '<div class="embed-expand"><div class="button-wrap"><a>Expand ▾</a></div></div>';
  $(".embed.truncate")
    .not(".open")
    .not(".truncated")
    .each(function () {
      if ($(this).height() > 600) {
        $(this).addClass("truncated").after(buttonHTML);
      }
    });
  $(".embed-expand")
    .not(".open")
    .not(".truncated")
    .find(".button-wrap a")
    .bind("click", function () {
      $(this).closest(".embed-expand").prev().removeClass("truncated");
      $(this).closest(".embed-expand").addClass("open");
      $(this).html("Collapse ▴");
      $(this).remove();
      $(this).bind("click", function () {
        $(this).closest(".embed-expand").prev().addClass("truncated");
        $(this).closest(".embed-expand").removeClass("open");
        $(this).remove();
      });
    });
}

$(window).on("resize", function () {
  truncateEmbeds();
});

// map scripts for proof of concept article.html

// demo of how to control map via buttons
document
  .getElementById("flyToMdi")
  .addEventListener("click", function () {
    map1.flyTo({
      center: [-68.3, 44.33],
      essential: true,
      zoom: 10,
      padding: 0,
      bearing: 0,
      pitch: 0,
    });
  });
document
  .getElementById("flyToPortland")
  .addEventListener("click", function () {
    map1.flyTo({
      center: [-70.24, 43.66],
      essential: true,
      zoom: 12,
      padding: 0,
      bearing: 0,
      pitch: 0,
    });
  });
document
  .getElementById("showCentralCoast")
  .addEventListener("click", function () {
    map1.flyTo({
      center: [-68.8, 44.19],
      essential: true,
      zoom: 9,
      padding: 0,
      bearing: 0,
      pitch: 0,
    });
  });
document
  .getElementById("showRegion")
  .addEventListener("click", function () {
    map1.flyTo({
      center: [-68.4, 44.3],
      zoom: 7,
      essential: true,
      padding: 0,
      bearing: 0,
      pitch: 0,
    });
  });
document
  .getElementById("flyToBarHarbor")
  .addEventListener("click", function () {
    map1.flyTo({
      center: [-68.204368, 44.39151192],
      zoom: 15,
      essential: true,
      padding: 0,
      bearing: 165.6646305959633,
      pitch: 82.5,
    });
  });

function removeTerrain() {
  map1.removeLayer("sky");
  map1.removeSource("mapbox-dem");
}
function addTerrain() {
  map1.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 14,
  });
  map1.setTerrain({
    source: "mapbox-dem",
  });
  map1.addLayer({
    id: "sky",
    type: "sky",
    paint: {
      "sky-type": "atmosphere",
      "sky-atmosphere-sun": [0.0, 0.0],
      "sky-atmosphere-sun-intensity": 15,
    },
  });
}
// mapbox://styles/mapbox/satellite-streets-v11

// demo of how to control map via scrolling
// modeled after https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/

var chapters = {
  start: {
    // MDI
    center: [-68.25, 44.33],
    zoom: 12,
  },
  cliffisland: {
    center: [-70.10521975867064, 43.69666739755767],
    zoom: 14,
  },
  swansisland: {
    center: [-68.44515395578972, 44.15979965837894],
    zoom: 11,
  },
  roquebluffs: {
    center: [-67.49064696087, 44.60880820932156],
    zoom: 12,
  },
};

window.onscroll = function () {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = "baker";
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  $("#" + chapterName).addClass("active");
  $("#" + activeChapterName).removeClass("active");

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

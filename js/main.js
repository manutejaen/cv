var mymap = L.map("mapid").setView([40.4167, -3.70325], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWFudXRlamFlbiIsImEiOiJja20zcTM5cnEyZmIzMnByemZ3ODZyY25hIn0.q7c42yFGKEUon3fvowF12w",
  }
).addTo(mymap);


function panTo(lat, lon, zoom=18, map=mymap) {
  map.setView([lat, lon], zoom);
  return mymap
} 

window.addEventListener("load", function (event) {
  window.addEventListener("scroll", function (event) {
    var windowBottom = window.scrollY + window.innerHeight - 300;
    document.getElementsByClassName("animate").forEach(function (element) {
      /* Comprobamos la posición de cada elemento */
      var objectBottom = element.offsetTop + element.style.height;
      /* Si el elemento se encuentra en los bordes de la ventana lo mostramos*/
      if (objectBottom < windowBottom) {
        // mostramos objeto (scrolling down)
        if (
          !element.classList.contains("animate-bottom") ||
          element.style.opacity === 0
        ) {
          element.classList.add("animate-bottom");
          element.style.opacity = 1;
        }
      }
    });
  });
});

// Youtube Iframe
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "fSpdO-VF3gM",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {}

function stopVideo() {
  player.stopVideo();
}

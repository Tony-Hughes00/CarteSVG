function onLoad(data) {
  console.log("onLoad", data);
  for(var key in data['communePoly']) {

    var zone = document.getElementById(key);
    if(zone) { 
        zone.addEventListener('mouseover', (thisZone) => {
            createName('mouseover', thisZone);
        });
        zone.addEventListener('mousemove', (thisZone) => {
          createName('mousemove', thisZone);
      });
        zone.addEventListener('mouseout', (thisZone) => {
            zone.style.fill = '#7aaaaa';
            createName('mouseout', thisZone);
        });
        zone.addEventListener('click', (event) => {
            for(var key in data['communePoly']) {
                var zoneOther = document.getElementById(key);
                zoneOther.style.fill = '#7aaaaa';
            }
            // zone.style.fill = '#d4ffa8';
            populateBlock(data,'#d4ffa8' );
            event.stopPropagation();
        });
        zone.addEventListener('touchstart', (thisZone) => {
            console.log("touchstart", thisZone);
            for(var key in data['communePoly']) {
                var zoneOther = document.getElementById(key);
                zoneOther.style.fill = '#7aaaaa';
            }
            // zone.style.fill = '#d4ffa8';
            console.log("touchstart");
            createName('mouseover', thisZone);
            populateBlock();

        });
    }
  }
}
document.onmousemove = handleMouseMove();
function handleMouseMove(event) {
    // si event = null remplace le avec evenement windows
    event = event || window.event;
    return event;
}
function createName(eventName, mouseEvent) {

  var nom = document.getElementById("nom");             // get nom div

  /*‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/   
  nom.style.position = "absolute";    // nom pos est relative à row en index.php                                 |
                                      //<div class="row" style="position: relative;">                            |
                                      //<div class="col-md-7 ml-4 text-center justify-content-center"></div>     |
                                      /*________________________________________________________________________*/

  var mouse = handleMouseMove();      // valider evenement
  
  // "fudge" for firefox
  if (mouse.layerX > 0) {
      nom.style.left = (mouse.layerX - 10) + 'px';
      nom.style.top =  (mouse.layerY - 30) + 'px';
  }
  // fin de "fudge" for firefox

  if (eventName == 'mouseover' || 'mousemove' ) {                // si mouseover affice nom de commune
      var nomHTML = mouseEvent.target.getAttribute("name");
      // console.log("createName", nom.innerHTML, nomHTML); 
      nom.innerHTML =  nomHTML;
      nom.style.visibility = "visible"
      // console.log("createName", nom.innerHTML, nomHTML); 

  } else {                                        // si pas mouseover cache nom de commune (et donc div nom)
      nom.innerHTML = "";
  }
  // console.log("createName", nom);

  if(mouseEvent.type == "touchstart") {
      nom.innerHTML = nomHTML;
      nom.style.visibility = "hidden"
  }else{
      nom.style.visibility = "visible"
  }
  mouseEvent.stopPropagation();                   // on est finit avec evenement - ne le passe au parent/enfants
}
function populateBlock(data, color) {
  console.log("populate block", color);

  var mouse = handleMouseMove();   
  event.target.style.fill = color; 
}
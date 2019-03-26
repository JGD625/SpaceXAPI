'use strict';
 
const searchURL = 'https://api.spacexdata.com/v3/';


function dropDownMenu() {
  document.getElementById("js-dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function displayRockets(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  $( "#no-result-message" ).empty();
  $("#dropHTML").empty();
  document.getElementById("dropHTML").innerHTML =
      `<div class="rocket-container"><h3><a href='https://en.wikipedia.org/wiki/Falcon_9'>FALCON 9</a></h3>
      <div class="left"><img src="images/falcon9-render1.png" alt="falcon 9" class="resize-image"></div>
      <div class="procket"><p>  Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. </p><p>  Falcon 9 is the first orbital class rocket capable of reflight. Falcon 9, along with the Dragon spacecraft, was designed from the outset to deliver humans into space and under an agreement with NASA, SpaceX is actively working toward this goal.</p></div>
      </div>
      <div class="rocket-container">
      <H3><a href='https://en.wikipedia.org/wiki/Falcon_Heavy'>FALCON HEAVY</a></H3>
      <div class="left"><img src="images/falcon-heavy1.png" alt="falcon-heavy" class="resize-image"></div>
      <div class="procket"><p>  Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons. </p><p>  Its first stage is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. Only the Saturn V moon rocket, last flown in 1973, delivered more payload to orbit. </p></div>
      </div>`
}



function displayCapsules(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  $( "#no-result-message" ).empty();
  $("#dropHTML").empty();
  document.getElementById("dropHTML").innerHTML = `<h3><a href='https://en.wikipedia.org/wiki/SpaceX_Dragon'>DRAGON</a></h3>
  <img src="images/capsule1.png" alt="dragon capsule">    
  <p>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. The pressurized section of the capsule is designed to carry both people and environmentally sensitive cargo. Towards the base of the capsule and contained within the nose cone are the Draco thrusters, which allow for orbital maneuvering.</p><p>The Dragon spacecraft successfully docked with the space station ahead of schedule at 6:02 a.m. ET on March 3, 2019, becoming the first American spacecraft in history to autonomously dock with the International Space Station.</p>`;
}

/*

function getCapsules() {
  const capsulesUrl = 'https://api.spacexdata.com/v3/capsules/' ;
  console.log(capsulesUrl);

  fetch(capsulesUrl)
    .then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      console.log(responseJson);
      displayCapsules(responseJson);
      
    });
}

*/
function displayDroneShips(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  $( "#no-result-message" ).empty();
  $("#dropHTML").empty();
  document.getElementById("dropHTML").innerHTML = `<h3><a href='https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship'>ASDS:Autonomous Spaceport Drone Ships</a></h3>
     <img src="images/ofcourse.png" alt="of course i still love you badge" class="resize-image">
  <p>ASDS, or Autonomous Spaceport Drone Ships, are unique vessels that SpaceX uses to collect reusable rockets.
     <p>Of Course I Still Love You operates in the Atlantic for launches form Cape Canaveral.</p>
      <p>Just Read the Instructions operates in the Pacific for launches from Vandenberg in California.</p>
      <p>A third ship, A Shortfall of Gravitas, is currently under construction. </p>`;
}
/*

function getDrones() {
  const dronesUrl = 'https://api.spacexdata.com/v3/ships/' ;
  console.log(dronesUrl);

  fetch(dronesUrl)
    .then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      console.log(responseJson);
      displayDroneShips(responseJson);
      
    });
}

*/



function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  $("#dropHTML").empty();
  for (let i = 0; i < responseJson.length; i++){
    if (responseJson[i].launch_year === $('#js-search-term').val()){
    $('#results-list').append(
      `<div class="card-container">
        <div class="column">
          <div class="card" onclick="openTab('b1');">
            <li><h3>${responseJson[i].mission_name}</h3>
            <p>Rocket: ${responseJson[i].rocket.rocket_name}</p>
            <p>${responseJson[i].launch_year}</p>
            <img alt="mission patches" class="patch-resize" src='${responseJson[i].links.mission_patch_small}'>
            </li>
          </div>
        </div>
       </div>
      <div id="b1" class="containerTab" style="display:none">
        <span onclick="this.parentElement.style.display='none'" class="closebtn">x</span>
        <h2>Mission Name: <a href='${responseJson[i].links.article_link}'>${responseJson[i].mission_name}</a></h2>
        <p>Launch Site: ${responseJson[i].launch_site.site_name_long}</p>
        <p>Mission Details: ${responseJson[i].details}</p>
        </div>`
    )};
  };
  $('#results').removeClass('hidden');
  $('#submit-button').click(function() {
    $('#no-result-message').empty();
    
});
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}






function getLaunches(query) {
  const params = {
    q: query,
  };
  const searchTerm = $('#js-search-term').val();
  const url = searchURL + 'launches/?launch_year=' + query + "&" ;
  console.log(url);

  fetch(url)
    .then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      if(responseJson.launch_year != $('#js-search-term').val()) {

      if(responseJson.length === 0){
     $('#no-result-message').text(`Sorry! Looks like there weren't any launches found that year`);
      } else { $('#no-result-message').text(``);
      }
      };
      console.log(responseJson);
      displayResults(responseJson);
      
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    getLaunches(searchTerm);
  });
}

$(watchForm);
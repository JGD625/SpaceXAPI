'use strict';
 
const searchURL = 'https://api.spacexdata.com/v3/';





//Gallery of Flickr Images

function displayGallery(responseJson){

  console.log(responseJson);
  document.getElementById("js-form").reset();
  $('#results-list').empty();
  $("#dropHTML").empty();

  for (let i = 0; i < responseJson.length; i++){

  if(responseJson[i].links.flickr_images[1] != null){
    
      var outDisplay = 
        ` <a href="https://www.flickr.com/photos/spacex/" target="blank">
            <img id="flickrimg" 
            alt="mission images" class="gallery-resize" src='${responseJson[i].links.flickr_images[Math.floor(Math.random()*responseJson[i].links.flickr_images.length)]}'>
           </a>`
  } if ( i == 24 ) {break;}
        $('#results-list').append(outDisplay);
  };
  
  $('#results').removeClass('hidden');
  $('#submit-button').click(function() {
    $('#no-result-message').empty();
});
}


//TIMELINE

function displayTimeline(responseJson) {
  console.log(responseJson);
  document.getElementById("js-form").reset();
  $('#results-list').empty();
  $( "#no-result-message" ).empty();
  $("#dropHTML").empty();
  document.getElementById("dropHTML").innerHTML = 
  `<div class="timeline" id="timeline-container">
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2002</h2>
      <p>Elon Musk launches SpaceX, with original base established in El Segundo, California.</p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2006</h2>
      <p>Falcon 1 demo flight 1 is launched from Kwajalein site in Omelek Island.</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2007</h2>
      <p>Falcon 1 demo flight 2 is launched from Kwajalein site in Omelek Island.</p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2008</h2>
      <p>August: Falcon 1 is launched from Omelek Island as mission for the United States Government, ATSB and NASA. It is SpaceX's first launch mission for customers.</p><p>September: SpaceX achieves the first privately funded liquid-fueled rocket to reach orbit</p><p>December: NASA awards SpaceX Commercial Resupply Services (CRS) contract for US$1.6 billion</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2009</h2>
      <p>Falcon 1 Flight 5 becomes the first privately developed liquid fuel rocket to deliver a commercial satellite to Earth orbit. The rocket launches with RazakSat for Malaysia’s Astronautic Technology Sdn Bhd (ATSB).</p>
    </div>
  </div>
   <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2010</h2>
      <p>June: Falcon 9 innaugural test flight from Cape Canaveral. The rocket meets 100% of mission objectives on the first flight. The company makes its inaugural test flight from Cape Canaveral, Florida.</p><p>December: Falcon 9 Flight 2. SpaceX tests its Falcon 9 and a fully functioning Dragon capsule combination in a launch from Cape Canaveral. SpaceX becomes the first privately funded company to successfully launch, orbit, and recover a spacecraft</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2012</h2>
      <p>Dragon reaches the International Space Station. SpaceX becomes the first private company to send a spacecraft to the ISS.</p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2013</h2>
      <p>March: SpaceX completes the first 24-storey test flight of a newly developed rocket, the Grasshopper. Meant to be a prototype for a reusable rocket into space, it safely returns to Earth, landing upright</p><p>September: SpaceX successfully launches debut Falcon 9 v1.1</p><p>December: NASA selects SpaceX to lease a historic launch pad for the company's commercial rockets. The agreement would allow the spaceflight company to lease the historic Pad 39A at Kennedy Space Center.</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2014</h2>
      <p>April: Falcon 9 first stage lands on barge in ocean, but is destroyed by heavy seas.</p><p>September: NASA awards SpaceX a US$2.6 billion contract to fly American astronauts, and announces that SpaceX will be developing spacecraft to send astronauts to the International Space Station. </p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2015</h2>
      <p>January: SpaceX begins a series of first stage landing attempts of its Falcon 9 rocket on an autonomous spaceport drone ship. The rocket crashes and burns.</p><p>December: SpaceX achieves the first landing of an orbital rocket's first stage on land</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2016</h2>
      <p>April: SpaceX achieves the first landing of an orbital rocket's first stage on an ocean platform.</p><p>August: SpaceX Falcon 9 successfully launches JCSAT-16 commercial telecommunications satellite into geostationary transfer orbit, before landing on a drone ship in the Atlantic Ocean.</p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div class="c-content">
      <h2>2017</h2>
      <p>March: SpaceX reuses a rocket for the first time ever.In the same month SpaceX achieves the first controlled flyback and recovery of a payload fairing. </p><p>June: SpaceX launches the first reflight of a commercial cargo spacecraft. </p><p>September: New rocket booster, the BFR rocket is announced, along with updated plans for Mars colonization</p><p>November: SpaceX plans launch of the most powerful rocket since the Saturn V last left for the moon in 1973.</p>
    </div>
  </div>
  <div class="TLcontainer c-right">
    <div class="c-content">
      <h2>2018</h2>
      <p>January: SpaceX launched classified Zuma spacecraft for the United States government.</p><p>February: SpaceX successfully conducts a test launch of its Falcon Heavy rocket carrying aboard a Tesla Roadster and “Starman”, a dummy in a SpaceX spacesuit.</p>
    </div>
  </div>
  <div class="TLcontainer c-left">
    <div >
  <img src="images/spacecowboy.png" alt="starman" class="starman"><span class="white">See you, Space Cowboy...</span></div>
</div>
</div>
`;
$('#timeline-container').scroll();
$("#timeline-container").animate({
  scrollTop: 1000
}, 2000);

}




//DROP DOWN MENU RESULTS

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
  document.getElementById("js-form").reset();
  $('#results-list').empty();
  $( "#no-result-message" ).empty();
  $("#dropHTML").empty();
  document.getElementById("dropHTML").innerHTML =
      `<section class="vehicles">
      <div class="rocket-container">
        <div class="procket p-container">
        <img src="images/2000px-Falcon9_rocket_family.svg.png" class="resize-imageB center">
        <h2><a class="black" href='https://en.wikipedia.org/wiki/Falcon_9'>FALCON 9</a></h2>
        <p>  Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. </p><p>  Falcon 9 is the first orbital class rocket capable of reflight. Falcon 9, along with the Dragon spacecraft, was designed from the outset to deliver humans into space and under an agreement with NASA, SpaceX is actively working toward this goal.</p>
        <h2><a class="black" href='https://en.wikipedia.org/wiki/Falcon_Heavy'>FALCON HEAVY</a></h2>
        <p>  Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons. </p><p>  Its first stage is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. Only the Saturn V moon rocket, last flown in 1973, delivered more payload to orbit. </p>
        </div>
      </div>
      <div id="capsule-container" class="rocket-container">
        <div class="procket p-container">
        <img src="images/Crew_Dragon_Drawing.png" class="resize-imageB center">
        <h2><a class="black" href='https://en.wikipedia.org/wiki/SpaceX_Dragon'>DRAGON</a></h2>  
        <p>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. The pressurized section of the capsule is designed to carry both people and environmentally sensitive cargo. Towards the base of the capsule and contained within the nose cone are the Draco thrusters, which allow for orbital maneuvering.</p><p>The Dragon spacecraft successfully docked with the space station ahead of schedule at 6:02 a.m. ET on March 3, 2019, becoming the first American spacecraft in history to autonomously dock with the International Space Station.</p>
        </div>
      </div>
      <div id="ASDS-container" class="rocket-container">
        <div class="procket p-container">
        <img src="images/ofcourse.png" alt="of course i still love you badge" class="resize-imageB center">
        <h2><a class="black" href='https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship'>ASDS:Autonomous Spaceport Drone Ships</a></h2>
        <p>ASDS, or Autonomous Spaceport Drone Ships, are unique vessels that SpaceX uses to collect reusable rockets.
        <p>Of Course I Still Love You operates in the Atlantic for launches form Cape Canaveral.</p>
        <p>Just Read the Instructions operates in the Pacific for launches from Vandenberg in California.</p>
        <p>A third ship, A Shortfall of Gravitas, is currently under construction. </p>
        </div>
      </div>
      </section>`;
}




//RESULTS OF LAUNCH SEARCH

function displayResults(responseJson) {

  console.log(responseJson);
  $('#results-list').empty();
  $("#dropHTML").empty();

  for (let i = 0; i < responseJson.length; i++){
    if (responseJson[i].launch_year === $('#js-search-term').val()){

    document.getElementById("dropHTML").innerHTML = `<h2 class="center">${responseJson[i].launch_year}</h2>`;


    

var outDisplay = `<div class="card-container">
         <div class="column">
          <div class="card">
            <li><h3>${responseJson[i].mission_name}</h3>
            <p>Rocket: ${responseJson[i].rocket.rocket_name}</p>
            <p>Flight: ${responseJson[i].flight_number}</p>`;

  if(responseJson[i].links.mission_patch_small != null){

            outDisplay = outDisplay + `<img id="mission-patch-img" alt="mission patcheses" class="patch-resize" src='${responseJson[i].links.mission_patch_small}'>`
  }else{

            outDisplay = outDisplay + `<img id="mission-patch-img" alt="mission patcheses" class="patch-resize" src='images/GYATM.png'>`

  }


    outDisplay = outDisplay + `
            </li>
           </div> 
        </div>`;

        $('#results-list').append(outDisplay);

  };
  }
  $('#results').removeClass('hidden');
  $('#submit-button').click(function() {
    $('#no-result-message').empty();
});
}





//GET DATA FROM API


function getLaunches(query) {
  const params = {
    q: query,
  };
  const searchTerm = $('#js-search-term').val();
  const url = searchURL + 'launches/?launch_year=' + query + "&" ;
  console.log(url);
  if ($('#js-search-term').val() == "") {
    
    swal("You must select a year to search.");
    return false;
  
  } else {

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
     $('#no-result-message').text(`Sorry! Looks like there weren't any launches found that year.`);
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
}

function getPhotos(query) {
  const params = {
    q: query,
  };
  const searchTerm = $('#js-search-term').val();
  const photosUrl = searchURL + 'launches/';
  console.log(photosUrl);

  fetch(photosUrl)
    .then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      if(responseJson.launch_year != $('#js-search-term').val()) {

      if(responseJson.length === 0){
     $('#no-result-message').text(`Sorry! Looks like there weren't any launches found that year.`);
      } else { $('#no-result-message').text(``);
      }
      };
      console.log(responseJson);
      displayGallery(responseJson);
      
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
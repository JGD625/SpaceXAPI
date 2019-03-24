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



function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  
  for (let i = 0; i < responseJson.length; i++){
    if (responseJson[i].launch_year === $('#js-search-term').val()){
    $('#results-list').append(
      `<li><h3><a href='${responseJson[i].links.article_link}'>${responseJson[i].mission_name}</a></h3>
      <p>Rocket: ${responseJson[i].rocket.rocket_name}</p>
      <p>${responseJson[i].launch_year}</p>
      <p>${responseJson[i].details}</p>
      <img src='${responseJson[i].links.mission_patch_small}'>
      </li>`
    )};
  };
  
  $('#results').removeClass('hidden');
  $( "#submit-button" ).click(function() {
  $( "#no-result-message" ).empty();
});
}






function getLaunches(query) {
  const params = {
    q: query,
  };
  const searchTerm = $('#js-search-term').val();
  const url = searchURL + 'launches/' ;
  console.log(url);

  fetch(url)
    .then(response => {
       if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
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

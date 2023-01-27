// JS functions
$(document).ready(function () {
    $(".categ-name").mouseenter(function () {
        $(this).find("h4 i").addClass("fa-sort-up");
        $(this).find('.sub-categ').slideDown(500);

    });
    $(".categ-name").mouseleave(function () {
        $(this).find("h4 i").removeClass("fa-sort-up");
        $(this).find('.sub-categ').slideUp(500);
    });


});
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX9wMF5t0H-T_6y1_LRYe3OqDQOggw7ro",
    authDomain: "gomycodefirebase.firebaseapp.com",
    databaseURL: "https://gomycodefirebase.firebaseio.com",
    projectId: "gomycodefirebase",
    storageBucket: "gomycodefirebase.appspot.com",
    messagingSenderId: "670386039764",
    appId: "1:670386039764:web:8f48ebba79083758b44441",
    measurementId: "G-SF4MN2S4H4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference recipes collection
var recipesRef = firebase.database().ref('recipes');


function getJson() {
    recipesRef.on('value', gotData, errData);
}

function gotData(data) {
    var recipes = data.val();
    var keys = Object.keys(recipes);
    for (var i = 0; i <= keys.length; i++) {
        var k = keys[i];
        var initials = recipes[k].initials;
        var recName = recipes[k].recName;
        var recDesc = recipes[k].recDesc;
        var recPrepTime = recipes[k].recPrepTime;
        var today = recipes[k].today;


        /*  d = new Date();
          var day = d.getDate();
          var month = d.getMonth() + 1;
          var year = d.getFullYear();
          var today = "Date :" + day + '/' + month + '/' + year;*/

        var e = document.createElement("div");
        e.innerHTML =
            '<div class="search-card row">' +
            '<div class="col-lg-auto rec-photo col-12">' +
            '<h3 class="rec-title">' + recName + '</h3>' +
            '<p class="rec-desc"> Sujet :' + recPrepTime + '</p>' +
            '<p class="rec-infos">Message :' + recDesc + '  </p>' +
            '<p class="rec-desc">' + today + '</p>' +
            '</div >' +
            '</div >';


        document.getElementById("search-results").appendChild(e);
    }
}

function errData(err) {
    console.log(err);
}

getJson();
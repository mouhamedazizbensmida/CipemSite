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

// Get a reference to the database service
var database = firebase.database();
var i = 1;
//Listening on the form
document.getElementById('new-recipe-form').addEventListener('submit', sendRecipe);

function sendRecipe(e) {
    e.preventDefault();
    var recName = document.getElementById('user-name').value;
    var recDesc = document.getElementById('user-desc').value;
    var recPrepTime = document.getElementById('user-adresse').value;

    d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var today = "Date :" + day + '/' + month + '/' + year;


    document.getElementById('new-recipe-form').reset();
    writeRecipesToFB(recName, recDesc, recPrepTime, today);
    window.alert('Merci!');

}
var recipeRef = database.ref('recipes/');

function writeRecipesToFB(recName, recDesc, recPrepTime, today) {
    // Generate a reference to a new location and add some data using push()

    var newRecipeRef = recipeRef.push();
    newRecipeRef.set({
        recName: recName,
        recDesc: recDesc,
        recPrepTime: recPrepTime,
        today: today

    });
    console.log(newRecipeRef.key);
}
var moods = ["Happy", "Annoyed", "Mad", "Biting"];

var cat1 = {
  name: "Mr. Snibbly",
  imageUrl:
    "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
  numberOfPets: 0,
  mood: moods[2]
};

var cat2 = {
  name: "Grumpy cat",
  imageUrl:
    "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg",
  numberOfPets: 0,
  mood: moods[2]
};
var cat3 = {
  name: "Smalls",
  imageUrl:
    "https://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
  numberOfPets: 0,
  mood: moods[2]
};

//only function that is capital starting.
function Cat(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.numberOfPets = 0;
  this.mood = moods[0];
}

var cats = [];
cats.push(cat1);
cats.push(cat2);
cats.push(cat3);

function petCat(index) {
  var cat = cats[index];
  cat.numberOfPets++;

  update(cat, index);
}

function setup() {
  var catsElem = document.getElementById("cats");
  var template = "";

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    template += `
              <div class="col-4">
                  <h1>${cat.name}</h1>
                  <h3 id="status">Mood: <span id="result">---</span></h3>
                  <img src="${cat.imageUrl}">
                  <h3>Number of Pets:</h3>
                  <p id="${i + "pets"}">${cat.numberOfPets}</p>
                  <button class="btn btn-primary" onclick="petCat(${i})">Pet</button>
                  <button class="btn btn-success" onclick="giveTreat(${i})">Give Treat</button>
                  
              </div>
                  
          `;
  }

  catsElem.innerHTML = template;
}

function giveTreat(index) {
  var cat = cats[index];
  cat.numberOfPets -= 10;
  update(cat, index);
}

function update(cat, index) {
  document.getElementById(`${index + "pets"}`).innerText = cat.numberOfPets;

  // var mood = ""
  // if(cat.numberOfPets < 10){
  //   mood = cat.status[0]

  // }
}

// function status() {
//   var mood = petCat;
//   count;

//   if (mood >= 5) {
//     document.getElementById("result").innerText = cat.status[1];
//   }
// }

setup();

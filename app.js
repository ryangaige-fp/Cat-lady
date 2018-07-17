var cat1 = {
  name: "Mr. Snibbly",
  imageUrl:
    "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
  numberOfPets: 0
};

var cat2 = {
  name: "Grumpy cat",
  imageUrl:
    "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg",
  numberOfPets: 11000
};

var cats = [];
cats.push(cat1);
cats.push(cat2);

function petCat(index) {
  var cat = cats[index];
  cat.numberOfPets++;

  update(index);
}

function setup() {
  var catsElem = document.getElementById("cats");
  var template = "";

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    template += `
              <div class="col-4">
                  <h1>${cat.name}</h1>
                  <img src="${cat.imageUrl}">
                  <h3>Number of Pets:</h3>
                  <p id="${i + "pets"}">${cat.numberOfPets}</p>
                  <button class="btn btn-primary" onclick="petCat(${i})">Pet</button>
              </div>
                  
          `;
  }

  catsElem.innerHTML = template;
}

function update(index) {
  document.getElementById(`${index + "pets"}`).innerText =
    cat[index].numberOfPets;
}

setup();

{
  /* <div class="col-4">
    <h1>Mr. Snibbly</h1>
    <img src="https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg" alt="">
        <h3>Number of Pets:</h3>
        <p id="pets">0</p>
        <button class="btn btn-primary" onclick="petCat()">Pet</button>

            </div> */
}

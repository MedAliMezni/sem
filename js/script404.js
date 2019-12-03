// Author: Ali Soueidan
// Author URI: https//: www.alisoueidan.com



setStargazer = {
  // Set quantity of genereted Elements
  quantity: 500,
  // Set id orclass of parent element which shell contain the generated Elemenets
  selectContainer: "#container",
  // Set the Tag name of the generated item (Div, Span, p, etc.)
  generateItemTag: "span",
  // Set classname which will title the generated Elements (also id -> classname-i will be generated)
  generateItemClass: "star",
  // Morphclass will be the classname of morphed Elements to set morph state of generated elements
  setMorphClass: "blink",
  // Morphspeed will set how fast the Morph will be executed in milliseconds
  setMorphSpeed: 1000,
  // Morphquantity will set how many Elements will morph in a MorpSpeed execution
  setMorphQuantity: 160,
  // Morphquantity will set how many Elements will morph in a MorpSpeed execution
  devMode: "on" };




document.addEventListener("DOMContentLoaded", function () {

  //////
  // Fallback

  if (setStargazer["devMode"] != "off") {

    console.log("😱 Devmode is activated, turn devMode off by editing the steStargazer object -> steStargazer{ devMode: \"off\" }");

    // Fallbackobject
    fallbackObject = {
      // Set quantity of genereted Elements
      quantity: "NUMBER",
      // Set id or class of parent element which shell contain the generated Elemenets
      selectContainer: "STRING",
      // Set the Tag name of the generated item (Div, Span, p, etc.)
      generateItemTag: "STRING",
      // Set classname which will title the generated Elements (also id -> classname-i will be generated)
      generateItemClass: "STRING",
      // Morphclass will be the classname of morphed Elements to set morph state of generated elements
      setMorphClass: "STRING",
      // Morphspeed will set how fast the Morph will be executed in milliseconds
      setMorphSpeed: "NUMBER",
      // Morphquantity will set how many Elements will morph in a MorpSpeed execution
      setMorphQuantity: "NUMBER" };


    // Check if setStargazer object is defined
    if (typeof setStargazer == "undefined") {
      setStargazer = {};
      console.log("💩 setStargazer | isn't defined! You have to set up the object -> steStargazer{}");
    } else {
      console.log("✔️ setStargazerObject | is defined.");
    }

    // Fallback-loop checking for error potentials
    for (let fallbackProperty in fallbackObject) {

      if (setStargazer[fallbackProperty] == null) {

        console.log("💩 " + fallbackProperty + "isn't setted up. steStargazer object -> " +
        fallbackObject[fallbackProperty]);

      } else {
        console.log("✔️ " + fallbackProperty + " | is defined.");
      };

    };

  };

  //////
  // Execution

  // Select star-divs
  const CONTAINER = document.querySelector(setStargazer["selectContainer"]);

  // Set while loop for generating stars
  let quantityCounter = 0;
  while (setStargazer["quantity"] >= quantityCounter) {
    CONTAINER.insertAdjacentHTML('afterbegin', '<div class="' + setStargazer["generateItemClass"] + '" id="' + setStargazer["generateItemClass"] + '-' + quantityCounter + '"></div>');
    ++quantityCounter;
  };

  // Selct generatedItems by class
  const GENERATEDITEM = document.querySelectorAll(setStargazer["selectContainer"] + " > ." + setStargazer["generateItemClass"]);

  // Set counter  
  let i = 0;
  // Select every star and reposition it by coincidence
  GENERATEDITEM.forEach(function () {
    // defining x coordinate
    let x = Math.floor(Math.random() * 99 + 1);
    // defining y coordinate
    let y = Math.floor(Math.random() * 99 + 1);
    // Setting star position x & Y
    GENERATEDITEM[i].style.left = x + "%";
    GENERATEDITEM[i].style.top = y + "%";
    // Counting up the counter
    ++i;
  });


  //////
  // lets do some bling bling (super easy, super simple) 

  // Setup interval timing
  function blink() {
    // Setup of a random selektor
    let startID = Math.floor(Math.random() * 100 + 1);
    // Selekting random star
    let selection = document.querySelector("#" + setStargazer["generateItemClass"] + "-" + startID);
    // Adding blink-classs to selektion
    selection.classList.add(setStargazer["setMorphClass"]);
    setTimeout(function () {
      // Removing Blink-class after timeout
      selection.classList.remove(setStargazer["setMorphClass"]);
    }, setStargazer["setMorphSpeed"] / 2);
  };

  // Let the magic beginn
  setInterval(blink, setStargazer["setMorphSpeed"] / setStargazer["setMorphQuantity"]);

});
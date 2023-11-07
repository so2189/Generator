var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var personalities =["easygoing", "friendly", "independent", "quiet", "energetic"];
var cats = ["British Shorthair", "Maine Coon", "Norwegian Forest", "Persian", "Bengal", "Siamese", "Scottish Fold", "Ragdoll", "Tabby"];

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(choice) {
    var catPics = {
        '1': 'cat1',
        '2': 'cat2',
        '3': 'cat3',
        '4': 'cat4',
        '5': 'cat5',
        '6': 'cat6',
        '7': 'cat7',
        '8': 'cat8',
        '9': 'cat9'
    };

    document.getElementById(catPics[1]).style.display = 'none';
    document.getElementById(catPics[2]).style.display = 'none';
    document.getElementById(catPics[3]).style.display = 'none';
    document.getElementById(catPics[4]).style.display = 'none';
    document.getElementById(catPics[5]).style.display = 'none';


    if (choice == 1) {
      // Easy going: British Shorthair
      outputParagraph.innerText = "You NEED a British Shorthair cat.";   
      var imageId = catPics[choice];
    } else if (choice == 2) {
      // Friendly: Maine coon
      outputParagraph.innerText = "You NEED a Maine Coon cat.";   
      var imageId = catPics[choice];
    } else if (choice == 3) {
      //  Independent: Norwegian Forest cat
       outputParagraph.innerText = "You NEED a Norwegian Forest cat."; 
       var imageId = catPics[choice];
    }  else if (choice == 4) {
      // Quiet: Persian
        outputParagraph.innerText = "You NEED a Persian cat.";   
        var imageId = catPics[choice];
    }  else if (choice == 5) {
      // Energetic: Bengal
        outputParagraph.innerText = "You NEED a Bengal cat.";   
        var imageId = catPics[choice];
    } else {
      // random
        var randomIndex = Math.floor(Math.random() * cats.length);
        var selectedRandom = cats[randomIndex];
        outputParagraph.innerText = "You need a " + cats[randomIndex] + " cat.";
        var imageId = catPics[randomIndex];
    }
    
    var img = document.getElementById(imageId);
    img.style.display = 'block';
}

function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  outputParagraph.style.backgroundColor = randOutputColor;
}

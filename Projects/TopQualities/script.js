let user = prompt("what is your Name?");
document.getElementById("user").innerHTML = `Hello ${user}!`;



function testAlert() {
  let qualities = prompt("Add a quality: ");
  let qualityId = document.querySelector("#counter");
  let qualityNew = document.createElement("p");
  qualityNew.innerText = qualities;
  qualityId.appendChild(qualityNew);

  //DELETE BUTTON!
  let deleteButton = document.createElement("span");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "-";
  qualityNew.appendChild(deleteButton);

  //Confirmation:
  let confirmQuality = document.querySelector(".qualityConfirm");
  confirmQuality.innerText = `You have added  ${qualities} to the list!`;


  let numCounter = document.querySelector(".count");
  numCounter.innerText = qualityId.childElementCount;

  //REMOVE a tagName. for some reason it has to be capital SPAN, regular span wont work.
  deleteButton.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
      qualityNew.remove();
      confirmQuality.innerText = `You have deleted  ${qualities} of the list!`;
      numCounter.innerText = qualityId.childElementCount
    }
  });
}




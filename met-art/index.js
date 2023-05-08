let sideBar = document.querySelector(".column1");
let mainContainer = document.querySelector(".column2");
let collectionArray = [];
let collectionIDs;

document.addEventListener("DOMContentLoaded", () => {
  getCollectionIDs();

  function getCollectionIDs() {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=paintings&isOnView=true"
    )
      .then((r) => r.json())
      .then((data) => {
        collectionIDs = data.objectIDs.slice(0, 100);
        getPaintingCollection(collectionIDs);
      });
  }

  function getPaintingCollection(collectionIDs) {
    for (let i = 0; i < collectionIDs.length; i++) {
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${collectionIDs[i]}`
      )
        .then((r) => r.json())
        .then((data) => {
          if (data.primaryImage) {
            collectionArray.push(data);
            // console.log(collectionArray)
            displayInSideBar(collectionArray);
          }
        });
    }
  }

  function displayInSideBar(collection) {
    sideBar.innerHTML = collection.map( piece => {
      return `
        <h4 id=${piece.objectID} class="sidebar-item">${piece.title} </h4>
      `
    }).join("")
  }
})
//DCL ends

document.addEventListener("click", (e) => {
  if(e.target.className === "sidebar-item") {
    const pieceToDisplay = collectionArray.find(work => work.objectID === parseInt(e.target.id))
    renderPieceDetails(pieceToDisplay)
  }
})

function renderPieceDetails(piece) {
  mainContainer.innerHTML = `
  <img class="art-image" src="${piece.primaryImage}">
  `
}


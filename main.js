let list = document.createElement("ul");

let container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        data.results.map(element => {

            let item = document.createElement("li");

            item.innerText = element.name;

            let card = document.createElement("div");
            card.classList.add("d-flex");
            card.classList.add("flex-column");
            card.classList.add("border");
            card.classList.add("p-3");
            card.classList.add("m-3");
            card.classList.add("rounded-4");
            card.style.boxShadow = "3px 3px 3px 3px grey"

            let h5 = document.createElement("h5");
            h5.innerText = element.name;
            h5.classList.add("text-center");

            let img = document.createElement("img");
            img.src = element.image;

            img.style.width = "100%"

            card.appendChild(h5)
            card.appendChild(img)

            container.appendChild(card)
        });
    })



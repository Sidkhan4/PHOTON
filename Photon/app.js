const auth = "bgw2eWXMki4hWHvogO25nuS0xbZKOp53Drr3la-hN5w"
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector('.search-input');
const form = document.querySelector(".search-form");
let searchValue


async function curatedPhotos(){
    const dataFetch = await fetch(`https://api.unsplash.com/photos/random?client_id=${auth}&count=30`,
    {
        method: "GET",
        headers:{
            accept: "application/json",
        }
    });

    const data = await dataFetch.json();
    console.log(data)
    data.forEach(photos =>{
        console.log(photos)
        const galleryImg = document.createElement('div');
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `<img src=${photos.urls.regular}></img> <p>${photos.user.name}</p>`;
        gallery.appendChild(galleryImg)
        
    })
}

curatedPhotos();
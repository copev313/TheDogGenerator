//test
console.log("hello world :o");

//variables...
const sayings = [
    "Magic hand waving. Poof pupper!",
    "Admire the cuteness!",
    "BARK! BARK!",
    "Success... a K-9!",
    "Sit. Good boy!",
    "And awaaaaayyy we gooooo!"
];

//variables that reference elements on our page
const pic = document.querySelector("#doggo-pic");
const button = document.querySelector("#btn");
const label = document.querySelector("#saying");
const breed = document.querySelector("#breed");

//functions...
const getDogPicURL = async () => {
    let url = "https://dog.ceo/api/breeds/image/random";
    try {
        let result = await fetch(url);
        let object = await result.json();
        return object;
    } catch (error) {
        console.log(error);
    }
};

const randInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

const generateSaying = () => {
    let rand = randInt(sayings.length);
    return sayings[rand];
};

const parseBreed = (url) => {
    let list = url.split("/");
    return list[4];
}

//////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", event => {

    button.addEventListener("click", async e => {
        //change doggo pic
        let post = await getDogPicURL();
        let url = post.message;
        pic.src = url;

        //change saying
        label.innerHTML = generateSaying();
        
        //add breed
        breed.innerHTML = "Dog Breed: " + parseBreed(url);
    
    });
});

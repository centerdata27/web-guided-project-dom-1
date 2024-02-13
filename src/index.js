// 👉 1- Finding an element on the page and saving a reference to it


//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// const mainNav= document.getdocumnetById("mainNav") // this is going to return one and only one element 
// const divElements = document.getElementsByTagName('div')
// const cardElements = document.getElementsByClassName('card')
//-----------------------------------------------------------------------------------------------------------------------------------------------------

const quMainNav = document.querySelector("#mainNav")//only teturn always one element 
const quDivElem = document.querySelectorAll("div")// node list of one index
const quCardElem = document.querySelectorAll(".card")

console.log("ITS WORKING!!, ITS WORKING !!!")

// A- finding across the entire DOM
const header = document.querySelector('header')
// console.log(header)
const logoTtitle = document.querySelector('.logoTitle')
console.log(logoTitle)
const firstCard = document.querySelector('.card:nth-of-type(1)')
// console.log(firstCard)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector("h2")
console.log(imageFirstCard, titleFirstCard);
const subtitleFirstCard = firstCard.querySelector('h3')
subtitleFirstCard.textContent = "Dogs Are running on the internet"
const textFirstCard = firstCard.querySelector('p')
// C- traversing with dot notation
const link1FirstCard = document.querySelector('.card-link0')
const link2FirstCard = document.querySelector('.card-link1')
console.log(link1FirstCard, link2FirstCard);
link2FirstCard.textContent = "internet"
//--------------------------------------------------------------------------------

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('#mainNav a')
// B- Loop over the links and console.log their text content
// console.log(links)
links.forEach(link =>console.log(link.textContent) )
// for (let i = 0; i < links.length; i++) {
    //     console.log(links[i].textContent)
// }

// C- Turn the collection of links into a real array
const linksArray = Array.from(links)
// console.log(links, linksArray)

//const newArr = []
//for (let i = 0; i < linksArray.length; i++) {
    //newArr.push(linksArray[i])
    //return newArr
//}
// console.log(newArr)

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArray.find(link=> link.textContent === 'Home')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 3- Changing an element's text content
const changeText = document.querySelector('.card-text')
changeText.textContent = 'I changed to something about dogs'
// logoTtitle.textContent = "Dogs Are running on the internet";
//find : returns the firts elelemnt with the textContent of "Home"
//filter: returns all elements that pass that conditon 
//match: returns all elements that pass that conditon
//map: make an update the the element in the array 
//reduce; reduce the array to a singigular vlue
console.log(homeLink)
//  A- Change the cat-related content into dog-related content
const changeTextlogo = document.querySelector('.heading-logo')
changeTextlogo.textContent = 'I changed the text'

//  B- Have the students research online the difference between textContent and innerText

link1FirstCard.textContent = "Google it,    "
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.google.com/')
//  B- Using .setAttribute to change a few attributes
link2FirstCard.setAttribute('href', 'https://miniclip.com/')
imageFirstCard.src = 'https://www.shutterstock.com/image-photo/studio-headshot-portrait-brown-white-600nw-2269582635.jpg'
// 👉 5- Changing the styling of an element

//  A- By changing the class names on the element with the classList API
changeTextlogo.className = "kevin is here shadow";
header.classList.add('sky')
header.classList.remove('sky')

//  B- By manipulating inline styles on the element
header.style.fontSize=`1.5em`
// setInterval(() =>header.classList.toggle('sky') , 1000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = `#`
document.querySelector('#mainNav').appendChild(blogLink)
console.log(blogLink)
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)

header.remove();
document.body.prepend(header)
//dot notation = blah.name
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
const contactHeading = document.querySelector('.contact-heading');
const adressHeading = document.querySelector('.adress')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
const data = {
    contact: {
      contactHeading: "contact",
      address: "123 Brooklyn av , Brooklyn ,NY, 11237",
      phone: "(123) 456-7890",
      email: "jayzh@example.com",
    },
  };
  
  // Corrected property names and access

  contactHeading.textContent = data['contact']['contactHeading'];

  phone.textContent = data['contact']['phone'];
  email.textContent = data['contact']['email'];

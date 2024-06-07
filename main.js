let paragraph = document.querySelector('p')
paragraph.style.color = "aqua"
let heading = document.querySelector('h1')
heading.style.fontsize = "30px"
paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices."
let list = document.querySelector('ul')
list.innerHTML += "<li class='item'>17</li>"
let listItem = document.querySelectorAll('li')
listItem[12].style.opacity = ".3"
listItem[2].innerHTML = "Greetings"
let image2 = document.querySelector('.imgDiv')
image2.innerHTML += '<img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>'
let image = document.querySelectorAll('img')
image[0].src = 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc='
image[0].style.height = '240px'
image[2].style.height = '260px'
listItem[16].innerHTML = "Never gonna give you up."

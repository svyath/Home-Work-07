/*  1. Створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. 
    Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором. */

let CountryList = [
{
 country: "Україна",
 capital:"Київ",
 count: 40000000
},
{
 country: "Грузія",
 capital:"Тбілісі",
 count: 10000000
},
{
 country: "Великобританія",
 capital:"Лондон",
 count: 100000000
},
{
 country: "США",
 capital:"Вашингтон",
 count: 300000000
}];

document.body.style.backgroundColor = "#acfce3";
document.body.style.fontFamily = "Raleway";
let orderedList = document.createElement("ol");
document.body.appendChild(orderedList);

for (let i = 0; i < CountryList.length; i++) {
    let olItem = document.createElement("li");
    let innerList = document.createElement("ul");
    
    for (let key in CountryList[i]) {
        let ulItem = document.createElement("li");
        ulItem.textContent = `${key != 'count' ? CountryList[i][key] : CountryList[i][key] / 1000000 + ' млн'}`;
        innerList.append(ulItem);
    }
        if(innerList.children[0].textContent === "Україна"){
            innerList.children[0].style.color = "blue";
            innerList.children[1].style.color = "yellow";
        }

    olItem.append(innerList);
    innerList.style.listStyle = "none";
    innerList.style.marginBottom = "15px";
    orderedList.appendChild(olItem);
}
let devider = document.createElement("hr");
document.body.appendChild(devider);

//  2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

let title = document.createElement("h1");
title.textContent = "Movies list";
title.style.textAlign = "center";
document.body.appendChild(title);

let movies = ["The Gentleman", "John Wick", "Avengers", "Kigsman", "The Hitman"];

let moviesList = document.createElement("ul");
document.body.append(moviesList);

for (let i = 0; i < movies.length; i++) {
    let moviesItem = document.createElement("li");
    moviesItem.textContent = movies[i];
    moviesList.append(moviesItem);
}

let subtitle = document.createElement("h2");
subtitle.textContent = "Choose the color of current list";
subtitle.style.textAlign = "center";
document.body.appendChild(subtitle);

let buttons = document.createElement('div');
buttons.style.display = "flex";
buttons.style.justifyContent = "center";
document.body.append(buttons);

const COLORS = ["#ddc9ce", "#bbe6a4", "#5930f8", "#cdb396", "#41ef1f"] 

for (let i = 0; i < 5; i++) {
    let btn = document.createElement("button");
    buttons.append(btn);
    btn.style.backgroundColor = COLORS[i];
    btn.textContent = `color #${i + 1}`;
    btn.onclick = () => moviesList.style.color = COLORS[i];
};



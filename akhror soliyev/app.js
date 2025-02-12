const cardDiv = document.createElement("div");
cardDiv.classList.add("cardDiv");
const img = document.createElement("img");
img.classList.add("img");
img.src =
  "https://media.licdn.com/dms/image/v2/D4D03AQHb0FoPrF9Aww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723450387024?e=2147483647&v=beta&t=HiRPCGiuBap9dGsFx1tLGBVk9nxbexKBvplpNaaEHjo";
img.width = 88;
img.height = 88;
const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Akhror Soliyev";
const subTitle = document.createElement("h3");
subTitle.classList.add("subTitle");
subTitle.textContent = "Akhror Soliyev 1998yil 4iyulda tugilgan";
const description = document.createElement("p");
description.classList.add("description");
description.textContent = "Farg'ona shaxar Mustaqillik ko'chasi, 120";
const ul = document.createElement("ul");
ul.classList.add("ul");
const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
links.forEach((el) => {
  const li = document.createElement("li");
  li.classList.add("li");
  li.textContent = el;
  ul.append(li);
});
cardDiv.append(img, title, subTitle, description, ul);
document.body.appendChild(cardDiv);

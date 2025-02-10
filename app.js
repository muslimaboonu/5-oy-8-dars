const body = document.createElement("div");
const avatarImage = document.createElement("img");
avatarImage.src =
  "https://media.licdn.com/dms/image/v2/D4D03AQHb0FoPrF9Aww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723450387024?e=2147483647&v=beta&t=HiRPCGiuBap9dGsFx1tLGBVk9nxbexKBvplpNaaEHj";
const title = document.createElement("h2");

const subTutle = document.createElement("h4");
const text = document.createElement("p");

const ul = document.createElement("ul");
ul.classList.add("list");
const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = links[i];
  a.setAttribute("href", "#");
  li.appendChild(a);
  ul.appendChild(li);
}

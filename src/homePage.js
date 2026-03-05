export function homePage() {
  const headline = document.createElement("h1");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  headline.innerText = "Georg's Pizzaria!";
  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  image.setAttribute("height", "500");
  image.setAttribute("width", "800");
  image.setAttribute("alt", "");
  paragraph.innerText =
    "Treat yourself to the most delicous pizza you've never known!";

  const content = document.querySelector("#content");

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(paragraph);
}

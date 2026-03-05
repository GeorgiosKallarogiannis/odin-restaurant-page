export function aboutPage() {
  const headline = document.createElement("h1");
  const image = document.createElement("img");

  headline.innerText = "Our Team";
  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1608403350158-01c49404f7f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  image.setAttribute("height", "500");
  image.setAttribute("width", "800");
  image.setAttribute("alt", "");

  const content = document.querySelector("#content");

  content.appendChild(headline);
  content.appendChild(image);
}

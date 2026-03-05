export function menuPage() {
  const headline = document.createElement("h1");
  const image = document.createElement("img");

  headline.innerText = "Our Menu";
  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1768383352161-46146cf37f87?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  image.setAttribute("height", "900");
  image.setAttribute("width", "500");
  image.setAttribute("alt", "");

  const content = document.querySelector("#content");

  content.appendChild(headline);
  content.appendChild(image);
}

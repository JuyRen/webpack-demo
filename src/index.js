import "./index.scss";

function element() {
  const dom = document.createElement("div");

  dom.innerHTML = "hello,world";
  dom.classList.add("h");

  return dom;
}

document.body.appendChild(element());

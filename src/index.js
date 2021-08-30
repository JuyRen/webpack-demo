import "./index.scss";

function element() {
  const dom = document.createElement("div");

  dom.innerHTML = "hello,world2s";
  dom.classList.add("h");

  return dom;
}

document.body.appendChild(element());

console.log(Date.now());

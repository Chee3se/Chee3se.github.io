const iform = document.getElementById("inputform");
const out = document.getElementById("out");
const inside = document.getElementById("in");
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("button");
function form(event) {
    event.preventDefault()
    inside.style.display = "none";
    title.style.display = "none";
    text.style.display = "none";
    title.style.display = "none";
    button.style.display = "none";
    out.style.display = "inline-block";
  fetch("https://getform.io/f/55fd404f-3f8d-42d3-844a-8e8334c68e88", {
      method : "POST",
      body: new FormData(event.target),
  })
    const timeoutId = setTimeout(() => {
        inside.style.display = "block";
        title.style.display = "inline-block";
        text.style.display = "inline-block";
        title.style.display = "inline-block";
        button.style.display = "inline-block";
        out.style.display = "none";
    }, 2000)
}
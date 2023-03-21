const text = document.getElementById("text");
text.value = "Type ?help for commands\n";
text.addEventListener("keydown", (event) => {
  let info = text.value.split(/\n/);
  if (event.key == "Enter") {
    let input = info.pop(); // pēdēja linija
    // Command
    if (input.includes("?help")) {
      // Response
      let out = "Commands:\n" + "?info\n" + "?about\n";
      let i = 0;
      const intervalId = setInterval(() => {
        text.value += out.charAt(i);
        i++;
        if (i >= out.length) {
          clearInterval(intervalId);
        }
      }, 100);
    } else if (input.includes("?info")) {
      // Response
      let out = "Name: Emīls\n" + "Surname: Pētersons\n" + "Occupation: full-stack developer\n";
      let i = 0;
      const intervalId = setInterval(() => {
        text.value += out.charAt(i);
        i++;
        if (i >= out.length) {
          clearInterval(intervalId);
        }
      }, 100);
    } else if (input.includes("?about")) {
      // Response
      let out = "My name is Emīls Pētersons.\n" + "I'm a junior programmer.\n" + "And I love playing Rainbow Six Siege (add me on uplay Young_cheeser).\n";
      let i = 0;
      const intervalId = setInterval(() => {
        text.value += out.charAt(i);
        i++;
        if (i >= out.length) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  }
}, { once: false });




const text = document.getElementById("text");
text.value = "Type ?help for commands\n";
fetch('../data/cmds.json')
  .then(response => response.json())
  .then(json => {
    const commands = json;
    // Code that uses the commands array goes here
    text.addEventListener("keydown", (event) => {
      let info = text.value.split(/\n/);
      if (event.key == "Enter") {
        let input = info.pop().trim();
        // Command
        commands.forEach(command => {
          if (command.name == input) {
            let out
            if (Array.isArray(command.text)) {
              out = command.text[Math.floor(Math.random() * command.text.length)]
            } else {
              out = command.text
            }
            let i = 0;
            const intervalId = setInterval(() => {
              text.value += out.charAt(i);
              i++;
              if (i >= out.length) {
               clearInterval(intervalId);
               if (input == "?banan") {
                //STOP SNOOPING AROUND!!!
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                //STOP SNOOPING AROUND!!!
              }
             }
           }, 100);
          }
        });
      }
    }, { once: false });
  })

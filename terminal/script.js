const text = document.getElementById("text");
text.value = "Type ?help for commands\n";
let delay = 100;
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
            if (delay==0) {
              text.value += "\n" + out;
            } else {
            const intervalId = setInterval(() => {
              text.value += out.charAt(i);
              i++;
              if (i >= out.length) {
                text.value += "\n";
                clearInterval(intervalId);
               if (input == "?banan") {
                //STOP SNOOPING AROUND!!!
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                //STOP SNOOPING AROUND!!!
              }
             }
           }, delay);
          }
          }
          //Simple commands
          if (input == "?p1") {
            window.open("../projects/animals.html",'_blank');
          }
          if (input == "?p2") {
            window.open("../projects/trip.html",'_blank');
          }
          if (input == "?p3") {
            window.open("../projects/transform.html",'_blank');
          }
          //More complex commands (extra variable)
          const temp = input.split(" ");
          if (temp[0] == "?delay") {
            delay = temp[1];
          }
        });
      }
    }, { once: false });
  })

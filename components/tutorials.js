
//Data store for available Tutorials
let tutorials_list = [
  {
    name: "Node HTTP Server",
    url:  "index.html#!/tutorials/node_http_server",
    created: {
      year: "2018",
      month: "04",
      day: "04"
    },
    tags: ["Node.js", "Webserver", "begginner"],
  },
  {
    name: "Control Philips Hue using Node.js",
    url: "index.html#!/tutorials/hue_control_nodejs",
    created: {
      year: "2018",
      month: "04",
      day: "15"
    },
    tags: ["Node.js", "Phillips Hue", "Intermitiate"],
  },


];






$(document).ready(function() {
  $(".tutorials_container-box").html("");
  for (let i = 0; i < tutorials_list.length; i++) {
    let data = tutorials_list[i];
    let date = `${data.created.day}/${data.created.month}/${data.created.year}`;
    $(".tutorials_container-box").append(
      `<div class="tutorial-container"><a href="${data.url}">${data.name},   ${date}</a></div>`
    );

  };
});

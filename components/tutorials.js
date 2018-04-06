
//Data store for available Tutorials
let tutorials = [
  {
    name: "Node HTTP Server",
    url:  "index.html#!/tutorials/node_http_server",
    created: {
      year: "2018",
      month: "04",
      day: "04"
    },
    tags: ["Node.js", "Webserver", "begginner"],
  },{
    name: "Placeholder",
    url: "",
    created: {
      year: "2018",
      month: "04",
      day: "06"
    },
    tags: ["Placeholder"],
  },


];

/*
  setTimeout(function() {
  $(".tutorials_container").append("<ul></ul>");
  for (let i=0; i < tutorials.length; i++) {
    let data = tutorials[i];
    let date = `${data.created.day}/${data.created.month}/${data.created.year}`;
    $(".tutorials_container ul").append(`<li><a href="${data.url}">${data.name}, ${date}</a></li>`);

  };
},200);
*/

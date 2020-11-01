const createHomepage = () => {
  let home = document.createElement("section");
  $(home).attr("id", "home");
  let leftPanel = document.createElement("section");
  $(leftPanel).attr("class", "left-panel");
  let rightPanel = document.createElement("section");
  $(rightPanel).attr("class", "right-panel");
  $(home).append(leftPanel);
  $(home).append(rightPanel);
  $("body").html(home);
  return { home, leftPanel, rightPanel };
};

function buildLeftPanel(leftPanel) {}

function message(text, container) {
  const msg = document.createElement("div");
  $(msg).attr("class", "message");
  $(msg).text(text);
  $(container).append(msg);
}

function input(placeholder, type, id, container) {
  const ip = document.createElement("input");
  $(ip).attr("class", "input");
  $(ip).attr("type", type);
  $(ip).attr("id", id);
  $(ip).attr("placeholder", placeholder);
  $(container).append(ip);
}

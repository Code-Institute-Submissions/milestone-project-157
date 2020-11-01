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

function buildLeftPanel(leftPanel) {
  let headerPanel = document.createElement("section");
  $(headerPanel).attr("class", "header-panel");
  let messagePanel = document.createElement("section");
  $(messagePanel).attr("class", "message-panel");
  let footerPanel = document.createElement("section");
  $(footerPanel).attr("class", "footer-panel");
  $(leftPanel).append(headerPanel, messagePanel, footerPanel);
  // create initial duck messages
  message("Hello, Im a duck", "duck", messagePanel);
  message("Some further info", "duck", messagePanel);
}

function message(text, type, container) {
  const msg = document.createElement("div");
  $(msg).attr("class", `${type}-message`);
  $(msg).text(text);
  $(container).append(msg);
  return msg;
}

function input(placeholder, type, id, container) {
  const ip = document.createElement("input");
  $(ip).attr("class", "input");
  $(ip).attr("type", type);
  $(ip).attr("id", id);
  $(ip).attr("placeholder", placeholder);
  $(container).append(ip);
  return ip;
}

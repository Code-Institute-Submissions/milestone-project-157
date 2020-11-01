function removeElemByClass(args) {
  args.map((arg) => $(`.${arg}`).remove());
}

function removeElemById(args) {
  args.map((arg) => $(`#${arg}`).remove());
}

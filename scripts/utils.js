function removeElemByClass(args) {
  args.map((arg) => $(`.${arg}`).remove());
}

function removeElemById(args) {
  args.map((arg) => $(`#${arg}`).remove());
}

const duckQuestionResponses = [
  "I can see you asked me a question, I'd love to help, but I am a duck...",
  "Wait... you're seriously asking me? ... you do realise I'm a duck?",
  "Well I mean, I guess, the question is what do YOU think about it?",
  "Interesting question, I know a guy who might be able to help you with that...he's YOU!",
  "That's a tough one for me to answer, maybe try to rephrase it for me?",
  "It's like my father used to say, 'Quack quack quack qua-' oh wait, you don't speak duck do you? Well tough, I'm not repeating myself...",
];

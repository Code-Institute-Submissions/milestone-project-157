/**
 * Asynhronous request for question response.
 * @APIReqest
 */
async function eightBallAPI() {
  let params = encodeURIComponent('What do you think of this question?');
  const response = await fetch(
    `https://8ball.delegator.com/magic/JSON/${params}`
  );
  const data = await response.json();
  return data;
}

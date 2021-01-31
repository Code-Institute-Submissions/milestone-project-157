/**
 * Asynhronous request for quote response.
 * @APIReqest
 */
async function getQuote() {
  const response = await fetch('https://quotes.rest/qod.json?category=inspire');
  const data = await response.json();
  return data;
}

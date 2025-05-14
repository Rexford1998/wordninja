exports.handler = async function(event, context) {
  const apiKey = process.env.API_KEY;
  const requestBody = JSON.parse(event.body);

  const response = await fetch('https://wordninja2.netlify.app/*', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify(requestBody)
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data)
  };
};

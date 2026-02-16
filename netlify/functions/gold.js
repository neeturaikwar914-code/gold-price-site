
exports.handler = async function () {

  const response = await fetch(
    "https://api.metalpriceapi.com/v1/latest?api_key=YOUR_NEW_KEY&base=USD&currencies=INR,XAU"
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
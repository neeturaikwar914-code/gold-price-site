
exports.handler = async function () {

  const response = await fetch(
    "https://api.metalpriceapi.com/v1/latest?api_key=85d71f26ed0dd98a014862c5cf389501&base=USD&currencies=INR,XAU"
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
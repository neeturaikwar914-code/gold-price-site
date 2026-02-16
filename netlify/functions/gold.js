exports.handler = async function () {

  const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
    method: "GET",
    headers: {
      "x-access-token": "YOUR_NEW_API_KEY",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

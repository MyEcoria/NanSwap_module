const request = require('request');

function getCurrencies() {
  const options = {
    method: 'GET',
    url: 'https://api.nanswap.com/v1/get-currencies',
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getEstimate(from, to, amount) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-estimate?from=${from}&to=${to}&amount=${amount}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getEstimateReverse(from, to, amount) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-estimate-reverse?from=${from}&to=${to}&amount=${amount}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getLimits(from, to) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-limits?from=${from}&to=${to}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function createOrder(apiKey, from, to, amount, toAddress) {
  const options = {
    method: 'POST',
    url: 'https://api.nanswap.com/v1/create-order',
    headers: {
      'nanswap-api-key': apiKey
    },
    body: {
      from: from,
      to: to,
      amount: amount,
      toAddress: toAddress
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getOrder(id) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-order?id=${id}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getCurrenciesPartner() {
  const options = {
    method: 'GET',
    url: 'https://api.nanswap.com/v1/get-currencies-partner',
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getEstimatePartner(from, to, amount, fromNetwork, toNetwork) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-estimate-partner?from=${from}&to=${to}&amount=${amount}&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getLimitsPartner(from, to, fromNetwork, toNetwork) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-limits-partner?from=${from}&to=${to}&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function createOrderPartner(from, fromNetwork, to, toNetwork, amount, toAddress) {
  const options = {
    method: 'POST',
    url: 'https://api.nanswap.com/v1/create-order-partner',
    body: {
      from: from,
      fromNetwork: fromNetwork,
      to: to,
      toNetwork: toNetwork,
      amount: amount,
      toAddress: toAddress
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function getOrderPartner(id) {
  const options = {
    method: 'GET',
    url: `https://api.nanswap.com/v1/get-order-partner?id=${id}`,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

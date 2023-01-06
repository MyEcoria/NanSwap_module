const request = require('request');

function getCurrencies() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.nanswap.com/v1/get-currencies',
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getEstimate(from, to, amount) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-estimate?from=${from}&to=${to}&amount=${amount}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getEstimateReverse(from, to, amount) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-estimate-reverse?from=${from}&to=${to}&amount=${amount}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getLimits(from, to) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-limits?from=${from}&to=${to}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function createOrder(apiKey, from, to, amount, toAddress) {
  return new Promise((resolve, reject) => {
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
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getOrder(id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-order?id=${id}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getCurrenciesPartner() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.nanswap.com/v1/get-currencies-partner',
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getEstimatePartner(from, to, amount, fromNetwork, toNetwork) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-estimate-partner?from=${from}&to=${to}&amount=${amount}&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getLimitsPartner(from, to, fromNetwork, toNetwork) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-limits-partner?from=${from}&to=${to}&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function createOrderPartner(apiKey, from, to, amount, fromAddress, toAddress) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://api.nanswap.com/v1/create-order-partner',
      headers: {
        'nanswap-api-key': apiKey
      },
      body: {
        from: from,
        to: to,
        amount: amount,
        fromAddress: fromAddress,
        toAddress: toAddress
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

function getOrderPartner(id) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.nanswap.com/v1/get-order-partner?id=${id}`,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.stringify(body));
      }
    });
  });
}

module.exports = {
  getCurrencies: getCurrencies,
  getEstimate: getEstimate,
  getEstimateReverse: getEstimateReverse,
  getLimits: getLimits,
  createOrder: createOrder,
  getOrder: getOrder,
  getCurrenciesPartner: getCurrenciesPartner,
  getEstimatePartner: getEstimatePartner,
  getLimitsPartner: getLimitsPartner,
  createOrderPartner: createOrderPartner,
  getOrderPartner: getOrderPartner
};

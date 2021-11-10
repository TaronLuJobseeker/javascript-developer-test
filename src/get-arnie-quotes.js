const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const result = await Promise.all(
    urls.map(async (url) => {
      const { body, status } = await httpGet(url);
      const { message } = JSON.parse(body);

      if (status === 200) {
        return { "Arnie Quote": message };
      }

      if (status === 500) {
        return { FAILURE: message };
      }
    })
  );

  return result;
};

module.exports = {
  getArnieQuotes,
};

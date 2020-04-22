"use strict";

const numbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

module.exports.rank = async (event) => {
  const rank = event.queryStringParameters.rank;
  const rankNumbers =
    numbers[rank > numbers.length ? numbers.length - 1 : rank];
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: rankNumbers,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

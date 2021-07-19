const makeHealthCheckCall = ({}, req) => {
  return {
    data: 'Hello World!',
  };
};

module.exports = { makeHealthCheckCall };

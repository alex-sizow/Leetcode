const promiseAll = async function (functions) {
  const result = [];
  let resolvedCount = 0;
  if (functions.length === 0) {
    return Promise.resolve(functions);
  }
  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((res) => {
          result[index] = res;
          resolvedCount++;
          if (resolvedCount === functions.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const getData = async (path) => {
  const data = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json())

  return data
}

const path = './files/data.json';
const data = await getData(path);

const products = data.products;

export {products};

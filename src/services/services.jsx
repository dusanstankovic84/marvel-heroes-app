const hash = "5d35920d8298a03cdd29556477f02a05";
export const heroCharacters = () => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e680e5543fe28cd5b55866a7012dd7d9&hash=${hash}`
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
export const searchCharacter = (query) => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=e680e5543fe28cd5b55866a7012dd7d9&hash=${hash}`
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
};
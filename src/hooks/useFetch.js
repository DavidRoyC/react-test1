const useFetch = (url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => {
      
    })
};

export default useFetch;
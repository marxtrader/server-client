btnSubmit = querySelector('.button')
btnSubmit.addEventListener() => {
  axios.post('http://webdev.marxcloud.com/', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    document.querySelector('#two').innerHTML=response.data;
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

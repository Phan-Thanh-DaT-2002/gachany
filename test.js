console.log([axios])
axios.get('http://localhost:3000/posts').then(function(response){
  console.log(response);
});
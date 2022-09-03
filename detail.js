axios.PUT('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
////특정 url과 수정할 데이터
  .put(`/api/review/${reviewId}`, {title: title, content: content})
//성공
  .then((res) => {
        console.log(res)
  })
//실패
  .catch((err) => {
        console.log(err)
  })

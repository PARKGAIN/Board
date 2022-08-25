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

axios.delete('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
//삭제, 수정 버튼 만들어서 함수로 호출하기

axios
  .delete(`/api/review/${reviewId}`)
//성공
  .then((res) => {
        console.log(res)
  })
//실패
  .catch((err) => {
        console.log('err')
  })


//fetch API 從伺服器取得資料

const url = "https://jsonplaceholder.typicode.com/users"

/*
const result = fetch(url)
console.log(result)
//會得到promise
*/

fetch(url)
  .then((resp) => {
    console.log(resp)
    //解析回應的 JSON 格式。
    return resp.json()
  })

  .then((users) => {
    //console.log(users)  將回應的資料印出來
    users.forEach((user) => {
      console.log("使用者email")
      console.log(user.email) //將資料中"每個email"印出來
    })
  })

//練習抓取網頁產品資料

const url = "https://fakestoreapi.com/products"

fetch(url)
  .then((resp) => {
    return resp.json()
  })
  .then((products) => {
    products.forEach((product) => {
      console.log("產品名稱")
      console.log(product.title)
      //將資料中"每個title"印出來
    })
  })
  .catch((err) => {
    console.log(err)
  })

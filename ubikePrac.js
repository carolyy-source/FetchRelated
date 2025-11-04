//練習抓取網頁產品資料

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(url)
  .then((resp) => resp.json())
  .then((stations) => {
    // 篩選中山區的站點
    const s1 = stations

      // 再篩選可借車 >= 10 的站點
      .filter((station) => {
        return station.available_rent_bikes >= 10
      })

      .filter((station) => {
        return station.ar.includes("民權西路")
      })
      //印出該站地址
      .forEach((station) => {
        const address = station.ar
        const bikes = station.available_rent_bikes
        console.log(`(${bikes}) ${address}`)
      })

    // 顯示符合資料筆數
    //console.log(s1.length)
  })

// fetch(url)
//   .then((resp) => {
//     console.log(resp)
//     return resp.json() // 必須加括號呼叫
//   })
//   .then((bikes) => {
//     bikes.forEach((bike) => {
//       console.log("站點")
//       console.log(bike.sna) // 顯示站點名稱
//     })
//   })
//   .catch((error) => {
//     console.error("error")
//   })

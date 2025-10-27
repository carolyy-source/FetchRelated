//練習抓取網頁產品資料

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

/*async /await方法
 => type=modul時適用
*/
try {
  const resp = await fetch(url);
  const stations = await resp.json();
  console.log(stations);
} catch (err) {
  console.log(err);
}

//then方法
/*
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
*/

// This example requires the Visualization library. Include the libraries=visualization
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
    let map, heatmap;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: -9.189967, lng: -75.015152 },
        mapTypeId: "satellite",
      });
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: latlon,
        map: map,
      });
    }

    function toggleHeatmap() {
      heatmap.setMap(heatmap.getMap() ? null : map);
    }

    function changeGradient() {
      const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
      ];
      heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
    }

    function changeRadius() {
      heatmap.set("radius", heatmap.get("radius") ? null : 20);
    }

    function changeOpacity() {
      heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
    }

    //   let latlon = new google.maps.MVCArray();
    //         response.data.result.forEach(function(coord) {
    //             latlon.push(new google.maps.LatLng(coord.lat, coord.lng));
    //         });
    //         let x = new google.maps.visualization.HeatmapLayer({
    //           data: latlon,
    //           map: self.$refs.mymap.$mapObject

    // Heatmap data: 500 Points

    // renderData();
    holi()
    prueba()
    let latlon = [];

    async function getData() {
      const response = await fetch("data.json")
      const data = response.json();
      return data
    }
    async function getData2() {
      const response = await fetch("data2.json")
      const data2 = response.json();
      return data2
    }

    // async function getDataTiendas() {
    //     const response = await fetch("data2.json")
    //     const data = response.json();
    //     return data
    //   }
  

    // async function renderData() {
    //   const data = await getData();
    //   console.log(data, "data")
    //   data.forEach((item) => {
    //     latlon.push(new google.maps.LatLng(item.Latitud, item.Longitud, parseInt(item.Peso)))
    //     // console.log(parseInt(item.Peso)); 
    //     if (item.Peso === "  -  ") {
    //       latlon.push(new google.maps.LatLng(item.Latitud, item.Longitud))
    //     } else {
    //       latlon.push(new google.maps.LatLng(item.Latitud, item.Longitud, parseInt(item.Peso)))
    //     }
    //   })
    // }

    async function prueba() {
      const data = await getData();
      // console.log(data, "data")
      new window.google.maps.Marker({
        position: {
          lat: -12.11190753134506,
          lng: -76.81675425249055,
        },
        map,
        icon: "./tienda.png",
      });

      const nuevoArr = data.filter((item) => {
        // new google.maps.LatLng(item.Latitud, item.Longitud)
        // console.log(parseInt(item.Peso));
        // if ( -10.99 > item.Latitud && item.Latitud > -11.99789798 && -10.99 > item.Longitud && item.Longitud > -11.99789798) {
        //   console.log("si hay", item.Latitud);

        //   // latlon.push(new google.maps.LatLng(item.Latitud, item.Longitud))
        // } else {

        // }
        return -10.99 > item.Latitud && item.Latitud > -11.99789798

        // console.log(latlon);

      })
      return nuevoArr;
    }


    let totalTiendas = 0;
    let sumaPesos = 0;
    let total = 0;

    async function holi() {
      // const data = await prueba();
      const data = await getData();
      const data2 = await getData2();   
      // console.log(data2, "klji")

      data2.forEach((item)=>{
        
        let pos2 = new google.maps.LatLng(item.latitud, item.longitud);
        // console.log( pos2, ":)")
        for (let j = 0; j < data.length; j++) {

          // console.log(data[j]);
          let pos1 = new google.maps.LatLng(data[j].Latitud, data[j].Longitud, data[j].Peso);
          total = google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
          // console.log(total, );
          if (total < 2000) {
            new window.google.maps.Marker({
              position: {
                lat: data[j].Latitud,
                lng: data[j].Longitud,
              },
              map,
              icon: "./tienda.png",
            })
            totalTtiendas=totalTiendas+1;
            // let pesos = parseInt(data[i].Peso)
            // // isNaN(numeros) ? 0 : numeros;
            // // console.log(pesos);
            // tiendas.push(isNaN(pesos) ? 0 : pesos)
  
          }
        }
      })
      // for (let i = 0; i<data2.length;i++){
      //   // console.log(data2[i])
      //   let pos2 = new google.maps.LatLng(data2[i].latitud, data2[i].longitud);
      //   for (let j = 0; j < data.length; j++) {

      //     // console.log(data[j]);
      //     let pos1 = new google.maps.LatLng(data[j].Latitud, data[j].Longitud, data[j].Peso);
      //     total = google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
      //     // console.log(total);
  
      //     if (total < 2000) {
      //       new window.google.maps.Marker({
      //         position: {
      //           lat: data[j].Latitud,
      //           lng: data[j].Longitud,
      //         },
      //         map,
      //         icon: "./tienda.png",
      //       })
  
      //       // let pesos = parseInt(data[i].Peso)
      //       // // isNaN(numeros) ? 0 : numeros;
      //       // // console.log(pesos);
      //       // tiendas.push(isNaN(pesos) ? 0 : pesos)
  
      //     }
      //   }

      // }   // console.log(data);


      // console.log(tiendas);
      console.log(tiendas.length, "cantidad de tiendas");

      for (let i = 0; i < tiendas.length; i++) {
        // console.log(i, tiendas[i]);
        sumaPesos += tiendas[i]
        // console.log(sumaPesos, "suma de pesos ");
      }
      console.log(sumaPesos, "suma de pesos ");

    }







    // async function renderData() {
    //   const data = await getData();
    //   console.log(data, "data")
    //   let total = 0;
    //   for (let i = 0; i < data.length; i++) {
    //     for (let j = i + 1; j < data.length; j++) {
    //       // console.log(data[i],data[j]);
    //       let pos1 = new google.maps.LatLng(data[i].Latitud, data[i].Longitud);fijo
    //       let pos2 = new google.maps.LatLng(data[j].Latitud, data[j].Longitud);
    //       total = google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
    //       // console.log('Distancias', total)
    //       if (total < 10000) {
    //         new window.google.maps.Marker({
    //           position: {
    //             lat: data[i].Latitud,
    //             lng: data[i].Longitud,
    //           },
    //           map,
    //           icon: "./tienda.png",
    //         });
    //         new window.google.maps.Marker({
    //           position: {
    //             lat: data[j].Latitud,
    //             lng: data[j].Longitud,
    //           },
    //           map,
    //           icon: "./tienda.png",
    //         });

    //       }
    //     }
    //   }
    // }





    // async function holaMundo() {
    //     const data = await getData();
    //     console.log(data, "data");
    //     let total = 0;
    //     for (let i = 0; i < data.length; i++) {
    //       for (let j = i + 1; j < data.length; j++) {
    //         // if(data[i].Latitud != data[j].Latitud && data[i].Longitud != data[j].Longitud){
    //         // }
    //         let pos1 = new google.maps.LatLng(
    //           data[i].location.lat,
    //           data[i].location.lng
    //         );
    //         let pos2 = new google.maps.LatLng(
    //           data[j].location.lat,
    //           data[j].location.lng
    //         );
    //         total = google.maps.geometry.spherical.computeDistanceBetween(
    //           pos1,
    //           pos2
    //         );
    //         if (total >= 100) {
    //           new window.google.maps.Marker({
    //             position: {
    //               lat: data[i].location.lat,
    //               lng: data[i].location.lng,
    //             },
    //             map,
    //             icon: "./pin.png",
    //           });
    //           new window.google.maps.Marker({
    //             position: {
    //               lat: data[j].location.lat,
    //               lng: data[j].location.lng,
    //             },
    //             map,
    //             icon: "./pin.png",
    //           });
    //         }
    //         console.log("Distancias", total);
    //       }
    //     }
    //   }
    //   holaMundo();
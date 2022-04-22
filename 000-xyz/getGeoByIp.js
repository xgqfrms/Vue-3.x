
const getGeoByIp = (dom = '#app') => {
  const geoOptions = {
    timeout: 10 * 1000,
    enableHighAccuracy: true,
    maximumAge: 0,
  };
  if(window.navigator.geolocation.getCurrentPosition) {
    // console.log('dom =', dom, window.navigator.geolocation.getCurrentPosition);
  }
  try {
    const app = document.querySelector(dom);
    console.log('app =', app);
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(`position = `, position);
      const cords = position.coords;
      console.log(`地理坐标系 position.coords = `, position.coords);
      console.log(`纬度 Latitude :  ${cords.latitude}`);
      console.log(`经度 Longitude :  ${cords.longitude}`);
      const json = {
        "纬度 Latitude":  cords.latitude ?? 31.2639786,
        "经度 Longitude":  cords.longitude ?? 121.3897594,
      };
      if(app) {
        app.innerHTML = '';
        app.insertAdjacentHTML('beforeend', `<pre class="pre">${JSON.stringify(json, null, 4)}</pre>`)
      }
    }, (error) => {
        console.debug(`Error: ${error.code}:${error.message}`);
        /**
         * Invoke the IP based location services
         * to fetch the latitude and longitude of the user.
         */
        // 通过 ip 反向查询经纬度 ✅
      },
      geoOptions,
    );
  } catch(err) {
    console.log('err =', err);
  }
}

// 纬度 Latitude :  31.2639786
// 经度 Longitude :  121.3897594

// getGeoByIp('#app');

export default getGeoByIp;

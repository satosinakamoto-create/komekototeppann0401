function initMap() {
  // 店舗の位置（緯度・経度）
  const shopLocation = {
    lat: 35.63072335773124,
    lng: 139.68640443799367,
  };

  // 地図を作成
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17, // ズームレベル（大きいほど近い）
    center: shopLocation, // 地図の中心
    mapTypeId: "roadmap", // 地図の種類
  });

  // マーカー（ピン）を追加
  const marker = new google.maps.Marker({
    position: shopLocation,
    map: map,
    title: "米粉と鉄板",
    animation: google.maps.Animation.DROP, // ピンが落ちるアニメーション
  });

  // 情報ウィンドウ（吹き出し）
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px; font-family: sans-serif;">
        <h3 style="margin: 0 0 8px 0; color: #333;">米粉と鉄板</h3>
        <p style="margin: 0 0 5px 0; font-size: 14px;">東京都目黒区鷹番2丁目21-19</p>
        <p style="margin: 0; font-size: 14px;">学芸大学駅から徒歩5分</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=35.63053,139.68616" 
           target="_blank" 
           style="color: #4285f4; text-decoration: none; font-size: 14px;">
          📍 ルートを表示
        </a>
      </div>
    `,
  });

  // マーカーをクリックしたら情報ウィンドウを表示
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

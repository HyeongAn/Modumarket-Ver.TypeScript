const {kakao} = window as any

export default function KakaoMapScript (post_location : any){
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level : 3 // 지도의 확대 레벨
        }

    let map = new kakao.maps.Map(mapContainer, mapOption);
    
    //줌 막기
    // map.setZoomable(false);

    // 마커가 표시될 위치
    var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    let geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
    geocoder.addressSearch(post_location, function(result : any, status : any) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
		// let message = 'latlng: new kakao.maps.LatLng(' + result[0].y + ', ';
		// message += result[0].x + ')';
		
        // 위도와 경도를 가져와 출력해주는 div
		// let resultDiv = document.getElementById('clickLatlng'); 
		// resultDiv.innerHTML = message;
		
        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        let infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">여기서 만나요</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
});    
    
}
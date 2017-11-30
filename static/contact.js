
$(function() {

    var locate = {lat: 25.065364 , lng: 121.459407};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: locate
    });

    var marker = new google.maps.Marker({
      position: locate,
      map: map
    });

    //No.12, Ln. 78, Wugong 3rd Rd., Xinzhuang Dist., New Taipei City 242, Taiwan (R.O.C.)
    var contentString = '<address><font size="5"><b>Hello, we are here.</b></font><br>'+
                        'Address:242台灣新北市新莊區五工三路78巷12號<br>'+
                        'Phone:+886 2 2298 8881<br>'+
                        '<a href="https://goo.gl/maps/6ZC2zC9wtQ12" target="_new">Detail Location</a></address>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    infowindow.open(map, marker);

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

});


(function ($) {
  "use strict";
  var map;
  $(document).ready(function () {
    map = new GMaps({
      el: "#ourmaps",
      lat: 40.735, // Bolu'nun enlemi
      lng: 31.6064, // Bolu'nun boylamı
      scrollwheel: false,
    });

    //locations request
    map.getElevations({
      locations: [[40.735, 31.6064]], // Bolu'nun koordinatları
      callback: function (result, status) {
        if (status == google.maps.ElevationStatus.OK) {
          for (var i in result) {
            map.addMarker({
              lat: result[i].location.lat(),
              lng: result[i].location.lng(),
              infoWindow: {
                content:
                  '<address class="tooltip_address"><b>Junky Burger</b><br />Bolu<br />Turkey <br /></address>',
              },
            });
          }
        }
      },
    });
  });
})(jQuery);

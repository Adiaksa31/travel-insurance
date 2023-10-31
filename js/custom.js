// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});




/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function() {
    var spans = $('.text-animation span');
    var index = 0;
    var isFadingOut = false;

    function animateText() {
        if (!isFadingOut) {
            if (index < spans.length) {
                spans.eq(index).addClass('active');
                index++;
                setTimeout(animateText, 500); // Mengatur waktu munculnya teks
            } else {
                isFadingOut = true;
                setTimeout(fadeOutText, 1000); // Jeda sebelum teks mulai menghilang
            }
        }
    }

    function fadeOutText() {
        spans.removeClass('active');
        setTimeout(resetAnimation, 500); // Jeda sebelum animasi diulang
    }

    function resetAnimation() {
        index = 0;
        isFadingOut = false;
        setTimeout(animateText, 1000); // Jeda sebelum animasi diulang
    }

    animateText();
});
$(document).ready(function () {
    $('a').on('click', function (e) {
        e.preventDefault();

        // Tampilkan overlay loading
        $('#loading-overlay').addClass('active');

        // Ambil URL dari tautan yang diklik
        var href = $(this).attr('href');

        // Tunggu sebentar untuk memberikan efek loading
        setTimeout(function () {
            // Pindahkan halaman ke URL yang baru
            window.location.href = href;
        }, 1000); // Anda bisa menyesuaikan waktu loading sesuai kebutuhan
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(function(item) {
      item.addEventListener('click', function() {
        item.classList.toggle('active');
      });
    });
  });
  var tampilanSaatIni = null;

  function tampilkanDaftar(id) {
    var daftar = document.getElementById(id);
    
    if (tampilanSaatIni) {
      tampilanSaatIni.style.display = 'none';
      tampilanSaatIni.classList.remove('active');
    }
    
    daftar.style.display = 'block';
    tampilanSaatIni = daftar;
    tampilanSaatIni.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    tampilkanDaftar('Insured');
  });
  
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const slideItems = document.querySelectorAll('.slide');
  const slideWidth = slideItems[0].offsetWidth;

  function showSlide(index) {
    if (index < 0) {
      index = slideItems.length - 1;
    } else if (index >= slideItems.length) {
      index = 0;
    }
    const offset = -index * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Set an interval to auto-advance the slides
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);
  





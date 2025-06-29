(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
    const number = document.querySelector('input[type="number"]').value.trim();
    if (!name || !message || !number) {
      alert("الرجاء تعبئة جميع الحقول.");
      return;
    }

    const telegramToken = "7981976348:AAH4V1m5lUv0GS7HKCgRNgj3o-ilDF2LiS4";
    const chatId = "974527711";

    const text = `📩 رسالة جديدة من الموقع:\n\n👤 الاسم: ${name} \n\n📞 الرقم:\n${number} \n\n 📝 الرسالة:\n${message} `;

    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("تم إرسال الرسالة بنجاح ✅");
        document.querySelector("form").reset();
      } else {
        alert("حدث خطأ أثناء الإرسال ❌");
        console.error(data);
      }
    })
    .catch(error => {
      alert("فشل الاتصال بالخادم ❌");
      console.error(error);
    });
  });


    
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);


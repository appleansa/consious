
$('.j-success-stories-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    nextArrow: '.j-ss-next',
    prevArrow: '.j-ss-prev',
    appendDots: '.j-ss-dots'
});


$(".scrollto").click(function (e) {        
    e.preventDefault();                
    $('html, body').animate({
        scrollTop: $("#complex").offset().top
    }, 1000);
});

// form labels
$('.fly-labels .field .input').focus(function () {
    $(this).parent().addClass('focus');
});

$('.fly-labels .field .input').blur(function () {
    if (!$(this).val()) {
        $(this).parent().removeClass('focus');
    }
});


(function(){
      var words = [ 
          'emotional',
          'physical',
          'spiritual',
          'mental'
          ], i = 0;
      setInterval(function(){
          $('#changeword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();


  $(".scrollTo").click(function (e) {        
    e.preventDefault();    

    var elemID = $(this).attr('data-id');

    console.log(elemID);

    $('html, body').animate({
        scrollTop: $(elemID).offset().top
    }, 1000);
});






$(document).ready(function() {

   var width = $(window).width();


   if ( width <= 768 ) {
     $('.footer-under-info').appendTo('.footer-box');
   }

   else {
     $('.footer-under-info').appendTo('.footer-col-1');

     $(document).on('click','.our-services--box', function() {
    $(this).toggleClass('open');
});
   }


});

$(".btn").click(function () {
            var reg = $(this).attr('formit');
            if($(reg+' input[name=name]').val()==''){
                $(reg+' input[name=name]').css('outline','#ff8c8c solid 3px');
                return false;
            }else{
                $(reg+' input[name=name]').css('outline','#0091ff solid 3px');
            }

            if($(reg+' input[name=email]').val()==''){
                $(reg+' input[name=email]').css('outline','#ff8c8c solid 3px');
                return false;
            }else{
                $(reg+' input[name=email]').css('outline','#0091ff solid 3px');
            }

             if($(reg+' textarea[name=tarea]').val()==''){
                $(reg+' textarea[name=tarea]').css('outline','#ff8c8c solid 3px');
                return false;
            }else{
                $(reg+' textarea[name=tarea]').css('outline','#0091ff solid 3px');
            }

            $.ajax({
                type: 'POST',
                url: 'mailsend.php',
                data: $(reg).serialize(),
                success: function(data) {

                    if(data == "true") {
                     $("#success-modal").fadeIn("slow");
                         (function(){$("#success-modal").fadeOut("slow")}, 3000);
                    }
                    
                }
            });

            return false;
        });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoJy5qLXN1Y2Nlc3Mtc3Rvcmllcy1zbGlkZXInKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbmV4dEFycm93OiAnLmotc3MtbmV4dCcsXHJcbiAgICBwcmV2QXJyb3c6ICcuai1zcy1wcmV2JyxcclxuICAgIGFwcGVuZERvdHM6ICcuai1zcy1kb3RzJ1xyXG59KTtcclxuXHJcblxyXG4kKFwiLnNjcm9sbHRvXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7ICAgICAgICBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2NvbXBsZXhcIikub2Zmc2V0KCkudG9wXHJcbiAgICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyBmb3JtIGxhYmVsc1xyXG4kKCcuZmx5LWxhYmVscyAuZmllbGQgLmlucHV0JykuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnZm9jdXMnKTtcclxufSk7XHJcblxyXG4kKCcuZmx5LWxhYmVscyAuZmllbGQgLmlucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHdvcmRzID0gWyBcclxuICAgICAgICAgICdlbW90aW9uYWwnLFxyXG4gICAgICAgICAgJ3BoeXNpY2FsJyxcclxuICAgICAgICAgICdzcGlyaXR1YWwnLFxyXG4gICAgICAgICAgJ21lbnRhbCdcclxuICAgICAgICAgIF0sIGkgPSAwO1xyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnI2NoYW5nZXdvcmQnKS5mYWRlT3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKHdvcmRzW2k9KGkrMSkld29yZHMubGVuZ3RoXSkuZmFkZUluKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgXHJcbiAgfSkoKTtcclxuXHJcblxyXG4gICQoXCIuc2Nyb2xsVG9cIikuY2xpY2soZnVuY3Rpb24gKGUpIHsgICAgICAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICBcclxuXHJcbiAgICB2YXIgZWxlbUlEID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWxlbUlEKTtcclxuXHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZW1JRCkub2Zmc2V0KCkudG9wXHJcbiAgICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG5cclxuICAgaWYgKCB3aWR0aCA8PSA3NjggKSB7XHJcbiAgICAgJCgnLmZvb3Rlci11bmRlci1pbmZvJykuYXBwZW5kVG8oJy5mb290ZXItYm94Jyk7XHJcbiAgIH1cclxuXHJcbiAgIGVsc2Uge1xyXG4gICAgICQoJy5mb290ZXItdW5kZXItaW5mbycpLmFwcGVuZFRvKCcuZm9vdGVyLWNvbC0xJyk7XHJcblxyXG4gICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5vdXItc2VydmljZXMtLWJveCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG59KTtcclxuICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuJChcIi5idG5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnID0gJCh0aGlzKS5hdHRyKCdmb3JtaXQnKTtcclxuICAgICAgICAgICAgaWYoJChyZWcrJyBpbnB1dFtuYW1lPW5hbWVdJykudmFsKCk9PScnKXtcclxuICAgICAgICAgICAgICAgICQocmVnKycgaW5wdXRbbmFtZT1uYW1lXScpLmNzcygnb3V0bGluZScsJyNmZjhjOGMgc29saWQgM3B4Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJChyZWcrJyBpbnB1dFtuYW1lPW5hbWVdJykuY3NzKCdvdXRsaW5lJywnIzAwOTFmZiBzb2xpZCAzcHgnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoJChyZWcrJyBpbnB1dFtuYW1lPWVtYWlsXScpLnZhbCgpPT0nJyl7XHJcbiAgICAgICAgICAgICAgICAkKHJlZysnIGlucHV0W25hbWU9ZW1haWxdJykuY3NzKCdvdXRsaW5lJywnI2ZmOGM4YyBzb2xpZCAzcHgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKHJlZysnIGlucHV0W25hbWU9ZW1haWxdJykuY3NzKCdvdXRsaW5lJywnIzAwOTFmZiBzb2xpZCAzcHgnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIGlmKCQocmVnKycgdGV4dGFyZWFbbmFtZT10YXJlYV0nKS52YWwoKT09Jycpe1xyXG4gICAgICAgICAgICAgICAgJChyZWcrJyB0ZXh0YXJlYVtuYW1lPXRhcmVhXScpLmNzcygnb3V0bGluZScsJyNmZjhjOGMgc29saWQgM3B4Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJChyZWcrJyB0ZXh0YXJlYVtuYW1lPXRhcmVhXScpLmNzcygnb3V0bGluZScsJyMwMDkxZmYgc29saWQgM3B4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdtYWlsc2VuZC5waHAnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJChyZWcpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VjY2Vzcy1tb2RhbFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCl7JChcIiNzdWNjZXNzLW1vZGFsXCIpLmZhZGVPdXQoXCJzbG93XCIpfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9

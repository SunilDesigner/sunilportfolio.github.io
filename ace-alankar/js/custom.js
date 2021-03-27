

// ========movement-slider=================
 $(document).ready(function() {
              $('#movement-slider').owlCarousel({
                loop: false,
                margin: 20,
				autoplay: false,
                autoplayTimeout: 10000,
				autoplayHoverPause:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 4,
					loop: false,
					margin: 15,
                    nav: true
                  },
                  600: {
                    items: 6,
                    nav: false
                  },
                  1000: {
                    items: 8,
                    nav: true,
                    loop: false,
                  }
                }
              })
            })




// ========post-slider=================
$('.owl-carousel.postcarousel').owlCarousel({
    loop:true,
	autoWidth:true,
    margin:15,
    nav:false,
	dots:false,
    startPosition: 1,
    responsive:{
        0:{
            items:2,
			center:true
        },
        600:{
            items:3,
			center:true
        },
        1000:{
            items:3
        }
    }
})
	



//========ssticky nav================
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
       $('.sticky').addClass('fixi');
    } else {
       $('.sticky').removeClass('fixi');
    }
});


//========close-modal================
$(document).ready(function(){
  $(".btnclose1").click(function(){
    $("#myLogin").hide();
	$(".modal-backdrop").hide();
  });
	
});

$(document).ready(function(){
  $(".number-submit").click(function(){
    $("#myMobile").hide();
	$(".modal-backdrop").hide();
  });
	
});


//=================switchOnOff========

$('.switch3 input').on('change', function(){
  var dad = $(this).parent();
  if($(this).is(':checked'))
    dad.addClass('switch3-checked');
  else
    dad.removeClass('switch3-checked');
});

//otp

$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});


//moretab-mobile

function MoreopenNav() {
  document.getElementById("moreMyNav").style.display = "block";
}

function MorecloseNav() {
  document.getElementById("moreMyNav").style.display = "none";
}
//end-moretab-mobile

//moretab-mobile
var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("mobile-bottom-nav__item--active");
		})
		this.classList.add("mobile-bottom-nav__item--active");
	});
});

//===============openMyaccontpage==================


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

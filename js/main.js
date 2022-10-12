// 팝업창
$(document).ready(function() {
  $('html, body').animate({scrollTop:0},100);
  $('html, body').css({'overflow-y': 'hidden'});
  $('#pop_Close').click(function() {
    $('#popup').fadeOut(200);
    $('html, body').css({'overflow-y': ''});
  })
})

// 메뉴 클릭시 해당페이지 이동
$('.gnb li > a').click(function (){
  $('html, body').animate({scrollTop:$(this.hash).offset().top}, 200);
})

// 위로 올라가기
$(window).scroll(function(){
	if ($(this).scrollTop() > 700){
		$('.docu_goTop').fadeIn(200);
	} else{
		$('.docu_goTop').fadeOut(200);
	}
});
$('.docu_goTop').click(function(){
	$('html, body').animate({scrollTop:0},300);
	return false;
});

// 모달창
$('.modal_Open').click(function(){
  let modalList = $(this).attr("href")
  $(modalList).fadeIn(200);
  $('.bodyOpacity, .modal').fadeIn(200);
  $('html, body').css({'overflow-y': 'hidden'});
})
$('.modal, .modal_Close').click(function(){
  // e.preventDefault();
  $('.bodyOpacity, .modal').fadeOut(200);
  $('.modalContent').fadeOut(200);
  $('html, body').css({'overflow-y': ''});
})

// function openModal(modalname){
//   document.get
//   $(".modal").fadeIn(300);
//   $("."+modalname).fadeIn(300);
// }
// $('.modal_Close').click(function(e){
//     e.preventDefault();
//     $('.modal').fadeOut(200)
//     $('html, body').css({'overflow-y': ''})
//   })
// $("#modal, .close").on('click',function(){
//   $("#modal").fadeOut(300);
//   $(".modal-con").fadeOut(300);
// });

// javascript:openModal('modal_Open_12');


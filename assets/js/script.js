$(document).ready(function(){
  $('.dim').on('click', function(){
    if($('#menu-toggle').prop('checked')) {
      $('#menu-toggle').prop('checked', false);
    }
    // 인풋 체크 속성 바꿔주기
  });


  var windowWidth = $(window).width();
  

  // kv
  $('.kv .slider').slick({
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var placeholderTarget = $('.input-list input[type="text"]'); 

  //포커스시 
  placeholderTarget.on('focus', function(){ 
    $(this).siblings('label').fadeOut('fast'); 
  }); 
  //포커스아웃시 
  placeholderTarget.on('focusout', function(){ 
    if($(this).val() == ''){ 
      $(this).siblings('label').fadeIn('fast'); 
    } 
  });

  // 체크박스 하나만 선택
  $('input[type="checkbox"][name="gnaln"]').click(function(){
    if ($(this).prop('checked')) {
      $('input[type="checkbox"][name="gnaln"]').prop('checked', false);
      $(this).prop('checked', true);
      $(this).addClass('checked');
    }
  });


  
  $('.gnb .dep1 > a, .quick > a').click(function(e){
    if(this.hash) {
      e.preventDefault();

      var targetPos = $($(this).attr('href')).offset().top;
      $('.body, html').animate({'scrollTop': targetPos});
    
    } 
  });
  $('.gnb .dep1 > a').click(function(){
    $('input[name="menu-toggle"]').prop('checked', false);
  });


  // 퀵버튼 숨기기
  var isVisible = false;

  $('.quick').hide();
  $(window).on('scroll',function() {
    if (checkVisible($('#form'))&&!isVisible) { 
      $('.quick').hide();
      isVisible=true;
    } 
    
    else if (checkVisible($('.kv'))&&!isVisible) {
      $('.quick').hide();
      isVisible=true;
    } 
    else
      $('.quick').show();
      isVisible=false;
  });

  function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
  }


  // modal
  $('.modal1').hide();
  // modal-close
  $('.modal-close, .modal-btn .btn-cancel').click(function(){
    $('.modal1').hide();
    $('.modal1 .modal-img').removeClass('type2 type1 type3');
  });
  
  // 포커스 스크롤이동 해제
  $('textarea[name=f-txt]').focus(function(){
    var focusPos = $('.sec-input').offset().top;
    $('.body, html').animate({'scrollTop': focusPos});
  });
  // input value 테스트
  
  $('.btn-send').on('click', function(){
    // formCheck();
    if(formCheck()) {
      $('.modal1 .modal-img').addClass(f_chk);
      $('input[name=m-name]').attr('value', f_name);
      $('input[name=m-tel]').attr('value', f_tel);
      $('input[name=m-to]').attr('value', f_to);
      $('.modal-letter .input-content').html(f_txt);
      $('input[name= m-from]').attr('value', f_from);
  
      $('.modal1').show();
    } 
  });

    // jQuery 유효성 검사
    // jQuery 값 가져오기
    // 웹모달2
    $('.modal2').hide();
    $('.modal1 .btn-done').click(function(){
      $('.modal1').hide();
      $('.modal2').show();
    });
    $('.modal2 .modal-close, .modal2 .modal-btn').click(function(){
      $('.modal2').hide();
    });
  // 유효성 검사 함수 정의
    var f_name; 
    var f_tel;
    var f_to;
    var f_txt; 
    var f_from; 
    var f_chk; 
    var f_chk2; 
  function formCheck(){
    f_name = $('input[name=f-name]').val();
    f_tel = $('input[name=f-tel]').val();
    f_to = $('input[name=f-to]').val();
    f_txt = $('#f-txt').val();
    f_from = $('input[name=f-from]').val();
    f_chk = $('input[name=gnaln]:checked').val();
    f_chk2 = $('input[name=agree]:checked').val();
    if(!f_chk) {
      alert("선물할 약을 선택해주세요.")
      return false
    }
    if(f_name == "") {
      alert("성함을 입력해주세요.")
      return false
    }
    if(f_tel == "") {
      alert("번호를 입력해주세요.")
      return false
    }
    if(f_to == "") {
      alert("받으실 분의 성함을 입력해주세요.")
      return false
    }
    if(f_txt == "") {
      alert("편지를 작성해주세요.")
      return false
    }
    if(f_from == "") {
      alert("보내시는 분의 성함을 입력해주세요.")
      return false
    }
    if(!f_chk2) {
      alert("개인정보 수집에 동의해주세요.")
      return false
    }
    return true;
  };
});
let clock = document.getElementById("clock")

function getClock() {
  let now = new Date();
  let H = now.getHours();
  let M = now.getMinutes();
  let S = now.getSeconds();
  clock.innerText = `${H} : ${M} : ${S}`
  if (S < 10) {
    clock.innerText = `${H} : ${M} : ${"0" + S}`
  } 
  if (M < 10) {
    clock.innerText = `${H} : ${"0" + M} : ${S}`
  }
  if (H < 10) {
    clock.innerText = `${"0" + H} : ${M} : ${S}`
  }
};
getClock();
setInterval(getClock, 1000);

$("#morning").click(function() {
  $("#bgc-img").css({"background":"url(./images/bg_morning.jpg)"});
  $("#ph-img").css({"background":"url(./images/phone_morning.png)"});
  $("#morning, .morning").addClass('active');
  $("#afternoon, #evening, #night").removeClass('active');
  $(".afternoon, .evening, .night").removeClass('active');
  $("#logo").attr("src", "./images/logo_b.png");
  $(".gnb-item a, .text1, h1").css("color", "#000");
});

$("#afternoon").click(function() {
  $("#bgc-img").css({"background":"url(./images/bg_afternoon.jpg)"});
  $("#ph-img").css({"background":"url(./images/phone_afternoon.png)"});
  $("#afternoon, .afternoon").addClass('active');
  $("#morning, #evening, #night").removeClass('active');
  $(".morning, .evening, .night").removeClass('active');
  $("#logo").attr("src", "./images/logo_b.png");
  $(".gnb-item a, .text1, h1").css("color", "#000");
});

$("#evening").click(function() {
  $("#bgc-img").css({"background":"url(./images/bg_evening.jpg)"});
  $("#ph-img").css({"background":"url(./images/phone_evening.png)"});
  $("#evening, .evening").addClass('active');
  $("#morning, #afternoon, #night").removeClass('active');
  $(".morning, .afternoon, .night").removeClass('active');
  $("#logo").attr("src", "./images/logo_b.png");
  $(".gnb-item a, .text1, h1").css("color", "#000");
});

$("#night").click(function() {
  $("#bgc-img").css({"background":"url(./images/bg_night.jpg)"});
  $("#ph-img").css({"background":"url(./images/phone_night.png)"});
  $("#night, .night").addClass('active');
  $("#morning, #afternoon, #evening").removeClass('active');
  $(".morning, .afternoon, .evening").removeClass('active');
  $("#logo").attr("src", "./images/logo_w.png");
  $(".gnb-item a, .text1, h1").css("color", "#fff");
});
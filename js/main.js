$(function() {
  $(".complement-mini").on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
      o = $(t).attr("src"),
      n = $("#img-complement-mini-active").attr("src");
    $(t).attr("src", n), $("#img-complement-mini-active").attr("src", o), $("#complementMiniModalImage").attr("src", o), console.log(n), console.log(o)
  });
  var e = 2;
  $("#js-carousel-complement-mini").on("click", function(t) {
    switch (t.preventDefault(), console.log(e), e) {
      case 1:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") && $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.1.jpg"), e += 1;
        break;
      case 2:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") || $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.2.png"), e += 1;
        break;
      case 3:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") && $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.3.jpg"), e += 1;
        break;
      case 4:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") && $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.4.jpg"), e += 1;
        break;
      case 5:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") || $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.5.jpg"), e += 1;
        break;
      case 6:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") || $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.6.jpg"), e += 1;
        break;
      case 7:
        $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-mini-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-mini-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-mini-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-mini-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementMiniModalImage").hasClass("complement-modal-square-image") || $("#complementMiniModalImage").toggleClass("complement-modal-square-image"), $("#complementMiniModalImage").attr("src", "i/favicons/1.7.jpg"), e = 1
    }
  }), $(".complement-standard").on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
      o = $(t).attr("src"),
      n = $("#img-complement-standard-active").attr("src");
    $(t).attr("src", n), $("#img-complement-standard-active").attr("src", o), $("#complementStandardModalImage").attr("src", o)
  });
  var t = 2;
  $("#js-carousel-complement-standard").on("click", function(e) {
    switch (e.preventDefault(), t) {
      case 1:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") && $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.1.jpg"), t += 1;
        break;
      case 2:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") || $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.2.png"), t += 1;
        break;
      case 3:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") && $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.3.jpg"), t += 1;
        break;
      case 4:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") && $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.4.jpg"), t += 1;
        break;
      case 5:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") || $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.5.jpg"), t += 1;
        break;
      case 6:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") || $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.6.jpg"), t += 1;
        break;
      case 7:
        $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-standard-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-standard-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-standard-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-standard-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementStandardModalImage").hasClass("complement-modal-square-image") || $("#complementStandardModalImage").toggleClass("complement-modal-square-image"), $("#complementStandardModalImage").attr("src", "i/favicons/2.7.jpg"), t = 1
    }
  }), $(".complement-optimal").on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
      o = $(t).attr("src"),
      n = $("#img-complement-optimal-active").attr("src");
    $(t).attr("src", n), $("#img-complement-optimal-active").attr("src", o), $("#complementOptimalModalImage").attr("src", o)
  });
  var o = 2;
  $("#js-carousel-complement-optimal").on("click", function(e) {
    switch (e.preventDefault(), o) {
      case 1:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") && $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.1.jpg"), o += 1;
        break;
      case 2:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") || $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.2.png"), o += 1;
        break;
      case 3:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") && $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.3.jpg"), o += 1;
        break;
      case 4:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") && $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.4.jpg"), o += 1;
        break;
      case 5:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") || $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.5.jpg"), o += 1;
        break;
      case 6:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") || $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.6.jpg"), o += 1;
        break;
      case 7:
        $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-optimal-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-optimal-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-optimal-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-optimal-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementOptimalModalImage").hasClass("complement-modal-square-image") || $("#complementOptimalModalImage").toggleClass("complement-modal-square-image"), $("#complementOptimalModalImage").attr("src", "i/favicons/3.7.jpg"), o = 1
    }
  }), $(".complement-huge").on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
      o = $(t).attr("src"),
      n = $("#img-complement-huge-active").attr("src");
    $(t).attr("src", n), $("#img-complement-huge-active").attr("src", o), $("#complementHugeModalImage").attr("src", o)
  });
  var n = 2;
  $("#js-carousel-complement-huge").on("click", function(e) {
    switch (e.preventDefault(), n) {
      case 1:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.1.jpg"), n += 1;
        break;
      case 2:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") || $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") || $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.2.png"), n += 1;
        break;
      case 3:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.3.jpg"),
          n += 1;
        break;
      case 4:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.4.jpg"), n += 1;
        break;
      case 5:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.5.jpg"), n += 1;
        break;
      case 6:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.6.jpg"), n += 1;
        break;
      case 7:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.7.jpg"), n += 1;
        break;
      case 8:
        $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-image") || $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-image"), $("#js-complement-huge-modal-dialog").hasClass("complement-modal-dialog-square-image") && $("#js-complement-huge-modal-dialog").toggleClass("complement-modal-dialog-square-image"), $("#js-complement-huge-modal-content").hasClass("complement-modal-content-square-image") && $("#js-complement-huge-modal-content").toggleClass("complement-modal-content-square-image"), $("#complementHugeModalImage").hasClass("complement-modal-square-image") && $("#complementHugeModalImage").toggleClass("complement-modal-square-image"), $("#complementHugeModalImage").attr("src", "i/favicons/4.8.jpg"), n = 1
    }
  }), $("#orderBackCallForm").on("submit", function(e) {
    e.preventDefault(), $("#orderCallForm").modal("hide"), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  }), $("#leave-order-form").on("submit", function(e) {
    e.preventDefault(), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  }), $("#form-order-mini-complement").on("submit", function(e) {
    e.preventDefault(), $("#complementMiniorderCallForm").modal("hide"), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  }), $("#form-order-standard-complement").on("submit", function(e) {
    e.preventDefault(), $("#complementStandardorderCallForm").modal("hide"), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  }), $("#form-order-optimal-complement").on("submit", function(e) {
    e.preventDefault(), $("#complementOptimalorderCallForm").modal("hide"), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  }), $("#form-order-huge-complement").on("submit", function(e) {
    e.preventDefault(), $("#complementHugeorderCallForm").modal("hide"), $("#thanksForOrder").modal("show");
    var t = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: t
    })
  })
});

console.log("here");
var imgs = $(".preview");
var msg = "Hover over an image below";
for (let i = 0; i < imgs.length; i++) {
$(imgs[i]).mouseover(function() {
$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
var alt = $("#image").text(imgs[i].alt);
console.log(alt)
})
$(imgs[i]).focus(function() {
$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
$("#image").text(imgs[i].alt);
})
$(imgs[i]).mouseout(function() {
$("#image").css("backgroundImage", "url('')");
$("#image").text(msg);
})
$(imgs[i]).blur(function() {
$("#image").css("backgroundImage", "url('')");
$("#image").text(msg);
})
$(imgs[i]).focus(function() {
    $("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
    $("#image").text(imgs[i].alt);
    })
    $(imgs[i]).focus(function() {
        $("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
        $("#image").text(imgs[i].alt);
        })
        $(imgs[i]).focus(function() {
            $("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
            $("#image").text(imgs[i].alt);
            })
}

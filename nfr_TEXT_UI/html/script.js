window.addEventListener('message', function(event) {
    if (event.data.action == "show") {
        $('.container').fadeIn(300)
        $('.key').html(event.data.key)
        $('.text').html(event.data.text)
} else if(event.data.action == "hide"){
    $('.container').fadeOut(300)
}
})
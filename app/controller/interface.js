$(document).ready(function() {

  function getPeeps() {
    viewPeep.getAllPeeps()

  }

  $('#view-single-form').submit(function(event) {
    console.log(1)
    event.preventDefault();
    viewPeep.getSinglePeep($('#view-single-form :input').val())
  })

  getPeeps()
})

let viewPeep = {



  formatPeepList: function(peeps) {
    let begin = '<ul>';
    let end = '</ul>';
    let list = [];
    peeps.forEach(each => list.push(`<li>${each.id} - ${each.body.slice(0, 25)}</li>`))
    $('#view-all').html(`${begin}${list.join('')}${end}`);
  },

  getAllPeeps: function() {
    Peep.getAllPeeps(viewPeep.formatPeepList, viewPeep.formatPeepOption);
  },

  formatPeepOption: function(peeps) {
    let options = [];
    peeps.forEach(each => options.push(`<option value="${each.id}">Peep: ${each.id}</option>`))
    $('#view-single-select').html(`${options.join('')}`);
  },

  getSinglePeep: function(id) {
    console.log(2)
    Peep.getSinglePeep(id, viewPeep.formatPeepView)
  },

  formatPeepView: function(peep) {
    console.log(7)
    $('#peep-preview').css({'width': '600px', 'padding-left':'10px', 'border':'solid #000000', 'box-shadow': '10px 12px 0px 1px #999999'})
    $('#peep-preview').html(`<p style='font-size: 14px'>Peep #${peep.id}</p><p style='font-size: 20px'>${peep.body}</p><p style='font-size: 12px'>User: ${peep.user} | Likes: ${peep.likes.length} | Date: ${peep.created_at}</p>`)
  }
}

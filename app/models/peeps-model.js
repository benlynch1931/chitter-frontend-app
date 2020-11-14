class Peep {


  constructor(id, body, created_at, updated_at, user, likes) {
    this.id = id;
    this.body = body;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user = user;
    this.likes = likes;
  }

  static getAllPeeps(callback1, callback2) {
    Peep.peepList = [];
    $.getJSON('https://chitter-backend-api-v2.herokuapp.com/peeps', function(data) {
      $.each(data, function(idx, info) {
        Peep.peepList.push(new Peep(info['id'], info['body'], info['created_at'], info['updated_at'], info['user'], info['likes']))
      });
      callback1(Peep.peepList);
      callback2(Peep.peepList);
    });
  }

  static getSinglePeep(peepID, format, callback = function(data) { Peep.singlePeep = data }) {
    console.log(3)
    $.getJSON('https://chitter-backend-api-v2.herokuapp.com/peeps', function(data) {
      console.log(4)
      $.each(data, function(idx, info) {
        if(info['id'] === parseInt(peepID)) {
          console.log(5)
          callback(new Peep(info['id'], info['body'], info['created_at'], info['updated_at'], info['user'], info['likes']))
        }
      });
      console.log(6)
      format(Peep.singlePeep)
    });
  }


}

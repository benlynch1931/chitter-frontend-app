 let firstPeep = {
   "id": 70,
   "body": "my first peep :)",
   "created_at": "2018-06-23T13:21:23.317Z",
   "updated_at": "2018-06-23T13:21:23.317Z",
   "user": {
     "id": 1,
     "handle": "kay"
   },
   "likes": [{
     "user": {
       "id": 1,
       "handle": "kay"
     }
   }]
 }


 describe("Peep", function() {
   var peep;
   beforeEach(function() {
     peep = new Peep;
   })

   it('can be instantiated', function() {
     expect(peep).toBeInstanceOf(Peep);
   })

   describe('#getAllPeeps', function() {

     it('can return list of peep from JSON', function() {
       expect(Peep.getAllPeeps()).toBeInstanceOf(Array);
     })

   })

   describe('#getSinglePeep', function() {

     it('can return specific peeep from JSON', function() {
       Peep.getSinglePeep(70)
       setTimeout(() => expect(Peep.singlePeep).toBeInstanceOf(Peep), 2000)
       setTimeout(() => expect(Peep.singlePeep.body).toEqual(firstPeep['body']), 2000)
     })
   })
 })

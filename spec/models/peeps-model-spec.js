describe("Peep", function() {
  var peep;
  beforeEach(function() {
    peep = new Peep;
  })

  it('can be instantiated', function() {
    expect(peep).toBeInstanceOf(Peep);
  })

  describe('getAllPeeps', function() {

    it('can be called', function() {
      expect(peep.getAllPeeps()).toEqual();
    })

  })
})



// $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
//     // JSON result in `data` variable
// });

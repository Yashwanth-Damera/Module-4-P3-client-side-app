QUnit.module('MAIN MODULE', {})  

/*QUnit.test('TEST', assert => {
    assert.expect(0);
    function CalculateArea(_Acircle) {
        return (valNum-32) / 1.8;
    } 
    
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(2);
       assert.equal( result, "-16.666666666666668", "2 fahrenheit should be -16.666666666666668 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(70);
       assert.equal( result, "21.11111111111111", "70 fahrenheit should be  21.11111111111111 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(5);
       assert.equal( result, "-15", "5 fahrenheit should be -15 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(100);
       assert.equal( result, "37.77777777777778", "100 fahrenheit should be 37.77777777777778 celcius." );
    });

    QUnit.test( "Test", function( assert ) {
        var result = temperatureConverter(46);
        assert.equal( result, "7.777777777777778", "46 fahrenheit should be 7.777777777777778 celcius." );
     });
     
})*/




QUnit.test('Test CalculateArea', assert => {
   assert.equal(areaCircle(4), 50.24, 'input1,radius=4')
   assert.equal(areaCircle(2), 12.56, 'input2,radius=2')
   assert.equal(areaCircle(1), 3.14, 'input3,radius=1',)
   assert.equal(areaCircle(9), 254.34, 'input4,radius=9')
   /*assert.equal(CalculateArea(1000, 70), 14.29, 'input 2')
   assert.equal(CalculateArea(62345.32,70.12), 889.12,'input 3')
   assert.equal(CalculateArea(0,1),0,'input4')
   assert.equal(CalculateArea(1,0),'Infinity','input5')*/
   /*assert.throws(
 function() {
      areaCircle("null")
     },
     "throws with just a message, not using the 'expected' argument"
   );*/
   //assert.throws(function () { areaCircle([]); }, new Error('The given argument is not a number'), 'Passing in array correctly raises an Error');
   assert.throws(function () { areaCircle(NaN) },new Error('The given argument is not a number'), 'Passing in null correctly raises');

   
 })
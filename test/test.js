var underscore = require( 'underscore' );
var Quackbaker = require( '../index' );
var assert = require( 'assert' );

describe( 'quackbaker', function(){ 
  var interfaces = {
    Point: {
      x: 'Number',
      y: 'Number'
    }
  };
  
  var mixins = {
    Point: {
      ctor: function(){
        return {
          x: 0,
          y: 0
        };
      },
      square: function( point ) {
        return {
          x: point.x * point.x,
          y: point.y * point.y
        };
      },
      add: function( point, value ){
        return {
          x: point.x + value,
          y: point.y + value
        };
      }
    }
  };
  
  var baker = new Quackbaker( interfaces, mixins );
  var Point = baker.Point;
  var p = {
    x: 5,
    y: 2.5
  };
  
  var point;
  
  describe( 'baking', function() {        
    it( 'should be able to new up a Point without args', function(){      
      point = new Point();
      assert( point.x === 0 && point.y === 0 );
    });
  
    it( 'should be able to new up a Point with args', function(){      
      point = new Point( p );
      assert( point.x === 5 && point.y === 2.5 );
    });
    
    it( 'should be able to call functions on point', function(){      
      point = new Point( p ).square();    
      assert( point.x === 25 && point.y === 6.25 );
    });   
    
    it( 'should be able to call functions on point with arguments', function(){      
      point = new Point( p ).add( 1 );
      assert( point.x === 6 && point.y === 3.5 );
    });    
  });  
});
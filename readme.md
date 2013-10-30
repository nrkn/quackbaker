/*
quackbaker
*/

var interfaces = {
  Point: {
    x: 'Number',
    y: 'Number'
  },
  Line: {
    start: 'Point',
    end: 'Point'
  }
};

var mixins = {
  Number: {
    square: function( value ){
      return value * value;
    }
  },
  Point: {
    square: function( point ){
      return {
        x: _( point.x ).square(),
        y: _( point.y ).square()
      };
    }
  },
  Line: {
    square: function( line ){
      return {
        start: _( line.start ).square(),
        end: _( line.end ).square()
      }
    }
  }
};

var bakery = new QuackBaker( interfaces, mixins );

var p = new bakery.Point({x: 5, y: 2 });

console.log( p.square() ); //{ x: 25, y: 4 }

var Point = bakery.Point;

var p2 = new Point({ x: 5, y: 2 });

var q = new bakery.Number( 10.5 );

console.log( q == 10.5 );  //true
console.log( q === 10.5 ); //false
console.log( q.valueOf() === 10.5 ); //true
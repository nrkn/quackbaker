```javascript
/*
quackbaker
*/

var interfaces = {
  Point: {
    x: 'Number',
    y: 'Number'
  }
};

var mixins = {
  Point: {
    ctor: function( point ){
      point.x = point.y = 0;
    },
    square: function( point ){
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

var bakery = new QuackBaker( interfaces, mixins );
var Point = bakery.Point;
var p = new Point({x: 5, y: 2 });

console.log( p.square() ); // { x: 25, y: 4 }
console.log( p.add( 0.5 ) ); // { x: 5.5, y: 2.5 }

var empty = new Point();

console.log( empty ); // { x: 0, y: 0 }
```
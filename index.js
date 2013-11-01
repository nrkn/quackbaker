var _ = require( 'underscore' );
var Interfascist = require( 'interfascist' );
(function(){
  'use strict';
  
  function Quackbaker( interfaces, mixins ) {
    this.interfaces = interfaces;
    this.mixins = mixins;
    this.validator = new Interfascist( interfaces );
    var self = this;
    
    _( this.interfaces ).each( function( props, name ){
      self[ name ] = function( obj ){
        var ctor = this;
        
        if( _( self.mixins[ name ].ctor ).isFunction() ){
          self.mixins[ name ].ctor( ctor );
        }
        
        if( !_( obj ).isUndefined() && self.validator.validate( obj, name ) ){ 
          _( props.keys ).each( function( value, key ){         
            ctor[ key ] = obj[ key ];
          });
        }
        
        _( self.mixins[ name ] ).each( function( value, key  ){
          if( key === 'ctor' ) {
            return;
          }
          
          ctor[ key ] = function(){
            return value.apply( null, [ ctor ].concat( _( arguments ).toArray() ) );
          };
        });
      };
    });
  }

  module.exports = Quackbaker;
})();
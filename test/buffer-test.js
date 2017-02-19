'use strict';
const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const EventEmitter = require('events').EventEmitter;
const bmpReader = require('../index.js');


describe('EventEmitter', function(){
  describe('#emit-event', function(){
    it('should invoke callback chain', function(done){
      var spy = sinon.spy();
      var emitter = new EventEmitter;

      emitter.on('getFile', spy);
      emitter.emit('getFile');
      // expect(spy).to.equal.true;
      expect(spy).to.not.throw(Error);
      done();
    });
  });
});


//this is hell
// describe('Event Emitter', function(){
//   describe('event is being emitted', function(){
//       it('should return error for no callback', function(done){
//         var spy = sinon.spy();
//         var emitter = new EventEmitter;
//         emitter.on('getFile', spy);
//         emitter.emit('getFile');
//         expect(spy).to.contain('bird')
//         done();
//         });
//       });
//   });

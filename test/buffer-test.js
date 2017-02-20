'use strict';

const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const EventEmitter = require('events').EventEmitter;
const bmpReader = require(`${__dirname}/../index.js`);
const expect = require('chai').expect;
const fs = require('fs');
const originalImage = fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data){
  if(err) throw err;
  return data;
});
const bmpArray = require('../models/bitmap-object.js').bmpArray;

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

describe('Buffer tests', function() {
  describe('bitmap array', function(){
    it('should be populated with image objects', function(done){
      console.log(bmpArray.length);
      expect(bmpArray.length > 0).to.be.equal(true);
      done();
    });
  });
  describe('Green scale image', function(){
    it('should be generated', function(done){
      fs.readFile(`${__dirname}/../assets/green.bmp`, function(err, data){
        console.log(err);
        expect(err).to.be.equal(null);
        expect(Buffer.isBuffer(data)).to.be.equal(true);
        done();
      });
    });
    it('should be the same size as the original image', function(done){
      fs.readFile(`${__dirname}/../assets/green.bmp`, function(err, data){
        expect(err).to.be.equal(null);
        console.log(data.length);
        expect(data.length).to.be.equal(11078);
        done();
      });
    });
  });
  describe('Inverted image', function(){
    it('should be generated', function(done){
      fs.readFile(`${__dirname}/../assets/dana-bitmap.bmp`, function(err, data){
        expect(err).to.equal(null);
        expect(Buffer.isBuffer(data)).to.be.equal(true);
        done();
      });
    });
    it('should be the same size as the original image', function(done){
      fs.readFile(`${__dirname}/../assets/dana-bitmap.bmp`, function(err, data){
        expect(err).to.equal(null);
        expect(data.length).to.be.equal(11078);
        done();
      });
    });
  });
  describe('Gray scale image', function(){
    it('should be generated', function(done){
      fs.readFile(`${__dirname}/../assets/gray-scale.bmp`, function(err, data){
        expect(err).to.equal(null);
        expect(Buffer.isBuffer(data)).to.be.equal(true);
        done();
      });
    });
    it('should be the same size as the original image', function(done){
      fs.readFile(`${__dirname}/../assets/gray-scale.bmp`, function(err, data){
        expect(err).to.equal(null);
        expect(data.length).to.be.equal(11078);
        done();
      });
    });
  });
});

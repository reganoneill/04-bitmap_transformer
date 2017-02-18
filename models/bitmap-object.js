'use strict';

module.exports = exports = {};

// exports.newColorArray = [];

exports.bmpArray = [];

exports.ImageObj = function(buffer) {
  this.type = buffer.toString('utf-8', 0, 2);
  this.headerSize = buffer.readInt32LE(14);
  this.imgWidth = buffer.readInt32LE(18);
  this.imgHeight = buffer.readInt32LE(22);
  this.colorPlanes = buffer.readInt16LE(26);
  this.bitsPerPixel = buffer.readInt16LE(28);
  this.imgSize = buffer.readInt32LE(34);
  this.heightRez = buffer.readInt32LE(38);
  this.vertRez = buffer.readInt32LE(42);
  this.numColors = buffer.readInt32LE(46);
  this.imptColors = buffer.readInt32LE(50);
  this.metaData = buffer.slice(0, 54);
  this.colorTable = buffer.slice(54, 1078);
  this.pixelArray = buffer.slice(1078, 11078);
  exports.bmpArray.push(this);
  // this.colorsArray = buffer.slice('54, 1079').reduce(function(acc, ele) {
  //   for (let i = 54; i < 257; i += 4) {
  //     acc.push(ele.readInt32LE(i));
  //   }
  //   return acc;
  // }, []);
};

// exports.ImageObj.prototype.getNewColors = function() {
//   exports.ImageObj.colorTable.match(/\w{8}/g).forEach(grp => (exports.newColorArray).push(grp.replace(/^\w{2}/g, '00')));
// };

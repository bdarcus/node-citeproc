
/**
 * Module dependencies.
 */

var citeproc = require('citeproc')
  , should = require('should');

module.exports = {
  'test .version': function(){
    citeproc.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};
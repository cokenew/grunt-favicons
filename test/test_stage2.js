'use strict';

var fs = require('fs');
var grunt = require('grunt');
var sizeOf = require('image-size');
var crypto = require('crypto');

var path = 'test/out';

exports.favicons = {

    // favicon.ico exists
    icoExists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/favicon.ico");
        test.ok(exists, 'favicon.ico does not exist.');
        test.done();
    },

    // true color favicon.ico size = 15086 bytes
    icoSize: function(test) {
        test.expect(1);
        var icoSize = fs.statSync(path + "/favicon.ico").size;
        test.ok(icoSize === 15086, 'favicon.ico incorrect');
        test.done();
    },

    // favicon.png exists
    pngExists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/favicon.png");
        test.ok(exists, 'favicon.png does not exist.');
        test.done();
    },

    // favicon.png dimensions
    pngDim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/favicon.png");
        var pass = dimensions.width === 64 && dimensions.height === 64;
        test.ok(pass, 'favicon.png is not 64x64.');
        test.done();
    },

    // apple-touch-icon.png exists
    atiExists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/apple-touch-icon.png");
        test.ok(exists, 'apple-touch-icon.png does not exist.');
        test.done();
    },

    // apple-touch-icon.png dimensions
    atiDim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/apple-touch-icon.png");
        var pass = dimensions.width === 57 && dimensions.height === 57;
        test.ok(pass, 'apple-touch-icon.png is not 57x57.');
        test.done();
    },

    // apple-touch-icon-72x72.png exists
    ati72Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/apple-touch-icon-72x72.png");
        test.ok(exists, 'apple-touch-icon-72x72.png does not exist.');
        test.done();
    },

    // apple-touch-icon-72x72.png dimensions
    ati72Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/apple-touch-icon-72x72.png");
        var pass = dimensions.width === 72 && dimensions.height === 72;
        test.ok(pass, 'apple-touch-icon-72x72.png is not 72x72.');
        test.done();
    },

    // apple-touch-icon-114x114.png exists
    ati114Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/apple-touch-icon-114x114.png");
        test.ok(exists, 'apple-touch-icon-114x114.png does not exist.');
        test.done();
    },

    // apple-touch-icon-114x114.png dimensions
    ati114Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/apple-touch-icon-114x114.png");
        var pass = dimensions.width === 114 && dimensions.height === 114;
        test.ok(pass, 'apple-touch-icon-114x114.png is not 114x114.');
        test.done();
    },

    // apple-touch-icon-120x120.png exists
    ati120Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/apple-touch-icon-120x120-precomposed.png");
        test.ok(exists, 'apple-touch-icon-120x120-precomposed.png does not exist.');
        test.done();
    },

    // apple-touch-icon-120x120.png dimensions
    ati120Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/apple-touch-icon-120x120-precomposed.png");
        var pass = dimensions.width === 120 && dimensions.height === 120;
        test.ok(pass, 'apple-touch-icon-120x120-precomposed.png is not 120x120.');
        test.done();
    },

    // apple-touch-icon-144x144.png exists
    ati144Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/apple-touch-icon-144x144.png");
        test.ok(exists, 'apple-touch-icon-144x144.png does not exist.');
        test.done();
    },

    // apple-touch-icon-144x144.png dimensions
    ati144Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/apple-touch-icon-144x144.png");
        var pass = dimensions.width === 144 && dimensions.height === 144;
        test.ok(pass, 'apple-touch-icon-144x144.png is not 144x144.');
        test.done();
    },

    // firefox-icon-16x16.png exists
    fx16Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-16x16.png");
        test.ok(exists, 'firefox-icon-16x16.png does not exist.');
        test.done();
    },

    // firefox-icon-16x16.png dimensions
    fx16Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-16x16.png");
        var pass = dimensions.width === 16 && dimensions.height === 16;
        test.ok(pass, 'firefox-icon-16x16.png is not 16x16.');
        test.done();
    },

    // firefox-icon-30x30.png exists
    fx30Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-30x30.png");
        test.ok(exists, 'firefox-icon-30x30.png does not exist.');
        test.done();
    },

    // firefox-icon-30x30.png dimensions
    fx30Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-30x30.png");
        var pass = dimensions.width === 30 && dimensions.height === 30;
        test.ok(pass, 'firefox-icon-30x30.png is not 30x30.');
        test.done();
    },

    // firefox-icon-32x32.png exists
    fx32Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-32x32.png");
        test.ok(exists, 'firefox-icon-32x32.png does not exist.');
        test.done();
    },

    // firefox-icon-32x32.png dimensions
    fx32Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-32x32.png");
        var pass = dimensions.width === 32 && dimensions.height === 32;
        test.ok(pass, 'firefox-icon-32x32.png is not 32x32.');
        test.done();
    },

    // firefox-icon-48x48.png exists
    fx48Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-48x48.png");
        test.ok(exists, 'firefox-icon-48x48.png does not exist.');
        test.done();
    },

    // firefox-icon-48x48.png dimensions
    fx48Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-48x48.png");
        var pass = dimensions.width === 48 && dimensions.height === 48;
        test.ok(pass, 'firefox-icon-48x48.png is not 48x48.');
        test.done();
    },

    // firefox-icon-60x60.png exists
    fx60Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-60x60.png");
        test.ok(exists, 'firefox-icon-60x60.png does not exist.');
        test.done();
    },

    // firefox-icon-60x60.png dimensions
    fx60Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-60x60.png");
        var pass = dimensions.width === 60 && dimensions.height === 60;
        test.ok(pass, 'firefox-icon-60x60.png is not 60x60.');
        test.done();
    },

    // firefox-icon-64x64.png exists
    fx64Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-64x64.png");
        test.ok(exists, 'firefox-icon-64x64.png does not exist.');
        test.done();
    },

    // firefox-icon-64x64.png dimensions
    fx64Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-64x64.png");
        var pass = dimensions.width === 64 && dimensions.height === 64;
        test.ok(pass, 'firefox-icon-64x64.png is not 64x64.');
        test.done();
    },

    // firefox-icon-128x128.png exists
    fx128Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-128x128.png");
        test.ok(exists, 'firefox-icon-128x128.png does not exist.');
        test.done();
    },

    // firefox-icon-128x128.png dimensions
    fx128Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-128x128.png");
        var pass = dimensions.width === 128 && dimensions.height === 128;
        test.ok(pass, 'firefox-icon-128x128.png is not 128x128.');
        test.done();
    },

    // firefox-icon-256x256.png exists
    fx256Exists: function(test) {
        test.expect(1);
        var exists = fs.existsSync(path + "/firefox-icon-256x256.png");
        test.ok(exists, 'firefox-icon-256x256.png does not exist.');
        test.done();
    },

    // firefox-icon-256x256.png dimensions
    fx256Dim: function(test) {
        test.expect(1);
        var dimensions = sizeOf(path + "/firefox-icon-256x256.png");
        var pass = dimensions.width === 256 && dimensions.height === 256;
        test.ok(pass, 'firefox-icon-256x256.png is not 256x256.');
        test.done();
    },

    // firefox manifest test hashsum
    manifestsum: function(test) {
        test.expect(1);
        var original = crypto.createHash('sha1').update(grunt.file.read(path + '/manifest.webapp')).digest('hex');
        test.ok(original === '3d66ae4293edb4efba5dd85869d23f8260c30c67', 'firefox manifest hashsum not valid');
        test.done();
    },

    // html test hashsum
    htmlsum: function(test) {
        test.expect(1);
        var original = crypto.createHash('sha1').update(grunt.file.read(path + '/test.html')).digest('hex');
        test.ok(original === '81c1a232b44c22ef54348b13b61febaa38d4c55b', 'html hashsum not valid');
        test.done();
    }

};

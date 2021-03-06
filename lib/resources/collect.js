// Generated by CoffeeScript 1.10.0
(function() {
  var Base, Collect,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  Collect = (function(superClass) {
    extend(Collect, superClass);

    Collect.prototype.slug = "collect";

    Collect.prototype.prefix = "/collects";

    function Collect(site) {
      Collect.__super__.constructor.call(this, site);
    }

    return Collect;

  })(Base);

  module.exports = Collect;

}).call(this);

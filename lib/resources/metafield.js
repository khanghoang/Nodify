// Generated by CoffeeScript 1.10.0
(function() {
  var BaseChild, Metafield,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseChild = require('./base_child');

  Metafield = (function(superClass) {
    extend(Metafield, superClass);

    Metafield.prototype.slug = "metafield";

    Metafield.prototype.child = "/metafields";

    function Metafield(parent, site) {
      this.parent = parent;
      Metafield.__super__.constructor.call(this, site);
    }

    return Metafield;

  })(BaseChild);

  module.exports = Metafield;

}).call(this);

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Norm) {
      root.Norm = {};
    }
    root.Norm.Empty = factory(root.Norm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Empty model module.
   * @module model/Empty
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>Empty</code>.
   * @alias module:model/Empty
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Empty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Empty} obj Optional instance to populate.
   * @return {module:model/Empty} The populated <code>Empty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));



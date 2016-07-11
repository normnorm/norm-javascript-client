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
    root.Norm.Error = factory(root.Norm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Integer} code
   */
  exports.prototype['code'] = undefined;




  return exports;
}));



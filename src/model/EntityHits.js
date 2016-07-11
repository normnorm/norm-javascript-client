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
    root.Norm.EntityHits = factory(root.Norm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EntityHits model module.
   * @module model/EntityHits
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>EntityHits</code>.
   * @alias module:model/EntityHits
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EntityHits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityHits} obj Optional instance to populate.
   * @return {module:model/EntityHits} The populated <code>EntityHits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));



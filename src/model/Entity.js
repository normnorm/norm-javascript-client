(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EntityHits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityHits'));
  } else {
    // Browser globals (root is window)
    if (!root.Norm) {
      root.Norm = {};
    }
    root.Norm.Entity = factory(root.Norm.ApiClient, root.Norm.EntityHits);
  }
}(this, function(ApiClient, EntityHits) {
  'use strict';




  /**
   * The Entity model module.
   * @module model/Entity
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entity} obj Optional instance to populate.
   * @return {module:model/Entity} The populated <code>Entity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('took')) {
        obj['took'] = ApiClient.convertToType(data['took'], 'Integer');
      }
      if (data.hasOwnProperty('timed_out')) {
        obj['timed_out'] = ApiClient.convertToType(data['timed_out'], 'Boolean');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
      if (data.hasOwnProperty('max_score')) {
        obj['max_score'] = ApiClient.convertToType(data['max_score'], 'Number');
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = ApiClient.convertToType(data['hits'], [EntityHits]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} took
   */
  exports.prototype['took'] = undefined;
  /**
   * @member {Boolean} timed_out
   */
  exports.prototype['timed_out'] = undefined;
  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Number} max_score
   */
  exports.prototype['max_score'] = undefined;
  /**
   * @member {Array.<module:model/EntityHits>} hits
   */
  exports.prototype['hits'] = undefined;




  return exports;
}));



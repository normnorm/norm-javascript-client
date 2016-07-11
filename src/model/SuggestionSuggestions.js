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
    root.Norm.SuggestionSuggestions = factory(root.Norm.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SuggestionSuggestions model module.
   * @module model/SuggestionSuggestions
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>SuggestionSuggestions</code>.
   * @alias module:model/SuggestionSuggestions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SuggestionSuggestions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestionSuggestions} obj Optional instance to populate.
   * @return {module:model/SuggestionSuggestions} The populated <code>SuggestionSuggestions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'String');
      }
      if (data.hasOwnProperty('term')) {
        obj['term'] = ApiClient.convertToType(data['term'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} term
   */
  exports.prototype['term'] = undefined;




  return exports;
}));



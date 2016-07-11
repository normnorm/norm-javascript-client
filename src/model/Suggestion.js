(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SuggestionSuggestions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuggestionSuggestions'));
  } else {
    // Browser globals (root is window)
    if (!root.Norm) {
      root.Norm = {};
    }
    root.Norm.Suggestion = factory(root.Norm.ApiClient, root.Norm.SuggestionSuggestions);
  }
}(this, function(ApiClient, SuggestionSuggestions) {
  'use strict';




  /**
   * The Suggestion model module.
   * @module model/Suggestion
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new <code>Suggestion</code>.
   * @alias module:model/Suggestion
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Suggestion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Suggestion} obj Optional instance to populate.
   * @return {module:model/Suggestion} The populated <code>Suggestion</code> instance.
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
      if (data.hasOwnProperty('sum_other_doc_count')) {
        obj['sum_other_doc_count'] = ApiClient.convertToType(data['sum_other_doc_count'], 'Integer');
      }
      if (data.hasOwnProperty('suggestions')) {
        obj['suggestions'] = ApiClient.convertToType(data['suggestions'], [SuggestionSuggestions]);
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
   * @member {Integer} sum_other_doc_count
   */
  exports.prototype['sum_other_doc_count'] = undefined;
  /**
   * @member {Array.<module:model/SuggestionSuggestions>} suggestions
   */
  exports.prototype['suggestions'] = undefined;




  return exports;
}));



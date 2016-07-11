(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Empty', 'model/Entity', 'model/Error', 'model/Suggestion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Empty'), require('../model/Entity'), require('../model/Error'), require('../model/Suggestion'));
  } else {
    // Browser globals (root is window)
    if (!root.Norm) {
      root.Norm = {};
    }
    root.Norm.DefaultApi = factory(root.Norm.ApiClient, root.Norm.Empty, root.Norm.Entity, root.Norm.Error, root.Norm.Suggestion);
  }
}(this, function(ApiClient, Empty, Entity, Error, Suggestion) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 2016-06-27T20:26:16Z
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the entitiesAllIndexesOptions operation.
     * @callback module:api/DefaultApi~entitiesAllIndexesOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Empty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~entitiesAllIndexesOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Empty}
     */
    this.entitiesAllIndexesOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Empty;

      return this.apiClient.callApi(
        '/entities/all/{indexes}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the entitiesAllIndexesPost operation.
     * @callback module:api/DefaultApi~entitiesAllIndexesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Entity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} indexes 
     * @param {Object} opts Optional parameters
     * @param {String} opts.random 
     * @param {String} opts.from 
     * @param {String} opts.size 
     * @param {module:api/DefaultApi~entitiesAllIndexesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Entity}
     */
    this.entitiesAllIndexesPost = function(indexes, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'indexes' is set
      if (indexes == undefined || indexes == null) {
        throw "Missing the required parameter 'indexes' when calling entitiesAllIndexesPost";
      }


      var pathParams = {
        'indexes': indexes
      };
      var queryParams = {
        'random': opts['random'],
        'from': opts['from'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Entity;

      return this.apiClient.callApi(
        '/entities/all/{indexes}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the entitiesSuggestIndexesOptions operation.
     * @callback module:api/DefaultApi~entitiesSuggestIndexesOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Empty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~entitiesSuggestIndexesOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Empty}
     */
    this.entitiesSuggestIndexesOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Empty;

      return this.apiClient.callApi(
        '/entities/suggest/{indexes}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the entitiesSuggestIndexesPost operation.
     * @callback module:api/DefaultApi~entitiesSuggestIndexesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Entity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} indexes 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q 
     * @param {String} opts.size 
     * @param {module:api/DefaultApi~entitiesSuggestIndexesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Entity}
     */
    this.entitiesSuggestIndexesPost = function(indexes, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'indexes' is set
      if (indexes == undefined || indexes == null) {
        throw "Missing the required parameter 'indexes' when calling entitiesSuggestIndexesPost";
      }


      var pathParams = {
        'indexes': indexes
      };
      var queryParams = {
        'q': opts['q'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Entity;

      return this.apiClient.callApi(
        '/entities/suggest/{indexes}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rootOptions operation.
     * @callback module:api/DefaultApi~rootOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Empty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~rootOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Empty}
     */
    this.rootOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Empty;

      return this.apiClient.callApi(
        '/', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suggestionsIndexOptions operation.
     * @callback module:api/DefaultApi~suggestionsIndexOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Empty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~suggestionsIndexOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Empty}
     */
    this.suggestionsIndexOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Empty;

      return this.apiClient.callApi(
        '/suggestions/{index}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suggestionsIndexPost operation.
     * @callback module:api/DefaultApi~suggestionsIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Suggestion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} index 
     * @param {Object} opts Optional parameters
     * @param {String} opts.reverse 
     * @param {String} opts.term 
     * @param {String} opts.entityId 
     * @param {String} opts.slop 
     * @param {String} opts.q 
     * @param {String} opts.size 
     * @param {module:api/DefaultApi~suggestionsIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Suggestion}
     */
    this.suggestionsIndexPost = function(index, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'index' is set
      if (index == undefined || index == null) {
        throw "Missing the required parameter 'index' when calling suggestionsIndexPost";
      }


      var pathParams = {
        'index': index
      };
      var queryParams = {
        'reverse': opts['reverse'],
        'term': opts['term'],
        'entity_id': opts['entityId'],
        'slop': opts['slop'],
        'q': opts['q'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Suggestion;

      return this.apiClient.callApi(
        '/suggestions/{index}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

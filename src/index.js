(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Empty', 'model/Entity', 'model/EntityHits', 'model/Error', 'model/Suggestion', 'model/SuggestionSuggestions', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Empty'), require('./model/Entity'), require('./model/EntityHits'), require('./model/Error'), require('./model/Suggestion'), require('./model/SuggestionSuggestions'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Empty, Entity, EntityHits, Error, Suggestion, SuggestionSuggestions, DefaultApi) {
  'use strict';

  /**
   * Client library of norm.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Norm = require('index'); // See note below*.
   * var xxxSvc = new Norm.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Norm.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Norm.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Norm.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2016-06-27T20:26:16Z
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Empty model constructor.
     * @property {module:model/Empty}
     */
    Empty: Empty,
    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity: Entity,
    /**
     * The EntityHits model constructor.
     * @property {module:model/EntityHits}
     */
    EntityHits: EntityHits,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Suggestion model constructor.
     * @property {module:model/Suggestion}
     */
    Suggestion: Suggestion,
    /**
     * The SuggestionSuggestions model constructor.
     * @property {module:model/SuggestionSuggestions}
     */
    SuggestionSuggestions: SuggestionSuggestions,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));

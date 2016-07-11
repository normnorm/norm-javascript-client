# Norm.DefaultApi

All URIs are relative to *https://api.normnorm.club/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitiesAllIndexesOptions**](DefaultApi.md#entitiesAllIndexesOptions) | **OPTIONS** /entities/all/{indexes} | 
[**entitiesAllIndexesPost**](DefaultApi.md#entitiesAllIndexesPost) | **POST** /entities/all/{indexes} | 
[**entitiesSuggestIndexesOptions**](DefaultApi.md#entitiesSuggestIndexesOptions) | **OPTIONS** /entities/suggest/{indexes} | 
[**entitiesSuggestIndexesPost**](DefaultApi.md#entitiesSuggestIndexesPost) | **POST** /entities/suggest/{indexes} | 
[**rootOptions**](DefaultApi.md#rootOptions) | **OPTIONS** / | 
[**suggestionsIndexOptions**](DefaultApi.md#suggestionsIndexOptions) | **OPTIONS** /suggestions/{index} | 
[**suggestionsIndexPost**](DefaultApi.md#suggestionsIndexPost) | **POST** /suggestions/{index} | 


<a name="entitiesAllIndexesOptions"></a>
# **entitiesAllIndexesOptions**
> Empty entitiesAllIndexesOptions()



### Example
```javascript
var Norm = require('norm');

var apiInstance = new Norm.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitiesAllIndexesOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entitiesAllIndexesPost"></a>
# **entitiesAllIndexesPost**
> Entity entitiesAllIndexesPost(indexes, opts)



### Example
```javascript
var Norm = require('norm');
var defaultClient = Norm.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Norm.DefaultApi();

var indexes = "indexes_example"; // String | 

var opts = { 
  'random': "random_example", // String | 
  'from': "from_example", // String | 
  'size': "size_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitiesAllIndexesPost(indexes, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexes** | **String**|  | 
 **random** | **String**|  | [optional] 
 **from** | **String**|  | [optional] 
 **size** | **String**|  | [optional] 

### Return type

[**Entity**](Entity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entitiesSuggestIndexesOptions"></a>
# **entitiesSuggestIndexesOptions**
> Empty entitiesSuggestIndexesOptions()



### Example
```javascript
var Norm = require('norm');

var apiInstance = new Norm.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitiesSuggestIndexesOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entitiesSuggestIndexesPost"></a>
# **entitiesSuggestIndexesPost**
> Entity entitiesSuggestIndexesPost(indexes, opts)



### Example
```javascript
var Norm = require('norm');
var defaultClient = Norm.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Norm.DefaultApi();

var indexes = "indexes_example"; // String | 

var opts = { 
  'q': "q_example", // String | 
  'size': "size_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitiesSuggestIndexesPost(indexes, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexes** | **String**|  | 
 **q** | **String**|  | [optional] 
 **size** | **String**|  | [optional] 

### Return type

[**Entity**](Entity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rootOptions"></a>
# **rootOptions**
> Empty rootOptions()



### Example
```javascript
var Norm = require('norm');

var apiInstance = new Norm.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rootOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suggestionsIndexOptions"></a>
# **suggestionsIndexOptions**
> Empty suggestionsIndexOptions()



### Example
```javascript
var Norm = require('norm');

var apiInstance = new Norm.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suggestionsIndexOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suggestionsIndexPost"></a>
# **suggestionsIndexPost**
> Suggestion suggestionsIndexPost(index, opts)



### Example
```javascript
var Norm = require('norm');
var defaultClient = Norm.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Norm.DefaultApi();

var index = "index_example"; // String | 

var opts = { 
  'reverse': "reverse_example", // String | 
  'term': "term_example", // String | 
  'entityId': "entityId_example", // String | 
  'slop': "slop_example", // String | 
  'q': "q_example", // String | 
  'size': "size_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suggestionsIndexPost(index, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **reverse** | **String**|  | [optional] 
 **term** | **String**|  | [optional] 
 **entityId** | **String**|  | [optional] 
 **slop** | **String**|  | [optional] 
 **q** | **String**|  | [optional] 
 **size** | **String**|  | [optional] 

### Return type

[**Suggestion**](Suggestion.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


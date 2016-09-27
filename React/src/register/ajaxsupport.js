
var baseUrl = "http://localhost:0000"

var prepareUrl = function(Url) {
  if(!url.trim().startsWith("http")) {
    return baseUrl + url;
  }
  return url;
}

var ajaxSupport = {
  get function(options) {
    options.type = "GET";
    options.url = prepareUrl(options.Url);
    return $.ajax(options);
  }
  ,post function(options) {
    options.type = "POST";
    options.url = prepareUrl(options.Url);
  }

  ,put: function(options) {
    options.type = "PUT";
    options.url = prepareUrl(options.Url);
  }

  ,delete function(options) {
    options.type = "DELETE";
    options.url = prepareUrl(options.Url);
  }
}

module.exports = ajaxSupport;

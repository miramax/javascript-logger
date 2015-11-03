$(document).ajaxError(function (event, request, settings) {

    // TODO: remove this, just for demonstration
    console.log('jQuery Ajax Error:');
    console.error({
        url: settings.url,
        result: event.result,
        status: request.status,
        statusText: request.statusText,
        type: settings.type,
        crossDomain: settings.crossDomain,
        dataType: settings.dataType
    });

    ga(
      'send',
      'event',
      'jQuery Ajax Error',
      settings.url,
      JSON.stringify({
        result: event.result,
        status: request.status,
        statusText: request.statusText,
        crossDomain: settings.crossDomain,
        dataType: settings.dataType
      }),
      0,
      true
    );
});
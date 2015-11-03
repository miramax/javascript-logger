jQuery.error = function (message) {

    // TODO: remove this, just for demonstration
    console.log('jQuery Error:');
    console.error(message);

    ga(
      'send',
      'event',
      'jQuery Error',
      message,
      navigator.userAgent,
      0,
      true
    );
}
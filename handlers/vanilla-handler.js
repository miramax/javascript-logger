window.addEventListener('error', function (err) {

  // TODO: remove this, just for demonstration
  console.log('JavaScript Error:');
  console.error({
        message: err.message,
        filename: err.filename,
        line: err.lineno,
        column: err.colno// might not be present
  });
  
  var lineAndColumnInfo = err.colno ? ' line:' + err.lineno +', column:'+ err.colno : ' line:' + e.lineno;
  ga(
    'send',
    'event',
    'JavaScript Error',
    err.message,
    err.filename + lineAndColumnInfo + ' -> ' +  navigator.userAgent,
    0,
    true
  );
});
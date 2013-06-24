var rules = require('../rule');

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
var object = function(rule, value, callback, source, options) {
  var errors = [];
  rules.required(rule, value, source, errors, options);
  if(rule.required || value != undefined) {
    rules.type(rule, value, source, errors, options);
  }
  callback(errors);
}

module.exports = object;
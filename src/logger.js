// src/logger.js

// Unnecessary console.log (improper logging)
function logError(message) {
    console.log('Error: ' + message); // Improper log usage for errors
  }
  
  function logInfo(message) {
    console.log('Info: ' + message);
  }
  
  // Simulating a logging system with no log level handling
  function logDebug(message) {
    console.log('Debugging: ' + message);
  }
  
  module.exports = { logError, logInfo, logDebug };
  
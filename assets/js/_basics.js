(function(w){ 'use strict';
    if (!w.console) w.console = {};
    if (!w.console.log) w.console.log = function(){};
    if (!w.console.dir) w.console.dir = w.console.log;
    if (!w.console.warn) w.console.warn = w.console.log;
    if (!w.console.error) w.console.error = w.console.log;

    window.debugMode = true;
})(window);
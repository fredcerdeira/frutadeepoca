function globals(){

}
globals.prototype.set=function(key, value){
    window.APP= window.APP || {};
    window.APP.GLOBALS= window.APP.GLOBALS || {};
    window.APP.GLOBALS[key]=value;
}
globals.prototype.delete=function(key){
    window.APP= window.APP || {};
    window.APP.GLOBALS= window.APP.GLOBALS || {};
    window.APP.GLOBALS[key]=null;
    delete window.APP.GLOBALS[key];
}
globals.prototype.get=function(key){
    window.APP= window.APP || {};
    window.APP.GLOBALS= window.APP.GLOBALS || {};
    return window.APP.GLOBALS[key];
}
globals.prototype.has=function(key){
    window.APP= window.APP || {};
    window.APP.GLOBALS= window.APP.GLOBALS || {};
    return typeof window.APP.GLOBALS[key] !=="undefined";
}

module.exports = globals;

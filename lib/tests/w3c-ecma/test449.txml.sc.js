//Generated on 2017-9-20 12:40:30 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $cond_l4_c20(_event){
return 'foo';
};
$cond_l4_c20.tagname='undefined';
$cond_l4_c20.line=4;
$cond_l4_c20.column=20;
function $expr_l8_c53(_event){
return 'pass';
};
$expr_l8_c53.tagname='undefined';
$expr_l8_c53.line=8;
$expr_l8_c53.column=53;
function $log_l8_c27(_event){
this.log("Outcome",$expr_l8_c53.apply(this, arguments));
};
$log_l8_c27.tagname='log';
$log_l8_c27.line=8;
$log_l8_c27.column=27;
function $expr_l9_c53(_event){
return 'fail';
};
$expr_l9_c53.tagname='undefined';
$expr_l9_c53.line=9;
$expr_l9_c53.column=53;
function $log_l9_c27(_event){
this.log("Outcome",$expr_l9_c53.apply(this, arguments));
};
$log_l9_c27.tagname='log';
$log_l9_c27.line=9;
$log_l9_c27.column=27;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "{http://www.w3.org/2000/xmlns/}conf": "http://www.w3.org/2005/scxml-conformance",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "s0",
   "$type": "state",
   "transitions": [
    {
     "cond": $cond_l4_c20,
     "target": "pass"
    },
    {
     "target": "fail"
    }
   ]
  },
  {
   "id": "pass",
   "$type": "final",
   "onEntry": [
    $log_l8_c27
   ]
  },
  {
   "id": "fail",
   "$type": "final",
   "onEntry": [
    $log_l9_c27
   ]
  }
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/w3c-ecma/test449.txml.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3dvcmtzcGFjZS9zY3htbC10ZXN0LWZyYW1ld29yay90ZXN0L3czYy1lY21hL3Rlc3Q0NDkudHhtbC5zY3htbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJb0IsWTs7Ozs7O0FBSWlDLGE7Ozs7OztBQUExQix3RDs7Ozs7O0FBQzBCLGE7Ozs7OztBQUExQix3RCJ9
//Generated on 2017-9-20 12:41:19 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
var Var1;
function $deserializeDatamodel($serializedDatamodel){
  Var1 = $serializedDatamodel["Var1"];
}
function $serializeDatamodel(){
   return {
  "Var1" : Var1
   };
}
function $expr_l8_c33(_event){
return 2;
};
$expr_l8_c33.tagname='undefined';
$expr_l8_c33.line=8;
$expr_l8_c33.column=33;
function $assign_l8_c4(_event){
Var1 = $expr_l8_c33.apply(this, arguments);
};
$assign_l8_c4.tagname='assign';
$assign_l8_c4.line=8;
$assign_l8_c4.column=4;
function $script_l9_c4(_event){
Var1 = 1;
var Var2 = 2;
function foo() {
var Var1 = 2;
}
foo();
};
$script_l9_c4.tagname='script';
$script_l9_c4.line=9;
$script_l9_c4.column=4;
function $cond_l18_c21(_event){
return Var1==1;
};
$cond_l18_c21.tagname='undefined';
$cond_l18_c21.line=18;
$cond_l18_c21.column=21;
function $expr_l22_c53(_event){
return 'pass';
};
$expr_l22_c53.tagname='undefined';
$expr_l22_c53.line=22;
$expr_l22_c53.column=53;
function $log_l22_c27(_event){
this.log("Outcome",$expr_l22_c53.apply(this, arguments));
};
$log_l22_c27.tagname='log';
$log_l22_c27.line=22;
$log_l22_c27.column=27;
function $expr_l23_c53(_event){
return 'fail';
};
$expr_l23_c53.tagname='undefined';
$expr_l23_c53.line=23;
$expr_l23_c53.column=53;
function $log_l23_c27(_event){
this.log("Outcome",$expr_l23_c53.apply(this, arguments));
};
$log_l23_c27.tagname='log';
$log_l23_c27.line=23;
$log_l23_c27.column=27;
function $data_l3_c22(_event){
return 0;
};
$data_l3_c22.tagname='undefined';
$data_l3_c22.line=3;
$data_l3_c22.column=22;
function $datamodel_l2_c1(_event){
if(typeof Var1 === "undefined")  Var1 = $data_l3_c22.apply(this, arguments);
};
$datamodel_l2_c1.tagname='datamodel';
$datamodel_l2_c1.line=2;
$datamodel_l2_c1.column=1;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "{http://www.w3.org/2000/xmlns/}conf": "http://www.w3.org/2005/scxml-conformance",
 "initial": "s0",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "s0",
   "$type": "state",
   "onEntry": [
    $assign_l8_c4,
    $script_l9_c4
   ],
   "transitions": [
    {
     "cond": $cond_l18_c21,
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
    $log_l22_c27
   ]
  },
  {
   "id": "fail",
   "$type": "final",
   "onEntry": [
    $log_l23_c27
   ]
  }
 ],
 "onEntry": [
  $datamodel_l2_c1
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/w3c-ecma/test303-2.txml.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3dvcmtzcGFjZS9zY3htbC10ZXN0LWZyYW1ld29yay90ZXN0L3czYy1lY21hL3Rlc3QzMDMtMi50eG1sLnNjeG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRaUMsUTs7Ozs7O0FBQTdCLDJDOzs7Ozs7QUFFSSxJLENBQUEsQyxDQUFPLEM7SUFDUCxJLENBQUEsQyxDQUFPLEM7QUFDWCxRLENBQVMsR0FBVCxFLENBQWMsQztBQUNaLEcsQ0FBSSxJLENBQUEsQyxDQUFPLENBQVgsQztBQURZLEM7QUFHZCxNOzs7Ozs7QUFHaUIsV0FBSSxFQUFFLEM7Ozs7OztBQUkwQixhOzs7Ozs7QUFBMUIseUQ7Ozs7OztBQUMwQixhOzs7Ozs7QUFBMUIseUQ7Ozs7OztBQXBCTCxROzs7Ozs7QUFEckIsNEUifQ==
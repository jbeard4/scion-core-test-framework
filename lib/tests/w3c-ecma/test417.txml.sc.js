//Generated on 2017-9-20 12:40:25 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function getDelayInMs(delayString){
    if(typeof delayString === 'string') {
        if (delayString.slice(-2) === "ms") {
            return parseFloat(delayString.slice(0, -2));
        } else if (delayString.slice(-1) === "s") {
            return parseFloat(delayString.slice(0, -1)) * 1000;
        } else if (delayString.slice(-1) === "m") {
            return parseFloat(delayString.slice(0, -1)) * 1000 * 60;
        } else {
            return parseFloat(delayString);
        }
    }else if (typeof delayString === 'number'){
        return delayString;
    }else{
        return 0;
    }
}
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $senddata_l5_c6(_event){
return {
};
};
$senddata_l5_c6.tagname='send';
$senddata_l5_c6.line=5;
$senddata_l5_c6.column=6;
function $send_l5_c6(_event){
var _scionTargetRef = null;
     this.send(
{
  target: _scionTargetRef,
  name: "timeout",
  data: $senddata_l5_c6.apply(this, arguments),
  sendid: undefined,
  origin: _sessionid
}, 
       {
           delay: getDelayInMs("1s"),
       });
};
$send_l5_c6.tagname='send';
$send_l5_c6.line=5;
$send_l5_c6.column=6;
function $expr_l30_c53(_event){
return 'pass';
};
$expr_l30_c53.tagname='undefined';
$expr_l30_c53.line=30;
$expr_l30_c53.column=53;
function $log_l30_c27(_event){
this.log("Outcome",$expr_l30_c53.apply(this, arguments));
};
$log_l30_c27.tagname='log';
$log_l30_c27.line=30;
$log_l30_c27.column=27;
function $expr_l31_c53(_event){
return 'fail';
};
$expr_l31_c53.tagname='undefined';
$expr_l31_c53.line=31;
$expr_l31_c53.column=53;
function $log_l31_c27(_event){
this.log("Outcome",$expr_l31_c53.apply(this, arguments));
};
$log_l31_c27.tagname='log';
$log_l31_c27.line=31;
$log_l31_c27.column=27;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "{http://www.w3.org/2000/xmlns/}conf": "http://www.w3.org/2005/scxml-conformance",
 "initial": "s1",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "s1",
   "initial": "s1p1",
   "$type": "state",
   "onEntry": [
    $send_l5_c6
   ],
   "transitions": [
    {
     "event": "timeout",
     "target": "fail"
    }
   ],
   "states": [
    {
     "id": "s1p1",
     "$type": "parallel",
     "transitions": [
      {
       "event": "done.state.s1p1",
       "target": "pass"
      }
     ],
     "states": [
      {
       "id": "s1p11",
       "initial": "s1p111",
       "$type": "state",
       "states": [
        {
         "id": "s1p111",
         "$type": "state",
         "transitions": [
          {
           "target": "s1p11final"
          }
         ]
        },
        {
         "id": "s1p11final",
         "$type": "final"
        }
       ]
      },
      {
       "id": "s1p12",
       "initial": "s1p121",
       "$type": "state",
       "states": [
        {
         "id": "s1p121",
         "$type": "state",
         "transitions": [
          {
           "target": "s1p12final"
          }
         ]
        },
        {
         "id": "s1p12final",
         "$type": "final"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "pass",
   "$type": "final",
   "onEntry": [
    $log_l30_c27
   ]
  },
  {
   "id": "fail",
   "$type": "final",
   "onEntry": [
    $log_l31_c27
   ]
  }
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/w3c-ecma/test417.txml.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3dvcmtzcGFjZS9zY3htbC10ZXN0LWZyYW1ld29yay90ZXN0L3czYy1lY21hL3Rlc3Q0MTcudHhtbC5zY3htbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtNO0FBQUEsQzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFU7Ozs7OztBQXlCK0MsYTs7Ozs7O0FBQTFCLHlEOzs7Ozs7QUFDMEIsYTs7Ozs7O0FBQTFCLHlEIn0=
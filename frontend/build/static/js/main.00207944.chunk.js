(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(17),o=n.n(r),s=(n(29),n(2)),l=n(3),d=n(5),u=n(4),j=n.n(u),b=n(6),p=n(7),f=n.n(p),h=new(n(15).a);function x(e,t){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(j.a.mark((function e(t,n){var c,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=null,a=window.location.origin+"/api/"+t+"/",e.prev=2,e.next=5,fetch(a,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:h.get("token")?"Token "+h.get("token"):""},body:JSON.stringify({params:n})});case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.prev=11,e.next=14,c.json();case 14:return i=e.sent,console.log(i),e.abrupt("return",i);case 19:return e.prev=19,e.t1=e.catch(11),e.abrupt("return","Error");case 22:case"end":return e.stop()}}),e,null,[[2,8],[11,19]])})))).apply(this,arguments)}var O=function(e){var t=Object(a.useRef)(null),n=e.onClick;return Object(a.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&n(!0)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t]),Object(c.jsx)("div",{ref:t,children:e.children})},g=n(41),v=Object(d.a)({root:{display:"flex",alignItems:"center",height:30,width:"100%",border:"1px solid black"},input:{width:"100%",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"}}),w=function(e){var t=v();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)("input",{type:e.type?e.type:"input",className:t.input,required:!0,onChange:e.onChange})})},N=Object(d.a)({root:{display:"flex",alignItems:"center",height:30,width:"100%",border:"1px solid black"},input:{width:"100%",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"}}),y=function(e){var t=N();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)("input",{type:e.type?e.type:"date",className:t.input,required:!0,onChange:e.onChange})})},C=Object(d.a)({root:{display:"flex",alignItems:"center",height:30,width:"100%",border:"1px solid black"},input:{width:"100%",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"}}),k=function(e){var t=C();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsxs)("select",{className:t.input,required:!0,onChange:e.onChange,children:[Object(c.jsx)("option",{value:"local",children:"Local"}),Object(c.jsx)("option",{value:"import",children:"Imported"})]})})},S=(Object(d.a)({root:{display:"flex",alignItems:"center",height:30,width:"100%",border:"1px solid black"},input:{width:"100%",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"}}),Object(d.a)({root:{display:"flex",alignItems:"center",height:30,width:"100%"},input:{width:"auto",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"}}),n(9)),B=(n(21),Object(d.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:30,position:"relative"},selectionTitle:{width:"100%",fontSize:40,borderBottom:"1px solid black",fontWeight:500,marginBottom:10},selectionField:{display:"flex"},selectionLabel:{fontSize:20},selectionInputField:{width:"400px",marginLeft:20,marginTop:5,marginBottom:5},nextPage:{marginTop:20,width:60,height:40,color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:15,borderRadius:5,position:"absolute",right:15,border:"1px solid black"},input:{width:"50%",background:"grey",border:"0px none",outline:"none","& :focus":{outline:"none"},lineHeight:"28px"},submitBtn:{marginTop:20,width:"10%",height:40,color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:20}})),I=function(e){var t=B(),n=Object(a.useState)(e.patient?e.patient.patientName:""),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(a.useState)(e.patient?e.patient.patientID:""),d=Object(s.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(e.patient?e.patient.patientDOB:""),p=Object(s.a)(b,2),f=p[0],h=p[1],x=Object(a.useState)(e.patient?e.patient.dateConfirmed:""),m=Object(s.a)(x,2),O=m[0],g=m[1],v=Object(a.useState)(e.patient?e.patient.localImported:"local"),w=Object(s.a)(v,2),N=w[0],C=w[1],S=Object(a.useState)(e.patient?e.patient.virusName:""),I=Object(s.a)(S,2),T=I[0],D=I[1];console.log(e.virusList);return Object(a.useEffect)((function(){e.virusList.lengh<=0&&(alert("Please add virus first"),window.location.reload())}),[]),Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("div",{className:t.selectionTitle,children:"Patient Information"}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Patient Name:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)}})})]}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Patient ID Document Number:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsx)("input",{value:u,onChange:function(e){return j(e.target.value)}})})]}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Date of Birth:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsx)(y,{value:f,onChange:function(e){return h(e.target.value)}})})]}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Date Confirmed:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsx)(y,{value:O,onChange:function(e){return g(e.target.value)}})})]}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Local/Imported:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsx)(k,{value:N,onChange:function(e){return C(e.target.value)}})})]}),Object(c.jsx)("div",{className:t.selectionTitle,children:"Virus Information"}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Virus Name:"}),Object(c.jsx)("div",{className:t.selectionInputField,children:Object(c.jsxs)("select",{className:"category",value:T,onChange:function(e){return D(e.target.value)},children:[Object(c.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please Choose..."}),e.virusList.length>0&&e.virusList.map((function(e,t){return Object(c.jsx)("option",{value:e.virus_name,children:e.virus_name},t)}))]})})]}),Object(c.jsx)("div",{className:t.selectionField}),Object(c.jsx)("div",{className:t.nextPage,onClick:function(){if(""!==r&&""!==u&&""!==f&&""!==O&&""!==N&&""!==T){var t={patientName:r,patientID:u,patientDOB:f,virusName:T,dateConfirmed:O,localImported:N};e.onPageChange(1,t,null)}else alert("Missing some field")},children:"Next Page"})]})},T=n(19),D=Object(d.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:30,position:"relative"},selectionTitle:{width:"100%",fontSize:40,borderBottom:"1px solid black",fontWeight:500,marginBottom:10},selectionField:{display:"flex"},selectionLabel:{fontSize:20},nextPage:{cursor:"pointer",textDecoration:" underline",position:"absolute",bottom:0,right:20},searchBtn:{marginLeft:10,cursor:"pointer"},locationBox:{},backBtn:{marginTop:20,width:60,height:40,color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:15,borderRadius:5,position:"absolute",left:0,border:"1px solid black"},submitBtn:{marginTop:20,width:60,height:40,color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:15,borderRadius:5,position:"absolute",right:30,border:"1px solid black"},addBtn:{marginTop:20,width:150,height:40,color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:18,borderRadius:5},closeBtn:{cursor:"pointer"},searchContainer:{position:"relative"},BtnContainer:{display:"flex",justifyContent:"center",position:"relative"},resultRow:{display:"flex",flexDirection:"column",border:"1px solid black",cursor:"pointer","&:hover":{backgroundColor:"grey"}},placeName:{fontWeight:"bold"},address:{fontSize:13},dropDown:{position:"absolute",maxHeight:500,overflowY:"scroll",display:"flex",flexDirection:"column",border:"1px solid black",backgroundColor:"white","& > div":{paddingLeft:10},zIndex:1}}),P=function(e){var t=D(),n=Object(a.useState)(e.data.category),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(a.useState)(e.data.dateFrom),d=Object(s.a)(l,2),u=d[0],p=d[1],h=Object(a.useState)(e.data.dateTo),m=Object(s.a)(h,2),O=m[0],g=m[1],v=Object(a.useState)(e.data.location?e.data.location.nameEN:""),w=Object(s.a)(v,2),N=w[0],y=w[1],C=Object(a.useState)(""),k=Object(s.a)(C,2),S=k[0],B=k[1],I=Object(a.useState)(!1),T=Object(s.a)(I,2),P=T[0],R=T[1],F=Object(a.useState)(e.data.location),L=Object(s.a)(F,2),H=L[0],z=L[1],E=Object(a.useState)(null),_=Object(s.a)(E,2),W=_[0],V=_[1],M=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===N){e.next=5;break}return e.next=3,x("searchLocation",{locationTerm:N});case 3:"Error"!=(t=e.sent)?(console.log(t),B(t)):alert("No matching record");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){H&&(V(H),z(null),B(""))}),[H]),Object(a.useEffect)((function(){var t={category:r,dateFrom:u,dateTo:O,location:W};console.log(t),e.onRecordChange(t)}),[r,u,O,W]);return Object(c.jsx)(c.Fragment,{children:!P&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsxs)("select",{className:"category",value:r,onChange:function(e){return o(e.target.value)},children:[Object(c.jsx)("option",{value:"Residence",children:"Residence"}),Object(c.jsx)("option",{value:"Workplace",children:"Workplace"}),Object(c.jsx)("option",{value:"Visit",children:"Visit"})]})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"date",className:"dateFrom",value:u,onChange:function(e){return t=e.target.value,"Visit"===r&&g(t),void(t>O&&""!==O?alert("Date from can only be earilier than date to"):p(t));var t}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"date",className:"dateTo",value:O,onChange:function(e){return t=e.target.value,"Visit"===r&&p(t),void(t<u&&""!==u?alert("Date to can only be later than date from"):g(t));var t}})}),Object(c.jsx)("td",{className:t.locationBox,children:Object(c.jsxs)("div",{className:t.searchContainer,children:[Object(c.jsx)("input",{type:"text",value:N,onChange:function(e){return y(e.target.value)}}),Object(c.jsx)("i",{className:"fa fa-search",onClick:M}),""!==S&&!H&&Object(c.jsx)("div",{className:t.dropDown,children:S.map((function(e){return Object(c.jsxs)("div",{className:t.resultRow,onClick:function(){z(e),y(e.nameEN)},children:[Object(c.jsx)("div",{className:t.placeName,children:e.nameEN}),Object(c.jsx)("div",{className:t.address,children:e.addressEN})]})}))})]})}),Object(c.jsx)("td",{children:Object(c.jsx)("i",{className:f()(t.closeBtn,"fa fa-window-close"),onClick:function(){e.onDeleteRow(),R(!0)}})})]})})},R=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),i=(n[0],n[1],D()),r={category:"Residence",dateFrom:"",dateTo:"",location:null,result:[]},o=Object(a.useState)(e.locationRecord),d=Object(s.a)(o,2),u=d[0],j=d[1];return Object(c.jsxs)("div",{className:i.root,children:[Object(c.jsx)("div",{className:i.selectionTitle,children:"Add Location Record"}),Object(c.jsxs)("table",{className:i.empTable,children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Category"}),Object(c.jsx)("th",{children:"Date From"}),Object(c.jsx)("th",{children:"Date To"}),Object(c.jsx)("th",{children:"Location"}),Object(c.jsx)("th",{children:"Delete"})]}),Object(c.jsx)("tbody",{children:u.map((function(e,t){return e?Object(c.jsx)(P,{onRecordChange:function(e){return function(e,t){var n=Object(T.a)(u);n[t]=e,j(n)}(e,t)},onDeleteRow:function(){return function(e){var t=Object(T.a)(u);t[e]=null,j(t)}(t)},data:u[t]}):Object(c.jsx)(c.Fragment,{})}))})]}),Object(c.jsxs)("div",{className:i.BtnContainer,children:[Object(c.jsx)("div",{className:i.backBtn,onClick:function(){return e.onPageChange(0,null,u)},children:"Back"}),Object(c.jsx)("div",{className:i.addBtn,onClick:function(){var e=u[u.length-1],t=e.dateFrom,n=e.dateTo,c=e.location;if(""!==t&&""!==n&&c){var a=Object(l.a)({},r);j((function(e){return e.concat(a)}))}else alert("Missing some fields")},children:"Add"}),Object(c.jsx)("div",{className:i.submitBtn,onClick:function(){!function(){var t=u[u.length-1],n=t.dateFrom,c=t.dateTo,a=t.location;""!==n&&""!==c&&a?(Object(l.a)({},r),e.submitForm(u)):alert("Missing some fields")}()},children:"Submit"})]})]})},F=n(14),L=n.n(F),H=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(null),d=Object(s.a)(o,2),u=d[0],p=d[1],f=Object(a.useState)([]),h=Object(s.a)(f,2),m=h[0],O=h[1],g=Object(a.useState)([Object(l.a)({},{category:"Residence",dateFrom:"",dateTo:"",location:null})]),v=Object(s.a)(g,2),w=v[0],N=v[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(t),n=L.a.filter(t,(function(e){return e})),console.log(n),!(n.length>0)){e.next=8;break}return e.next=6,x("submitCase",{patient:u,location:t});case 6:"Success"===e.sent.status&&(window.alert("You have successfully input the patient info."),window.location.reload());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e,t,n){t&&(console.log(t),p(t)),n&&N(n),r(e)};return Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getAllVirus",[]);case 2:t=e.sent,console.log(t),O(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(c.jsx)(c.Fragment,{children:0===i?Object(c.jsx)(I,{onPageChange:C,patient:u,virusList:m}):Object(c.jsx)(R,{onPageChange:C,locationRecord:w,submitForm:y})})},z=(n(39),Object(d.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:30,position:"relative"},bigTitle:{width:"100%",fontSize:40,borderBottom:"1px solid black",fontWeight:500,marginBottom:10},row:{cursor:"pointer"}})),E=Object(d.a)({root:{position:"relative",display:"flex",flexDirection:"column"},backBtn:{position:"absoulte",top:10,left:0,height:30,width:60,borderRadius:6,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",marginBottom:20},row:{marginBottom:20}}),_=function(e){var t=E(),n=e.case,i=Object(a.useState)([]),r=Object(s.a)(i,2),o=r[0],d=r[1],u=[{Header:"Date From",accessor:"date_from"},{Header:"Date To",accessor:"date_to"},{Header:"Name of Location",accessor:"location_name"},{Header:"Address",accessor:"address"},{Header:"X-coordiate",accessor:"Xcoord"},{Header:"Y-coordiate",accessor:"Ycoord"}],j=Object(a.useMemo)((function(){return u}),[]);Object(a.useEffect)((function(){for(var e=function(e){var t=Object(l.a)(Object(l.a)({},n.locations[e]),n.visited[e]);d((function(e){return e.concat(t)}))},t=0;t<n.locations.length;t++)e(t)}),[]),console.log(o);var b=Object(S.useTable)({columns:j,data:o}),p=(b.getTableProps,b.getTableBodyProps),f=b.headerGroups,h=b.rows,x=b.prepareRow;return Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("div",{className:t.backBtn,onClick:e.onBack,children:"Back"}),Object(c.jsxs)("div",{className:t.row,children:["Case ID: ",n.case.case_no]}),Object(c.jsxs)("div",{className:t.row,children:["Patient Name: ",n.patient.patient_name]}),Object(c.jsxs)("div",{className:t.row,children:["Confirmed Date: ",n.case.date_confirmed]}),Object(c.jsxs)("div",{className:t.row,children:["ID number: ",n.patient.hkid]}),Object(c.jsxs)("div",{className:t.row,children:["Local/Imported: ",n.case.local_or_imported]}),Object(c.jsxs)("div",{className:t.row,children:["Virus Name: ",n.virus.common_name]}),n.locations.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:t.row,children:"Location visited:"}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:f.map((function(e){return Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(c.jsx)("tbody",Object(l.a)(Object(l.a)({},p()),{},{children:h.map((function(e){return x(e),Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})]})]})},W=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(null),d=Object(s.a)(o,2),u=d[0],p=d[1],f=z(),h=[{Header:"CaseId",accessor:"case_no"},{Header:"Patient ID",accessor:"patient"},{Header:"virus ID",accessor:"virus"},{Header:"Date Confirmed",accessor:"date_confirmed"}],m=Object(a.useMemo)((function(){return h}),[]);Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getAllCase",[]);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var O=Object(S.useTable)({columns:m,data:i}),g=(O.getTableProps,O.getTableBodyProps),v=O.headerGroups,w=O.rows,N=O.prepareRow;console.log(w);var y=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getCaseById",{id:t.values.case_no});case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:f.root,children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:f.bigTitle,children:"View Record"})}),i.length>0&&!u&&Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:v.map((function(e){return Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(c.jsx)("tbody",Object(l.a)(Object(l.a)({},g()),{},{children:w.map((function(e){return N(e),Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{onClick:function(){y(e)},className:f.row,children:e.cells.map((function(e){return Object(c.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}),u&&Object(c.jsx)(_,{case:u,onBack:function(){return p(null)}})]})},V=Object(d.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:30,position:"relative"},bigTitle:{width:"100%",fontSize:40,borderBottom:"1px solid black",fontWeight:500,marginBottom:10},selectionField:{display:"flex"},selectionLabel:{fontSize:20},submitBtn:{marginTop:20,width:"10%",height:40,color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:20}}),M=function(e){var t=V(),n=Object(a.useState)(""),i=Object(s.a)(n,2),r=i[0],o=i[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),p=u[0],f=u[1],h=Object(a.useState)(""),m=Object(s.a)(h,2),O=m[0],g=m[1],v=Object(a.useState)([]),w=Object(s.a)(v,2),N=w[0],y=w[1],C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O&&r&&p){e.next=4;break}alert("Missing some fields"),e.next=14;break;case 4:if(!isNaN(O)){e.next=8;break}alert("Max inflectious period should be a number"),e.next=14;break;case 8:return e.next=10,x("addVinfo",{vname:r,disease:p,maxp:O});case 10:o(""),f(""),g(""),window.alert("You have successfully input the virus info.");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=[{Header:"Virus Name",accessor:"virus_name"},{Header:"Disease",accessor:"common_name"},{Header:"Max. Infectious Period (days)",accessor:"max_infect_period"}],B=Object(a.useMemo)((function(){return k}),[]);Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getAllVirus",[]);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))()}),[r]);var I=Object(S.useTable)({columns:B,data:N}),T=(I.getTableProps,I.getTableBodyProps),D=I.headerGroups,P=I.rows,R=I.prepareRow;return Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("div",{className:t.bigTitle,children:"Virus Info Page"}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Virus Name: "}),Object(c.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Disease: "}),Object(c.jsx)("input",{value:p,onChange:function(e){return f(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:t.selectionField,children:[Object(c.jsx)("div",{className:t.selectionLabel,children:"Max. Infectious Period:"}),Object(c.jsx)("input",{value:O,onChange:function(e){return g(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:t.submitBtn,onClick:C,children:"Submit"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),N.length>0&&Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:D.map((function(e){return Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(c.jsx)("tbody",Object(l.a)(Object(l.a)({},T()),{},{children:P.map((function(e){return R(e),Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})]})},A=Object(d.a)({root:{display:"grid",gridTemplateColumns:"1.25fr 6fr",gridTemplateRows:"1fr 8fr",padding:"30px 20px 20px 20px"},menuPanel:{width:"100%",display:"flex",flexDirection:"column",paddingTop:20},searchResult:{"& > div":{marginBottom:10}},inputBox:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"3px 10px 3px 10px",border:"1px solid gray",borderRadius:15,height:30,width:200,marginBottom:20},input:{border:"0px none",outline:"none","& :focus":{outline:"none"}},submitBtn:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",padding:"3px 10px 3px 10px",border:"1px solid gray",borderRadius:15,height:30,width:100,marginBottom:20,backgroundColor:"greenyellow",cursor:"pointer"},flex:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},inputs:{display:"grid",gridTemplateColumns:"1fr 3fr",gridTemplateRows:"1fr 1fr 1fr 1fr 1fr",rowGap:"1em",width:"100%",marginBottom:10,"& div":{marginRight:15,fontSize:30}},menuOptions:{width:"100%",textAlign:"center",fontSize:20,marginBottom:10,height:"1.5em",cursor:"pointer"},sectionTitle:{fontSize:45,width:"100%",borderBottom:"1px solid grey",marginBottom:"10px"},addNew:{boxShadow:"1px 2px",border:"1px solid grey",borderRadius:"20px"},menuBtn:{fontSize:25,cursor:"pointer",marginRight:5},title:{fontSize:45,fontWeight:"bold",cursor:"pointer"},account:{width:"100%",display:"flex",justifyContent:"flex-end",position:"relative",alignItems:"center"},username:{cursor:"pointer",textDecoration:" underline"},accountOption:{position:"absolute",top:0,right:0,display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",boxShadow:"1px 2px",border:"1px solid grey",backgroundColor:"lightgrey",width:200,height:50,borderRadius:5,padding:5,"& > *:not(:first-child)":{marginTop:10},"& div":{cursor:"pointer",textDecoration:" underline"}},searchBtn:{fontSize:20,cursor:"pointer"},unselected:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50}}),G=(Object(d.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:30},selectionTitle:{width:"100%",fontSize:40,borderBottom:"1px solid black",fontWeight:500,marginBottom:10},selectionField:{display:"flex"},selectionLabel:{fontSize:20}}),function(){var e=A(),t=Object(a.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Z(),l=Object(s.a)(o,2),d=l[0].name,u=l[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),m=h[0],v=h[1],w=Object(g.a)(["cookie-name"]),N=Object(s.a)(w,3),y=(N[0],N[1],N[2]);Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getUserInfo");case 2:"Success"===(t=e.sent).status&&(n=t.username,c=t.first+" "+t.last,u({type:"SET_USER",username:n,name:c}),console.log(t));case 4:case"end":return e.stop()}}),e)})))()}),[]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("signout");case 2:"Success"===e.sent.status&&(y("token"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)("div",{className:e.flex,children:Object(c.jsx)("span",{className:e.title,onClick:function(){return r("")},children:"HotZone"})}),Object(c.jsxs)("div",{className:e.account,children:[m&&Object(c.jsx)(O,{onClick:function(e){v(!e)},children:Object(c.jsx)("div",{className:e.accountOption,children:Object(c.jsx)("div",{onClick:C,children:"Logout"})})}),Object(c.jsx)("div",{className:e.username,onClick:function(){return v(!0)},children:d})]}),Object(c.jsxs)("div",{className:e.menuPanel,children:[Object(c.jsx)("div",{onClick:function(){r("addNewRecord")},value:"add",className:f()(e.addNew,e.menuOptions),children:"New record"}),Object(c.jsx)("div",{className:f()(e.addNew,e.menuOptions),onClick:function(){return r("viewRecord")},children:"View Records"}),Object(c.jsx)("div",{className:f()(e.addNew,e.menuOptions),onClick:function(){return r("virusInfo")},children:"Virus Info"})]}),""===i&&Object(c.jsx)("div",{className:e.unselected,children:"Please choose from the left options"}),"addNewRecord"===i&&Object(c.jsx)(H,{}),"viewRecord"===i&&Object(c.jsx)(W,{}),"virusInfo"===i&&Object(c.jsx)(M,{})]})}),U=Object(d.a)({root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{fontSize:50,fontWeight:"bold"},loginBox:{width:500,padding:"30px 10px 30px 10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid black"},column:{display:"flex",flexDirection:"column",marginBottom:10,width:"100%"},loginBtn:{marginTop:20,width:"60%",height:50,color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",cursor:"pointer",fontSize:25}}),Y=function(e){var t=U(),n=Object(a.useState)(""),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),u=d[0],p=d[1],f=function(){var t=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===r||""===u){t.next=5;break}return t.next=3,x("signin",{username:r,password:u});case 3:"Success"===(n=t.sent).status?e.onLoginSuccess(n.token):alert("Please enter correct information.");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("div",{className:t.title,children:"Hotzone"}),Object(c.jsxs)("div",{className:t.loginBox,children:[Object(c.jsxs)("div",{className:t.column,children:[Object(c.jsx)("div",{children:"Username"}),Object(c.jsx)(w,{onChange:function(e){return o(e.target.value)}})]}),Object(c.jsxs)("div",{className:t.column,children:[Object(c.jsx)("div",{children:"Password"}),Object(c.jsx)(w,{onChange:function(e){return p(e.target.value)},type:"password"})]}),Object(c.jsx)("div",{className:t.loginBtn,onClick:f,children:"Login"})]})]})},q=Object(a.createContext)({}),J=function(e,t){if("SET_USER"===t.type){var n=L.a.pick(t,["username","name"]);return Object(l.a)(Object(l.a)({},e),n)}return e},X={username:"",name:""};var Z=function(){return Object(a.useContext)(q)},K=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(g.a)(["cookie-name"]),o=Object(s.a)(r,3),l=o[0],d=o[1],u=(o[2],Object(a.useReducer)(J,X)),j=Object(s.a)(u,2),b=j[0],p=j[1];return Object(a.useEffect)((function(){l.token&&i(!0)}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(q.Provider,{value:[b,p],children:Object(c.jsx)("div",{children:n?Object(c.jsx)(G,{}):Object(c.jsx)(Y,{onLoginSuccess:function(e){return function(e){i(!0),d("token",e)}(e)}})})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root")),Q()}},[[40,1,2]]]);
//# sourceMappingURL=main.00207944.chunk.js.map
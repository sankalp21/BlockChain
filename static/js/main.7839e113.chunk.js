(this["webpackJsonpblock-chain"]=this["webpackJsonpblock-chain"]||[]).push([[0],{140:function(e,c){},142:function(e,c){},153:function(e,c){},155:function(e,c){},182:function(e,c){},184:function(e,c){},185:function(e,c){},190:function(e,c){},192:function(e,c){},211:function(e,c){},223:function(e,c){},226:function(e,c){},256:function(e,c,t){"use strict";t.r(c);var A=t(1),g=t(0),n=t(128),a=t.n(n),I=t(129),l=t(5),d=t(74),C=t(38),i=t(75),s=t(71),b=t.n(s),o=function(e,c,t){var A="ee",g=1;do{A=r(c,g,t,e),g++}while(!A.startsWith("0000"));return{hash:A,nonce:g}},r=function(e,c,t,A){var g=e+c+t+A,n=b.a.SHA256(g);return b.a.enc.Hex.stringify(n)},m=function(e){var c=e.blockData,t=e.hashData,g=e.setParentState,n=e.setNewHash,a="text-center mx-3 ",I="card text-center col-md-6 my-5 p-0 shadow mb-5 rounded ";console.log(c);var l=!t.curr.startsWith("0000");l?(a+="text-danger",I+="border-danger"):(a+="text-primary",I+="border-primary");return Object(A.jsxs)("div",{className:I,children:[Object(A.jsx)("div",{className:"card-footer ",children:Object(A.jsxs)("strong",{children:["Block ID : ",c.id]})}),Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[Object(A.jsx)("div",{className:" card-text",children:"Data"}),0===c.id?Object(A.jsx)("div",{className:"form-control text-muted mx-3",children:c.data}):Object(A.jsx)("input",{className:"form-control mx-3",onChange:function(e){return function(e){var A=e.target.value,n=r(A,c.nonce,t.prev,c.id),a={id:c.id,data:A};g(a,n)}(e)},value:c.data})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[Object(A.jsx)("small",{className:" card-text",children:"Hash"}),Object(A.jsx)("small",{className:a,children:t.curr})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[Object(A.jsx)("small",{className:" card-text",children:"Previous Hash"}),Object(A.jsx)("small",{className:a,children:t.prev})]})]}),Object(A.jsx)("div",{className:"card-header ",children:Object(A.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[l&&Object(A.jsx)("div",{className:"p-2 mining",children:Object(A.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(){var e=o(c.id,c.data,t.prev);n(e,c.id)}()},children:"Mine"})}),Object(A.jsx)("div",{className:"p-2 ",children:Object(A.jsx)("div",{className:"card-text text-muted text-center ","data-toggle":"tooltip",title:"Nonce",children:c.nonce})})]})})]})},h=function(e){var c=e.height,t=void 0===c?"35":c,g=e.width,n=void 0===g?"35":g,a=e.className,I=e.fillColor;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,fill:I,className:a,viewBox:"0 0 16 16",children:Object(A.jsx)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"})})},j=o(0,"Welcome to Block Chain Demo",0),p=function(){var e=Object(g.useState)([{id:0,data:"Welcome to Block Chain Demo",nonce:j.nonce}]),c=Object(i.a)(e,2),t=c[0],n=c[1],a=Object(g.useState)([j.hash]),I=Object(i.a)(a,2),l=I[0],s=I[1],b=Object(g.useRef)(),p=function(e,c){n(t.map((function(t){return t.id===c?Object(C.a)(Object(C.a)({},t),{},{nonce:e.nonce}):t}))),s(l.map((function(t,A){return A===c?e.hash:t})))},v=function(e,c){n(t.map((function(c){return c.id===e.id?Object(C.a)(Object(C.a)({},c),{},{data:e.data}):c}))),s(l.map((function(t,A){return u(t,A,e.id,c)})))},u=function(e,c,A,g){if(c===A)return g;if(c>A){var n=t[c];return r(n.data,n.nonce,l[c-1],c)}return e};return Object(A.jsxs)("div",{children:[t.map((function(e,c){return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"row mx-5",children:[Object(A.jsx)("div",{className:"col-md-3"}),Object(A.jsx)(m,{blockData:e,hashData:{curr:l[c],prev:0===c?0:l[c-1]},setParentState:v,setNewHash:p},c),Object(A.jsx)("div",{className:"col-md-3"})]}),c<10?Object(A.jsx)("div",{className:"text-center",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAADhCAYAAAA073woAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAD2EAAA9hAHVrK90AAAKOWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjMwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzAwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAyMC0xMi0yOVQxMzo1MTozOCswNTozMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjAtMTItMjlUMTM6NTE6MzgrMDU6MzA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMC0xMi0yOVQxMzo1MTozOCswNTozMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMTItMjlUMTM6NTE6MzgrMDU6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NmI1MTkzYzktZDFlYy00MTkzLTkwMDctYTRkYWZlMjg3YWRmPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMC0xMi0yOVQxMzo1MTozOCswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpkZmVjZTA3Ni1iODE3LTQwNWEtOTllNy00MTQzZTE2MDgzYTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmRmZWNlMDc2LWI4MTctNDA1YS05OWU3LTQxNDNlMTYwODNhNzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjZiNTE5M2M5LWQxZWMtNDE5My05MDA3LWE0ZGFmZTI4N2FkZjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2E2YWQxMTgtOGEzZC0xMTdlLTkxMzgtODRmOTRhMTY3M2E1PC94bXBNTTpEb2N1bWVudElEPgogICAgICA8L3JkZjpEZXNj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",alt:"chain",height:"90px"})}):Object(A.jsx)("div",{})]})})),t.length<=10?Object(A.jsxs)("div",{className:"row m-5",children:[Object(A.jsx)("div",{className:"col-md-3"}),Object(A.jsx)("div",{className:"card col-md-6 border-primary shadow p-3 mb-5 bg-white rounded",children:Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("input",{ref:b,className:"form-control m-3"}),Object(A.jsx)("div",{onClick:function(){return function(e){var c;if(e&&t.length<=10){var A=t.length,g=l[A-1],a=function(e,c,t){return{id:e,data:c,nonce:t}}(A,e,(c=o(A,e,g)).nonce);n((function(){return[].concat(Object(d.a)(t),[a])})),s((function(){return[].concat(Object(d.a)(l),[c.hash])})),b.current.focus(),b.current.scrollIntoView()}}(b.current.value)},children:Object(A.jsx)(h,{height:"35",width:"35",className:"text-center bi bi-plus-square-fill container-fluid",fillColor:"#0000ff"})})]})}),Object(A.jsx)("div",{className:"col-md-3"})]}):Object(A.jsx)("div",{})]})},v=function(){return Object(A.jsx)(I.a,{children:Object(A.jsx)(l.c,{children:Object(A.jsx)(l.a,{path:"/",exact:!0,component:p})})})};a.a.render(Object(A.jsx)(v,{}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.7839e113.chunk.js.map
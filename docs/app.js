<<<<<<< HEAD
!function e(t,n,r){function i(o,l){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=e("../../src/utils.js"),a=r(i),o=e("../../src/table.js"),l=r(o),s=e("./config.json"),u=r(s);a.default.request("https://randomuser.me/api/?results=200&nat=es").then(function(e){l.default.load(u.default,e.results)})},{"../../src/table.js":5,"../../src/utils.js":6,"./config.json":2}],2:[function(e,t,n){t.exports={table:"table-example",fields:[{title:"Username",field:"login.username",id:"username"},{title:"Name",field:"name.first",id:"name"},{title:"Last Name",field:"name.last",id:"lastname"},{title:"Street",field:"location.street",id:"street"}],search:{id:"search"},text:{total:"total-text",filter:"filter-text"}}},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./utils.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(t){r(this,e),this.iconMapper={fa:{asc:"fa-sort-asc",desc:"fa-sort-desc"}},this.elements=this.getElements(t)}return i(e,[{key:"getElements",value:function(e){var t={table:document.getElementById(e.table),search:{input:document.getElementById("input-"+e.search.id),button:document.getElementById("button-"+e.search.id)},text:{total:document.getElementById(e.text.total),filter:document.getElementById(e.text.filter)},fields:{}};return e.fields.forEach(function(e){t.fields[e.field]={input:document.getElementById("input-"+e.id),button:document.getElementById("button-"+e.id)}}),t}},{key:"clean",value:function(){this.elements.table.innerHTML=""}},{key:"draw",value:function(e){this.clean(),this.__addEvents(e),this.__drawHeaders(e),this.__drawBody(e),this.__drawText(e)}},{key:"__addEvents",value:function(e){this.__setSimpleSearch(e),this.__setAdvancedSearch(e)}},{key:"__drawCol",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"td",r=document.createElement(n);r.innerText=t,e.appendChild(r)}},{key:"__drawText",value:function(e){var t=this.elements.text;if(t&&(t.total&&(t.total.innerText=e.model.length),t.filter)){var n=e.filter?e.filter.length:e.model.length;t.filter.innerText=n}}},{key:"__drawHeaders",value:function(e){var t=document.createElement("thead"),n=document.createElement("tr");e.fields.forEach(this.__drawOrder.bind(this,e,n)),t.appendChild(n),this.elements.table.appendChild(t)}},{key:"__drawOrder",value:function(e,t,n){var r=document.createElement("th"),i=document.createElement("a"),a=document.createElement("i");a.className="fa ",a.style.marginLeft="5px";var o=this.iconMapper.fa[e.orderField[n.field]];a.className+=o||"fa-sort",i.innerText=n.title,i.href="javascript:void(0)",i.addEventListener("click",e.order.bind(e,n.field)),i.appendChild(a),r.appendChild(i),t.appendChild(r)}},{key:"__drawBody",value:function(e){var t=this,n=document.createElement("tbody");(e.filter||e.model).forEach(function(r){var i=document.createElement("tr");e.fields.forEach(function(e){t.__drawCol(i,o.default.getPropertyByString(r,e.field))}),n.appendChild(i)}),this.elements.table.appendChild(n)}},{key:"__setSearchTimeout",value:function(e,t,n,r){clearTimeout(this.searchInProgres),this.searchInProgres=setTimeout(t.bind(e,n),r)}},{key:"__setSimpleSearch",value:function(e){var t=this;this.elements.search.input&&(this.elements.search.input.addEventListener("keypress",function(n){13===n.keyCode&&t.__setSearchTimeout(e,e.simpleSearch,n.target.value)}),this.elements.search.button&&this.elements.search.button.addEventListener("click",function(){t.__setSearchTimeout(e,e.simpleSearch,t.elements.search.input.value)}))}},{key:"__setAdvancedSearch",value:function(e){var t=this,n={};e.fields.forEach(function(r,i){var a=t.elements.fields[r.field];n[r.field]=a,a.input&&(a.input.addEventListener("keypress",function(i){(r.autorefresh||13===i.keyCode)&&t.__setSearchTimeout(e,e.advancedSearch,n,r.autorefresh)}),a.button&&a.button.addEventListener("click",function(){t.__setSearchTimeout(e,e.advancedSearch,n)}))})}}]),e}();n.default=l},{"./utils.js":6}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./utils.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(t,n){r(this,e),this.config=t,this.fields=t.fields,this.model=n,this.orderField={}}return i(e,[{key:"load",value:function(e){return this.render=e,this.render(this),this}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.filter=e,this.render(this)}},{key:"simpleSearch",value:function(e){var t=this,n=o.default.transformString(e);this.config.search&&this.config.search.fields&&!this.searchFields&&(this.searchFields=this.fields.filter(function(e){return t.config.search.fields.includes(e.id)}));var r=this.model.filter(function(e){return(t.searchFields||t.fields).some(function(t){return o.default.transformString(o.default.getPropertyByString(e,t.field)).indexOf(n)>=0})});this.reload(r)}},{key:"advancedSearch",value:function(e){var t=this.model;this.fields.forEach(function(n){var r=e[n.field];if(r&&r.input){var i=o.default.transformString(r.input.value);t=t.filter(function(e){return o.default.transformString(o.default.getPropertyByString(e,n.field)).indexOf(i)>=0})}}),this.reload(t)}},{key:"order",value:function(e){var t=1,n=-1;"asc"===this.orderField[e]?(t=-1,n=1,this.orderField={},this.orderField[e]="desc"):(this.orderField={},this.orderField[e]="asc");var r=(this.filter||this.model).sort(function(r,i){var a=o.default.getPropertyByString(r,e),l=o.default.getPropertyByString(i,e);return a>l?t:a<l?n:0});this.reload(r)}}]),e}();n.default=l},{"./utils.js":6}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("./table-logic"),l=r(o),s=e("./table-dom"),u=r(s),d=function(){function e(){i(this,e)}return a(e,null,[{key:"load",value:function(e,t){if(!e)throw new Error("Argument 1 is missing: configuration json");if(!t)throw new Error("Argument 2 is missing: array model");var n=new l.default(e,t),r=function t(){var r=new u.default(e);n.load(r.draw.bind(r)),window.removeEventListener("DOMContentLoaded",t)};return window.addEventListener("DOMContentLoaded",r),"complete"===document.readyState&&r(),n}}]),e}();window.pyrite||(window.pyrite={}),n.default=t.exports=window.pyrite.Table=d},{"./table-dom":3,"./table-logic":4}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return i(e,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(200===i.status?n(t.plain?i.responseText:JSON.parse(i.responseText)):r({status:i.status,message:i.responseText}))},i.open(t.method||"GET",e,!0),i.send()})}},{key:"getPropertyByString",value:function(e,t){for(var n=t.split(".");n.length&&(e=e[n.shift()]););return e}},{key:"transformString",value:function(e){return e.toString().toUpperCase().trim()}}]),e}();n.default=new a},{}]},{},[1]);
=======
!function e(t,n,r){function i(l,o){if(!n[l]){if(!t[l]){var u="function"==typeof require&&require;if(!o&&u)return u(l,!0);if(a)return a(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var d=n[l]={exports:{}};t[l][0].call(d.exports,function(e){var n=t[l][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[l].exports}for(var a="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=e("pyrite-table/utils.js"),a=r(i),l=e("pyrite-table"),o=r(l),u=e("./config.js"),s=r(u);a.default.request("https://randomuser.me/api/?results=200&nat=es").then(function(e){o.default.load(s.default,e.results)})},{"./config.js":2,"pyrite-table":3,"pyrite-table/utils.js":6}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={table:"table-example",fields:[{title:"Username",field:"login.username",id:"username"},{title:"Name",field:"name.first",id:"name"},{title:"Last Name",field:"name.last",id:"lastname"},{title:"Street",field:"location.street",id:"street",order:!1},{title:"Full Name",template:function(e){return e.name.first+" "+e.name.last},order:function(e,t){var n=e.name.first+" "+e.name.last,r=t.name.first+" "+t.name.last;return n>r?1:n<r?-1:0}},{title:"Email",field:"email",template:function(e){return'<a href="mailto:'+e.email+'">'+e.email+"<a>"}}],search:{id:"search",fields:["login.username","name.first","name.last"]},text:{total:"total-text",filter:"filter-text"}}},{}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./table-logic"),o=r(l),u=e("./table-dom"),s=r(u),d=function(){function e(){i(this,e)}return a(e,null,[{key:"load",value:function(e,t){if(!e)throw new Error("Argument 1 is missing: configuration json");if(!t)throw new Error("Argument 2 is missing: array model");var n=new o.default(e,t),r=function t(){var r=new s.default(e);n.load(r.draw.bind(r)),window.removeEventListener("DOMContentLoaded",t)};return window.addEventListener("DOMContentLoaded",r),"complete"===document.readyState&&r(),n}}]),e}();window.pyrite||(window.pyrite={}),n.default=t.exports=window.pyrite.Table=d},{"./table-dom":4,"./table-logic":5}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./utils.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(){function e(t){r(this,e),this.iconMapper={fa:{asc:"fa-sort-asc",desc:"fa-sort-desc"}},this.elements=this.getElements(t)}return i(e,[{key:"getElements",value:function(e){var t={table:document.getElementById(e.table),search:{input:document.getElementById("input-"+e.search.id),button:document.getElementById("button-"+e.search.id)},text:{total:document.getElementById(e.text.total),filter:document.getElementById(e.text.filter)},fields:{}};return e.fields.forEach(function(e){t.fields[e.field]={input:document.getElementById("input-"+e.id),button:document.getElementById("button-"+e.id)}}),t}},{key:"clean",value:function(){this.elements.table.innerHTML=""}},{key:"draw",value:function(e){this.clean(),this.__addEvents(e),this.__drawHeaders(e),this.__drawBody(e),this.__drawText(e)}},{key:"__addEvents",value:function(e){this.__setSimpleSearch(e),this.__setAdvancedSearch(e)}},{key:"__drawCol",value:function(e,t,n){var r=document.createElement("td");n.template?r.innerHTML=n.template(t):r.innerText=l.default.getPropertyByString(t,n.field),e.appendChild(r)}},{key:"__drawText",value:function(e){var t=this.elements.text;if(t&&(t.total&&(t.total.innerText=e.model.length),t.filter)){var n=e.filter?e.filter.length:e.model.length;t.filter.innerText=n}}},{key:"__drawHeaders",value:function(e){var t=document.createElement("thead"),n=document.createElement("tr");e.fields.forEach(this.__drawOrder.bind(this,e,n)),t.appendChild(n),this.elements.table.appendChild(t)}},{key:"__drawLink",value:function(e,t,n){n.href="javascript:void(0)";var r=document.createElement("i");r.className="fa ",r.style.marginLeft="5px";var i=this.iconMapper.fa[e.orderField[t.field]];r.className+=i||"fa-sort",n.addEventListener("click",e.order.bind(e,t)),n.appendChild(r)}},{key:"__drawOrder",value:function(e,t,n){var r=n.order||n.field&&!1!==n.order,i=document.createElement("th"),a=document.createElement(r?"a":"span");a.innerText=n.title,r&&this.__drawLink(e,n,a),i.appendChild(a),t.appendChild(i)}},{key:"__drawBody",value:function(e){var t=this,n=document.createElement("tbody");(e.filter||e.model).forEach(function(r){var i=document.createElement("tr");e.fields.forEach(function(e){t.__drawCol(i,r,e)}),n.appendChild(i)}),this.elements.table.appendChild(n)}},{key:"__setSearchTimeout",value:function(e,t,n,r){clearTimeout(this.searchInProgres),this.searchInProgres=setTimeout(t.bind(e,n),r)}},{key:"__setSimpleSearch",value:function(e){var t=this;this.elements.search.input&&(this.elements.search.input.addEventListener("keypress",function(n){13===n.keyCode&&t.__setSearchTimeout(e,e.simpleSearch,n.target.value)}),this.elements.search.button&&this.elements.search.button.addEventListener("click",function(){t.__setSearchTimeout(e,e.simpleSearch,t.elements.search.input.value)}))}},{key:"__setAdvancedSearch",value:function(e){var t=this,n={};e.fields.forEach(function(r,i){var a=t.elements.fields[r.field];n[r.field]=a,a.input&&(a.input.addEventListener("keypress",function(i){(r.autorefresh||13===i.keyCode)&&t.__setSearchTimeout(e,e.advancedSearch,n,r.autorefresh)}),a.button&&a.button.addEventListener("click",function(){t.__setSearchTimeout(e,e.advancedSearch,n)}))})}}]),e}();n.default=o},{"./utils.js":6}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./utils.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(){function e(t,n){r(this,e),this.config=t,this.fields=t.fields,this.model=n,this.orderField={}}return i(e,[{key:"load",value:function(e){return this.render=e,this.render(this),this}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.filter=e,this.render(this)}},{key:"simpleSearch",value:function(e){var t=this,n=l.default.transformString(e);this.searchFields||(this.config.search&&this.config.search.fields?this.searchFields=this.fields.filter(function(e){return t.config.search.fields.includes(e.field)}):this.searchFields=this.fields.filter(function(e){return e.field}));var r=this.model.filter(function(e){return t.searchFields.some(function(t){return l.default.transformString(l.default.getPropertyByString(e,t.field)).indexOf(n)>=0})});this.reload(r)}},{key:"advancedSearch",value:function(e){var t=this.model;this.fields.forEach(function(n){var r=e[n.field];if(r&&r.input){var i=l.default.transformString(r.input.value);t=t.filter(function(e){return l.default.transformString(l.default.getPropertyByString(e,n.field)).indexOf(i)>=0})}}),this.reload(t)}},{key:"order",value:function(e){var t=e.field,n=1,r=-1;"asc"===this.orderField[t]?(n=-1,r=1,this.orderField={},this.orderField[t]="desc"):(this.orderField={},this.orderField[t]="asc");var i=this.filter||this.model,a=null;a=e.order?i.sort(function(t,r){return e.order(t,r)*n}):i.sort(function(e,i){var a=l.default.getPropertyByString(e,t),o=l.default.getPropertyByString(i,t);return a>o?n:a<o?r:0}),this.reload(a)}}]),e}();n.default=o},{"./utils.js":6}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return i(e,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(200===i.status?n(t.plain?i.responseText:JSON.parse(i.responseText)):r({status:i.status,message:i.responseText}))},i.open(t.method||"GET",e,!0),i.send()})}},{key:"getPropertyByString",value:function(e,t){for(var n=t.split(".");n.length&&(e=e[n.shift()]););return e}},{key:"transformString",value:function(e){return e.toString().toUpperCase().trim()}}]),e}();n.default=new a},{}]},{},[1]);
>>>>>>> 7aaf499... Added custom template and custom order

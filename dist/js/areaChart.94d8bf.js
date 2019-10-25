(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1150:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(1166),u=r(1167),c=r(596),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),l(t,[{key:"render",value:function(){return n.a.createElement(c.Chart,{height:400,padding:50,background:{fill:"#fff"},data:[{year:"1991",value:15468},{year:"1992",value:16100},{year:"1993",value:15900},{year:"1994",value:17409},{year:"1995",value:17e3},{year:"1996",value:31056},{year:"1997",value:31982},{year:"1998",value:32040},{year:"1999",value:33233}],scale:{value:{min:1e4,alias:"数量"},year:{range:[0,1],alias:"年份"}},forceFit:!0},n.a.createElement(c.Axis,{name:"year"}),n.a.createElement(c.Axis,{name:"value",label:{formatter:function(e){return(Number(e)/1e4).toFixed(1)+"k"}}}),n.a.createElement(c.Tooltip,{showTitle:!1,crosshairs:{type:"cross"}}),n.a.createElement(c.Geom,{type:"area",position:"year*value"}),n.a.createElement(c.Geom,{type:"line",position:"year*value",tooltip:"year*value"}))}}]),t}(),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),y(t,[{key:"render",value:function(){return n.a.createElement(c.Chart,{height:400,padding:[30,30,80,60],background:{fill:"#fff"},data:[{country:"Asia",year:"1750",value:502},{country:"Asia",year:"1800",value:635},{country:"Asia",year:"1850",value:809},{country:"Asia",year:"1900",value:5268},{country:"Asia",year:"1950",value:4400},{country:"Asia",year:"1999",value:3634},{country:"Asia",year:"2050",value:947},{country:"Africa",year:"1750",value:106},{country:"Africa",year:"1800",value:107},{country:"Africa",year:"1850",value:111},{country:"Africa",year:"1900",value:1766},{country:"Africa",year:"1950",value:221},{country:"Africa",year:"1999",value:767},{country:"Africa",year:"2050",value:133},{country:"Europe",year:"1750",value:163},{country:"Europe",year:"1800",value:203},{country:"Europe",year:"1850",value:276},{country:"Europe",year:"1900",value:628},{country:"Europe",year:"1950",value:547},{country:"Europe",year:"1999",value:729},{country:"Europe",year:"2050",value:408},{country:"Oceania",year:"1750",value:200},{country:"Oceania",year:"1800",value:200},{country:"Oceania",year:"1850",value:200},{country:"Oceania",year:"1900",value:460},{country:"Oceania",year:"1950",value:230},{country:"Oceania",year:"1999",value:300},{country:"Oceania",year:"2050",value:300}],scale:{year:{type:"linear",tickInterval:50}},forceFit:!0},n.a.createElement(c.Axis,{name:"year",label:{formatter:function(e){return e+"年"}}}),n.a.createElement(c.Axis,{name:"value"}),n.a.createElement(c.Legend,null),n.a.createElement(c.Tooltip,{crosshairs:{type:"y"}}),n.a.createElement(c.Geom,{type:"areaStack",position:"year*value",color:"country"}),n.a.createElement(c.Geom,{type:"lineStack",position:"year*value",size:2,color:"country"}))}}]),t}(),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),p(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement(o.a,{gutter:16},n.a.createElement(u.a,{xl:12,lg:24},n.a.createElement("h3",null,"基础面积图"),n.a.createElement(i,null)),n.a.createElement(u.a,{xl:12,lg:24},n.a.createElement("h3",null,"堆叠面积图"),n.a.createElement(f,null))))}}]),t}();r.d(t,"default",function(){return s})}}]);
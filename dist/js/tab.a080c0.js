(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{867:function(e,a,t){"use strict";t.r(a);var n=t(123),l=t.n(n),r=t(182),i=t.n(r),o=t(74),s={props:{name:{required:!0,type:String}},data:function(){return{tableData:[],tabLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;return i()(l.a.mark(function a(){var t;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.tabLoading=!0,a.next=3,o.a.tab.getList({name:e.name});case 3:t=a.sent,e.tableData=t.data.tabList,e.tabLoading=!1;case 6:case"end":return a.stop()}},a,e)}))()}}},c=t(51),b={name:"Tab",components:{TabPane:Object(c.a)(s,function(){var e=this.$createElement,a=this._self._c||e;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:this.tabLoading,expression:"tabLoading"}],attrs:{data:this.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180px"}}),this._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180px"}}),this._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别"}}),this._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),this._v(" "),a("el-table-column",{attrs:{prop:"mobilePhone",label:"手机"}})],1)},[],!1,null,null,null).exports},data:function(){return{activeName:"first",tabOptions:[{label:"标签页一",name:"first"},{label:"标签页二",name:"second"},{label:"标签页三",name:"third"},{label:"标签页四",name:"fourth"}]}},methods:{handleClick:function(e,a){console.log(e,a)}}},u=Object(c.a)(b,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",[e._v("el-tab组件会一次性将所有pane中的数据获取完。使用v-if来按需加载对应的pane,使用keep-alive做缓存。")]),e._v(" "),t("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},e._l(e.tabOptions,function(a){return t("el-tab-pane",{key:a.name,attrs:{label:a.label,name:a.name}},[t("keep-alive",[e.activeName===a.name?t("tab-pane",{attrs:{name:a.name}}):e._e()],1)],1)}),1)],1)},[],!1,null,null,null).exports;t.d(a,"default",function(){return u})}}]);
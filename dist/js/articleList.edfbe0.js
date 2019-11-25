(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{626:function(e,t,i){},756:function(e,t,i){"use strict";var a=i(626);i.n(a).a},863:function(e,t,i){"use strict";i.r(t);var a=i(181),n=i(71),l=i(18),r=i(690),o=i(688),s=i(689),c={name:"ArticleList",components:{SectionTitle:r.a,ExportExcel:o.a,Pagination:s.a},data:function(){return{articleList:[],articleTypes:a.a.getTable("article"),articleTableLoading:!1,queryCondition:{title:"",author:"",type:[],pageNumber:1,pageSize:20},total:0,selectedRows:[]}},created:function(){this.getArticleList()},methods:{getArticleList:function(){var e=this;this.articleTableLoading=!0,n.a.article.getList(this.queryCondition).then(function(t){e.articleList=t.data.articleList.map(function(t,i){return{id:t.id,index:(e.queryCondition.pageNumber-1)*e.queryCondition.pageSize+i+1,author:t.author,createDate:t.createDate,title:t.title,type:t.type,browseNum:t.browseNum}}),e.total=t.data.total,e.articleTableLoading=!1;var i=document.querySelector(".inner-layout__page");Object(l.e)(i,0,800)})},filter:function(e,t,i){return t[i.property]===e},handleAdd:function(){this.$router.push("/article/add")},handleDeleteBatch:function(){var e=this;if(0===this.selectedRows.length)this.$message.warning("请勾选要删除的文章！");else{var t=this.selectedRows.map(function(e){return e.title});this.$confirm("确认删除以下文章“"+t.join("，")+"”？","提示",{type:"warning",dangerouslyUseHTMLString:!0}).then(function(){e.getArticleList(),e.$message.success("删除成功！")}).catch(function(){})}},handleDelete:function(e,t){var i=this;this.$confirm("确认删除文章“"+t.title+"”？","提示",{type:"warning"}).then(function(){i.getList(),i.$message.success("删除成功！")})},handleSelectedRows:function(e){this.selectedRows=e}}},u=(i(756),i(70)),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"article-list"},[i("div",{staticClass:"article-list__header"},[i("section-title",{attrs:{name:"文章列表"}}),e._v(" "),i("div",[i("el-button",{attrs:{type:"primary",round:"",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新增文章")]),e._v(" "),i("el-button",{attrs:{type:"danger",round:"",icon:"el-icon-minus"},on:{click:e.handleDeleteBatch}},[e._v("批量删除")]),e._v(" "),i("export-excel",{attrs:{"file-name":"文章数据表",header:["序号","作者","创建时间","标题","类型","阅读数"],"filter-filed":["index","author","createDate","title","type","browseNum"],data:e.articleList}},[e._v("\n        导出表格\n      ")])],1)],1),e._v(" "),i("div",{staticClass:"article-list__search"},[i("el-form",{attrs:{inline:!0,model:e.queryCondition}},[i("el-form-item",{attrs:{label:"标题:"}},[i("el-input",{attrs:{placeholder:"请输入文章标题关键字",clearable:""},model:{value:e.queryCondition.title,callback:function(t){e.$set(e.queryCondition,"title",t)},expression:"queryCondition.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"作者:"}},[i("el-input",{attrs:{placeholder:"请输入作者姓名关键字",clearable:""},model:{value:e.queryCondition.author,callback:function(t){e.$set(e.queryCondition,"author",t)},expression:"queryCondition.author"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"类型:"}},[i("el-select",{attrs:{placeholder:"请选择文章类型",filterable:"",multiple:"",clearable:""},model:{value:e.queryCondition.type,callback:function(t){e.$set(e.queryCondition,"type",t)},expression:"queryCondition.type"}},e._l(e.articleTypes,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",round:"",icon:"el-icon-search"},on:{click:e.getArticleList}},[e._v("查询")])],1)],1)],1),e._v(" "),i("div",{staticClass:"article-list__table"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.articleTableLoading,expression:"articleTableLoading"}],attrs:{data:e.articleList,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectedRows}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),i("el-table-column",{attrs:{prop:"index",label:"序号",width:"80px"}}),e._v(" "),i("el-table-column",{attrs:{prop:"author",label:"作者",width:"120px"}}),e._v(" "),i("el-table-column",{attrs:{prop:"createDate",label:"创建时间",sortable:"",width:"180px"}}),e._v(" "),i("el-table-column",{attrs:{prop:"title",label:"标题"}}),e._v(" "),i("el-table-column",{attrs:{prop:"type",label:"类型",width:"120px"}}),e._v(" "),i("el-table-column",{attrs:{prop:"browseNum",label:"阅读数",sortable:"",width:"100px"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("router-link",{attrs:{to:"/article/edit/"+t.row.id+"/"+t.row.index}},[i("el-button",{attrs:{type:"text"}},[e._v("编辑")])],1),e._v(" "),i("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),i("pagination",{attrs:{total:e.total,"page-number":e.queryCondition.pageNumber,"page-size":e.queryCondition.pageSize},on:{"update:pageNumber":function(t){return e.$set(e.queryCondition,"pageNumber",t)},"update:page-number":function(t){return e.$set(e.queryCondition,"pageNumber",t)},"update:pageSize":function(t){return e.$set(e.queryCondition,"pageSize",t)},"update:page-size":function(t){return e.$set(e.queryCondition,"pageSize",t)},pagination:e.getArticleList}})],1)},[],!1,null,"db4baf98",null).exports;i.d(t,"default",function(){return d})}}]);
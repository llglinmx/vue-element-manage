(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{675:function(e,t,n){},820:function(e,t,n){"use strict";var a=n(675);n.n(a).a},865:function(e,t,n){"use strict";n.r(t);var a=n(597),i=n.n(a),o=n(600),r=n.n(o);i.a.GlobalWorkerOptions.workerSrc=r.a;var s={name:"PdfPagination",data:function(){return{pdfDoc:null,fileLoading:!1,fileUrl:"http://www.xdocin.com/xdoc?_key=fedii4dtyfhmvgryqyntfjavte&_func=down&_dir=pdfdemo.pdf",totalPage:0}},created:function(){this.loadFile()},methods:{loadFile:function(){var e=this;i.a.getDocument(this.fileUrl).promise.then(function(t){e.pdfDoc=t,e.totalPage=t.numPages,e.renderPage(1)}).catch(function(){e.$message.error("文件加载失败！"),e.fileLoading=!1})},renderPage:function(e){var t=this;this.pdfDoc.getPage(e).then(function(e){var n=800/e.getViewport({scale:1}).width,a=e.getViewport({scale:n}),i=t.$refs.canvas,o=i.getContext("2d");i.height=a.height,i.width=a.width;var r={canvasContext:o,viewport:a};e.render(r)})},handleCurrentChange:function(e){this.renderPage(e)}}},c=(n(820),n(70)),d=Object(c.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pdf-pagination"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.fileLoading,expression:"fileLoading"}],staticClass:"pdf-pagination__canvas",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"文件加载中"}},[t("canvas",{ref:"canvas"})]),this._v(" "),t("el-pagination",{attrs:{layout:"prev, pager, next,jumper","page-size":1,total:this.totalPage,background:""},on:{"current-change":this.handleCurrentChange}})],1)},[],!1,null,"60b4c3b4",null).exports;n.d(t,"default",function(){return d})}}]);
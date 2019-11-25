(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{656:function(e,r,a){},789:function(e,r,a){"use strict";var t=a(656);a.n(t).a},872:function(e,r,a){"use strict";a.r(r);var t={name:"ValidForm",data:function(){var e=this;return{formData:{password:"",checkPassword:"",age:""},formRule:{password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"密码长度为6~20位",trigger:"blur"},{validator:function(r,a,t){/\d/.test(a)&&/[a-zA-Z]/.test(a)?(""!==e.formData.checkPassword&&e.$refs.form.validateField("checkPassword"),t()):t(new Error("密码至少要包含数字和字母"))},trigger:"blur"}],checkPassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:function(r,a,t){a!==e.formData.password?t(new Error("两次输入密码不一致!")):t()},trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{type:"number",message:"年龄需要为数字"},{validator:function(e,r,a){r<18?a(new Error("必须年满18岁")):a()},trigger:"blur"}]},submitLoading:!1}},methods:{handleSubmit:function(){var e=this;this.submitLoading=!0,this.$refs.form.validate(function(r){r?e.$message.success("提交成功！"):e.$message.error("请按正确格式填写！")}),this.submitLoading=!1},handleReset:function(){this.$refs.form.resetFields()}}},s=(a(789),a(70)),o=Object(s.a)(t,function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"form-valid"},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.formRule,"status-icon":"","label-width":"100px"}},[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPassword"}},[a("el-input",{attrs:{type:"password"},model:{value:e.formData.checkPassword,callback:function(r){e.$set(e.formData,"checkPassword",r)},expression:"formData.checkPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[a("el-input",{model:{value:e.formData.age,callback:function(r){e.$set(e.formData,"age",e._n(r))},expression:"formData.age"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary",round:"",loading:e.submitLoading},on:{click:e.handleSubmit}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{round:""},on:{click:e.handleReset}},[e._v("重置")])],1)],1)},[],!1,null,"005a8801",null).exports;a.d(r,"default",function(){return o})}}]);
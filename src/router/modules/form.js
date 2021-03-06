const InnerLayout = () =>
  import(/* webpackChunkName:'innerLayout' */ '@/layouts/inner-layout')
const BaseForm = () =>
  import(/* webpackChunkName:'baseForm' */ '@/pages/form/base-form')
const StepForm = () =>
  import(/* webpackChunkName:'stepForm' */ '@/pages/form/step-form')
const DynamicForm = () =>
  import(/* webpackChunkName:'dynamicForm' */ '@/pages/form/dynamic-form')
const ValidForm = () =>
  import(/* webpackChunkName:'validForm' */ '@/pages/form/valid-form')

const route = {
  name: 'Form',
  path: '/form',
  component: InnerLayout,
  meta: {
    title: '表单',
    icon: 'form'
  },
  children: [
    {
      name: 'BaseForm',
      path: '/form/baseForm',
      component: BaseForm,
      meta: {
        title: '基础表单'
      }
    },
    {
      name: 'StepForm',
      path: '/form/stepForm',
      component: StepForm,
      meta: {
        title: '步骤表单'
      }
    },
    {
      name: 'DynamicForm',
      path: '/form/dynamicForm',
      component: DynamicForm,
      meta: {
        title: '动态表单'
      }
    },
    {
      name: 'ValidForm',
      path: '/form/validForm',
      component: ValidForm,
      meta: {
        title: '自定义校验规则'
      }
    }
  ]
}

export default route

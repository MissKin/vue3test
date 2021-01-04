const { FALSE } = require('node-sass')
const { onMounted } = require('vue')

const withPromise = (wrapped, promiseFn) => { // wrapped 被包裹的组件对象  promiseFn 请求对应的函数
  return {
    name: 'with-promise',
    data () {
      return {
        loading: false,
        error: false,
        result: null
      }
    },
    async mounted () {
      this.loading = true
      const result = await promiseFn().finally(() => {
        this.loading = false
      })
      this.result = result
    },
    render (h) {
      return h(wrapped, {
        props: {
          result: this.result,
          loading: this.loading
        }
      })
    }
  }
}

export default withPromise

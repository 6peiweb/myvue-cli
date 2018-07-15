import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  name: 'info',
  props: {
    url: {
      type: String
    }
  }
})

export default class Info extends Vue {
  private kList: any = {
    vue: 'https://cn.vuejs.org/',
    pug: 'https://pug.bootcss.com/api/getting-started.html',
    sass: 'https://www.sass.hk/guide/',
    webpack: 'https://webpack.docschina.org/',
    typescript: 'http://www.tslang.cn/'
  }
}

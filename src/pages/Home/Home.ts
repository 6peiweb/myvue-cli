import Component from 'vue-class-component'
import Vue from 'vue'
import Http from './lib/http'
import Info from '@/components/Info/Info.vue'

@Component({
  name: 'home',
  components: {
    Info
  }
})

export default class Home extends Vue {
  private url: string = ''

  created () {
    Http.getGithubIntro()
      .then((res: any) => this.url = res.data && res.data.url)
  }
}

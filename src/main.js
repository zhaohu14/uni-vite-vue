import {
	createSSRApp
} from "vue"
import App from "./App.vue"
import showModal from './components/showModal/showModal.vue'
import userCard from './components/userCard/userCard.vue'
import functionCard from './components/functionCard/functionCard.vue'
import doctorCard from './components/doctorCard/doctorCard.vue'

export function createApp() {
	const app = createSSRApp(App)
  /* ==================== 全局注册组件 ==================== */
  app.component('showModal', showModal)
  app.component('userCard', userCard)
  app.component('functionCard', functionCard)
  app.component('doctorCard', doctorCard)
  /* ==================== 全局注册组件 ==================== */
	return {
		app
	}
}


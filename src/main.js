import {
	createSSRApp
} from "vue"
import App from "./App.vue"
import showModal from './components/showModal/showModal.vue'

export function createApp() {
	const app = createSSRApp(App)
  app.component('showModal', showModal)
	return {
		app
	}
}


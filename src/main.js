import { createApp } from 'vue'
import App from './App.vue'

// This is exactly what an external consumer writes:
// 1) base tokens, 2) one (or more) brand preset(s), 3) the component styles.
import '@ptlm-azulejo/themes/base.css'
import '@ptlm-azulejo/themes/presets/leroy-merlin.css'
import '@ptlm-azulejo/themes/presets/adeo.css'
import '@ptlm-azulejo/button/style.css'

createApp(App).mount('#app')

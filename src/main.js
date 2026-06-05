import { createApp } from 'vue'
import App from './App.vue'

// This is exactly what an external consumer writes: a brand preset (each preset
// bundles base.css) plus the component styles. Both presets are imported here so
// the toolbar can switch brand at runtime.
import '@ptlm-azulejo/themes/presets/leroy-merlin.css'
import '@ptlm-azulejo/themes/presets/adeo.css'
import '@ptlm-azulejo/button/style.css'

createApp(App).mount('#app')

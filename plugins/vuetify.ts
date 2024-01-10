import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const maxBrand = {
  dark: true,
  colors: {
    background: '#111517', // adobe
    surface: '#6C8FA6', // adobe
    primary: '#7D541A', //pick
    accent: '#E6A54D', // adobe
    error: '#EC4643', //Imperial Red
    info: '#5CB0E6', // adobe
    success: '#277C30', //Office Green
    warning: '#C96911', // Alloy Orange
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'maxBrand',
      themes: {
        maxBrand,
      },
    },
  })
  app.vueApp.use(vuetify)
})

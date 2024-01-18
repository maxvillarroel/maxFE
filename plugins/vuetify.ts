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
    error: '#B22A38',
    info: '#3e90cc',
    success: '#28af60',
    warning: '#DC8E27',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      global: { variant: 'outlined'},
      VSheet: { variant: 'flat'},
      VList: { variant: 'text'},
      VListItem: { variant: 'text'},
      VCard: { VCardActions: { VBtn: { variant: 'outlined' } } }
    },
    theme: {
      defaultTheme: 'maxBrand',
      themes: {
        maxBrand,
      },
    },
  })
  app.vueApp.use(vuetify)
})

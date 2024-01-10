export default defineNuxtRouteMiddleware((to, from) => {
    const account = useState('account')
    if (!account.value) {
      return navigateTo('/login/?to='+ to.path);
    }
  })
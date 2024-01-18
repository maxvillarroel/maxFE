<template>
    <v-main class="d-flex align-center justify-center">
        <v-card 
        min-width="300"
        width="425"
        class="d-flex flex-column justify-space-between pa-6 ma-12">
            <v-form @submit.prevent="login">
                <v-text-field
                    v-model="credentials.username"
                    :rules="rules.username"
                    label="Username"
                    class="mb-2"
                    autocomplete="username"
                ></v-text-field>
                <v-text-field
                    v-model="credentials.password"
                    :rules="rules.password"
                    label="Password"
                    type="password"
                    class="mb-2"
                    autocomplete="current-password"
                ></v-text-field>
                <v-card-text class="pb-1">
                    <ul v-if="errors.non_field_errors" class="text-error">
                        <li v-for="error in errors.non_field_errors" class="mb-2">
                            {{ error }}
                        </li>
                    </ul>
                    <NuxtLink to="/request" class="text-info" v-bind="props">Request an accout</NuxtLink>
                </v-card-text>
                <v-card-actions class="ga-3 justify-space-between">
                    <v-btn variant="plain" text="back" prepend-icon="mdi-arrow-left" @click="$router.back()"/>
                    <v-btn
                    type="submit"
                    :disabled="logging_in"
                    :loading="logging_in"
                    prepend-icon="mdi-login"
                    >
                    Login
                    </v-btn>
                </v-card-actions>
            </v-form>   
        </v-card>
    </v-main>
</template>
<script setup>
definePageMeta({layout: false})
const route = useRoute()

const token = useState('token', () => '' )
const account = useState('account', () => {})

const credentials = ref({ username: '', password: ''})

const errors = ref({
    username: [],
    password:[],
    non_field_errors: []
})

const rules = ref({
    username: [ value => value ? true : 'You must enter a valid username.',],
    password: [value => value ? true : 'You must enter a valid password.',]
})
      
const logging_in = ref(false)
const login = async() => {
        logging_in.value = true
        await apiFetch('/accounts/login/',{
        method: 'POST',
        body: credentials.value
    })
    .then(data => { 
        account.value = data.account
        token.value = data.token
        navigateTo(route.query['to'] ?? '/roadmap')
    })
    .catch(error => { 
        errors.value = error.data
        logging_in.value = false
     })
}
</script>
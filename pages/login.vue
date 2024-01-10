<template>
    <v-layout class="rounded rounded-md">
        <v-main class="d-flex align-center justify-center">
            <v-card 
            variant="outlined"
            min-width="300"
            width="425"
            class="d-flex flex-column justify-space-between pa-6 ma-12">
                <v-card-title class="pb-6 text-center">Login</v-card-title>
                <v-text-field
                    v-model="username"
                    :rules="username_rules"
                    label="Username"
                    class="mb-2"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="password_rules"
                    label="Password"
                    type="password"
                    class="mb-2"
                ></v-text-field>
                <v-card-text v-if="errors.non_field_errors">
                    <ul class="text-error">
                        <li 
                        v-for="error in errors.non_field_errors"
                        class="mb-2"
                        >
                            {{ error }}
                        </li>
                    </ul> 
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="login" block variant="outlined">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
    </v-layout>
</template>
<script setup>
definePageMeta({layout: false})
const route = useRoute()

const token = useState('token', () => '' )
const account = useState('account', () => {})

const username = ref('')
const password = ref('')

const errors = ref({})

const username_rules = ref([
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ])
const password_rules = ref([
        value => {
          if (value) return true

          return 'You must enter a password.'
        },
      ])

const login = async() => {
    const { data, error, status } = await useAPIFetch('accounts/login/',{
        method: 'POST',
        body: {
            username: username.value,
            password: password.value
        }
    })
    if (status.value == 'error'){
        errors.value = error.value.data
    }
    if (status.value == 'success'){
        token.value = data.value.token
        account.value = data.value.account
        if (route.query['to']){ navigateTo(route.query['to']) } else { navigateTo('/profile') }
        
    }
}
</script>
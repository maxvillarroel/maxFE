<template>
    <v-layout class="rounded rounded-md">
        <v-main class="d-flex align-center justify-center">
            <v-card
            variant="outlined"
            min-width="300"
            width="425"
            class="d-flex flex-column justify-space-between pa-6 ma-12">
                <v-card-title class="pb-6 text-center">Set a password</v-card-title>
                <v-card-text >
                    <v-text-field
                        v-model="password"
                        :rules="password_rules"
                        label="Password"
                        type="password"
                        max-errors="4"
                        :error-messages="errors.password"
                        class="mb-2"
                    ></v-text-field>
                    <v-text-field
                        v-model="repeat_password"
                        :rules="repeat_password_rules"
                        label="Repeat password"
                        type="password"
                        class="mb-2"
                    ></v-text-field>
                    <ul v-if="errors.non_field_errors" class="text-error">
                        <li v-for="error in errors.non_field_errors ">{{ error }}</li>
                    </ul> 
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit" block variant="outlined">Submit</v-btn>
                    </v-card-actions>
                
            </v-card>
        </v-main>
    </v-layout>
</template>
<script setup>
const route = useRoute()
definePageMeta({layout: false})

const password = ref('')
const repeat_password = ref('')

const errors = ref({})

const password_rules = ref([
        value => {
          if (value) return true

          return 'You must enter a first a valid password.'
        },
      ])
const repeat_password_rules = ref([
        value => {
          if (value==password.value) return true

          return "Password doesn't match."
        },
      ])
const submit = async() => {
    const { data, error, status } = await useAPIFetch(`accounts/${route.params.id}/set_password/`,{
        method: 'POST',
        body: {
            token: route.params.token,
            password: password.value
        }
    })
    if (status.value == 'error'){ errors.value = error.value.data }
    if (status.value == 'success'){ navigateTo('/login') }
}
</script>
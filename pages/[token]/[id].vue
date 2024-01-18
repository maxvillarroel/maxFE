<template>
    <v-layout class="rounded rounded-md">
        <v-main class="d-flex align-center justify-center">
            <v-card
            min-width="300"
            width="425"
            class="d-flex flex-column justify-space-between pa-6 ma-12">
                <v-card-title class="pb-6 text-center">Set a password</v-card-title>
                <v-form>
                <v-text-field
                        v-model="password"
                        :rules="rules.password"
                        label="Password"
                        type="password"
                        max-errors="4"
                        :error-messages="errors.password"
                        class="mb-2"
                    ></v-text-field>
                    <v-text-field
                        v-model="repeat_password"
                        :rules="rules.repeat_password"
                        label="Repeat password"
                        type="password"
                        class="mb-2"
                    ></v-text-field>
                </v-form>
                <v-card-text >
                <ul v-if="errors.non_field_errors" class="text-error">
                    <li v-for="error in errors.non_field_errors ">{{ error }}</li>
                </ul> 
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="submit" block>Submit</v-btn>
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

const errors = ref({
    password: [],
    token: [],
    non_field_errors: []
})

const rules = ref({
    password: [ value => value ? true : 'You must enter a first a valid password.',],
    repeat_password: [value => (value==password.value) ? true : "Password doesn't match.",]
})

const submit = async() => await apiFetch(`accounts/${route.params.id}/set_password/`,{
        method: 'POST',
        body: { token: route.params.token, password: password.value}
    })
    .then(navigateTo('/login'))
    .catch(error => { errors.value = error.data })
</script>
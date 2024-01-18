<template>
    <v-main class="d-flex align-center justify-center">
        <v-card 
        title="Request Account"
        max-width="800"
        min-width="280"
        class="pa-4 w-75">
            <v-form id="request_form" @submit.prevent="request" class="pa-4">
                <v-text-field
                    v-model="account.username"
                    label="Username"
                    :error-messages="errors.username"
                ></v-text-field>
                <v-text-field
                    label="Email"
                    v-model="account.email"
                    :error-messages="errors.email"
                ></v-text-field>  
                <v-text-field
                    v-model="account.first_name"
                    label="First Name"
                    :error-messages="errors.first_name"
                ></v-text-field>

                <v-text-field
                    v-model="account.last_name"
                    label="Last Name"
                    :error-messages="errors.last_name"
                ></v-text-field>     
                <v-card-text>
                    <ul v-if="errors.non_field_errors" class="text-error">
                        <li v-for="error in errors.non_field_errors" class="mb-2">{{ error }}</li>
                    </ul>
                    <v-scroll-y-reverse-transition>
                        <p v-if="requested" class="text-success text-subtitle-1">You request has been sent!</p>
                    </v-scroll-y-reverse-transition>
                </v-card-text> 
                <v-card-actions>
                    <v-btn variant="plain" text="back" prepend-icon="mdi-arrow-left" @click="$router.back()" />
                    <v-spacer/>
                    <v-btn 
                        type="submit"
                        :color="requested ? 'success': undefined"
                        :disabled="requesting"
                        :loading="requesting"
                        :prepend-icon="requested ? 'mdi-account-check' : 'mdi-account-arrow-up'"
                        text="Request"
                    />
                </v-card-actions>
            </v-form>
        </v-card>
    </v-main>
</template>
<script setup>
definePageMeta({layout: false})
const account = ref({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
})
const errors = ref({
    username: [],
    first_name: [],
    last_name: [],
    email: [],
    non_field_error: []
})

const requesting = ref(false)
const requested = ref(false)
const request = async() => {
    requesting.value = true
    await apiFetch('accounts/requests/', { method: 'POST', body: account.value })
    .then(() => {
        requested.value = true
        errors.value = {    username: [], first_name: [], last_name: [], email: [], non_field_error: []}
    })
    .catch((error) => { 
        errors.value = error.data
        requested.value = false
        request_form.value.reset() 
    })
    .finally(()=>{ requesting.value = false })}
</script>
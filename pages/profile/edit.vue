<template>
    <v-card 
    title="Edit Account" 
    :subtitle='new_account.username'
    class="pa-4 w-50">
        <v-card-text>
            <v-form @submit.prevent>
                <v-text-field
                    v-model="new_account.username"
                    label="Username"
                    :error-messages="errors.username"
                ></v-text-field>

                <v-text-field
                    v-model="new_account.first_name"
                    label="First Name"
                    :error-messages="errors.first_name"
                ></v-text-field>

                <v-text-field
                    v-model="new_account.last_name"
                    label="Last Name"
                    :error-messages="errors.last_name"
                ></v-text-field>

                <v-text-field
                    label="Email"
                    v-model="new_account.email"
                    :error-messages="errors.email"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="edit" prepend-icon="mdi-account-arrow-up">
                Confirm
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
definePageMeta({middleware: ['auth',]})
const account = useState('account')

const new_account = ref( account.value )
const errors = ref({
    username: [],
    first_name: [],
    last_name: [],
    email: [],
    non_field_error: []
})

const edit = async() => await useAuthFetch(`/accounts/${account.value.id}/`,{ method: 'PATCH', body: new_account.value })
    .then(data => {
        account.value = data
        navigateTo('/profile')
        })
    .catch(error => { errors.value = error.data })
</script>

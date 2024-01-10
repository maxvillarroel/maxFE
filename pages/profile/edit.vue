<template>
    <v-card 
    title="Edit Account" 
    :subtitle='account.username'
    class="pa-4 w-50">
        <v-card-text>
            <v-form @submit.prevent>
                <v-text-field
                    v-model="account.username"
                    label="Username"
                ></v-text-field>

                <v-text-field
                    v-model="account.first_name"
                    label="First Name"
                ></v-text-field>

                <v-text-field
                    v-model="account.last_name"
                    label="Last Name"
                ></v-text-field>

                <v-text-field
                    label="Email"
                    v-model="account.email"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="edit" color='primary' variant="elevated" prepend-icon="mdi-account-arrow-up">
                Confirm
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
definePageMeta({middleware: ['auth',]})
const account = useState('account')

const edit = async() => {
    const { data, error, status } = await useAuthFetch(`accounts/${account.value.id}/`,{
        method: 'PATCH',
        body: {
            username: account.value.username,
            first_name: account.value.first_name,
            last_name: account.value.last_name,
            email: account.value.email
        }
    })
    if (status.value == 'error'){
        console.log('account object:', account)
        console.log(error.value.data)
    }
    if (status.value == 'success'){
        console.log(data.value)
        navigateTo('/profile')
        }
}
</script>

<template>
    <v-card 
    :title="`${account.first_name} ${account.last_name}`" 
    :subtitle='account.username'
    class="pa-4 w-50">
    <v-divider/>
        <v-list class="bg-background">
            <v-list-item
                color="background"
                title="First Name"
                :subtitle="account.first_name"
            ></v-list-item>
            <v-list-item
                title="Last Name"
                :subtitle="account.last_name"
            ></v-list-item>
            <v-list-item
                title="Email"
                :subtitle="account.email"
            ></v-list-item>
        </v-list>
        <v-card-actions>
            <v-spacer/>
            <v-btn to="/profile/edit" prepend-icon="mdi-account-edit">
                Edit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
definePageMeta({middleware: ['auth',]})
const account = useState('account')
</script>
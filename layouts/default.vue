<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar app>
            <template v-if="account" v-slot:append>
                <p class="ma-1">{{ account.username }}</p>
                <v-btn icon="mdi-account" variant="outlined" to="/profile"></v-btn>
            </template>
        </v-app-bar>
        <v-navigation-drawer>
        <v-divider/>
            <v-list-item link to="/accounts" title="Accounts"></v-list-item>
        </v-navigation-drawer>
        <v-main class="d-flex align-center justify-center">
            <slot />
        </v-main>
    </v-layout>
</template>

<script setup>
const account = useState('account', () => {} )
</script>
<template>
    <v-app-bar app color="background" style="position:fixed;">
        <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
            <span @click="navigateTo('/')" class="cursor-pointer">
                <span class="text-primary font-weight-black">Max</span>Villarroel
            </span>  
        </v-app-bar-title>
        <template v-if="account" v-slot:append>
            <span class="mx-4">{{ account.username }}</span>
            <v-btn id="account" icon="mdi-account"></v-btn>
            <v-menu activator="#account">
                <v-list class="bg-background">
                    <v-list-item title="Settings" append-icon="mdi-cog" to="/profile"></v-list-item>
                    <v-list-item title="Logout" append-icon="mdi-logout" @click="logout"></v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="background">
    <v-divider class="my-2"/>
        <v-list-item link to="/roadmap" title="Roadmap"></v-list-item>
    </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center">
        <slot />
    </v-main>
</template>

<script setup>
const account = useState('account', () => {} )
const token = useState('token', () => {} )
const drawer = ref(false)
const logout = () =>{
    account.value = null
    token.value = null
    navigateTo('/')
}
</script>
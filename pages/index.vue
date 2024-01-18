<template>
    <v-layout>
        <v-app-bar app scroll-behavior="elevate" :collapse="xs" color="background" style="position:fixed;">
            <template v-slot:prepend v-if="xs">
                <v-app-bar-nav-icon id="menu" variant="text"></v-app-bar-nav-icon>
                <v-menu activator="#menu">
                    <v-sheet class="bg-background d-flex flex-wrap justify-space-around ga-3 py-6">
                        <v-btn variant="text" @click="goTo('#home', {offset: -64})" class="mx-2">Home</v-btn>
                        <v-btn variant="text" @click="goTo('#skills', {offset: -128})" class="mx-2">Skills</v-btn>
                        <v-btn variant="text" @click="goTo('#about', {offset: -128})" class="mx-2">About</v-btn>
                        <v-btn variant="text" @click="goTo('#project', {offset: -128})" class="mx-2">Project</v-btn>
                        <v-btn variant="text" @click="goTo('#contact', {offset: -128})" class="mx-2">Contact</v-btn>
                    </v-sheet>
                </v-menu>
            </template>
            <v-app-bar-title class="text-center">
            <v-btn @click="goTo('#home', {offset: -64})" class="mx-2">Home</v-btn>
            <v-btn @click="goTo('#skills', {offset: -128})" class="mx-2">Skills</v-btn>
            <v-btn @click="goTo('#about', {offset: -128})" class="mx-2">About</v-btn>
            <v-btn @click="goTo('#project', {offset: -128})" class="mx-2">Project</v-btn>
            <v-btn @click="goTo('#contact', {offset: -128})" class="mx-2">Contact</v-btn>
            </v-app-bar-title>
            <template v-slot:append>
                <template v-if="account">
                    <v-btn id="account" icon="mdi-account"/>
                    <v-menu activator="#account">
                        <v-list class="bg-background">
                            <v-list-item title="Settings" append-icon="mdi-cog" to="/profile"></v-list-item>
                            <v-list-item title="Logout" append-icon="mdi-logout" @click="logout"></v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else>
                    <v-btn 
                    :to="{path: '/login'}" 
                    :icon="xs ? 'mdi-login' : undefined" 
                    :prepend-icon="xs ? undefined : 'mdi-login'"
                    text="Login"
                    class="mx-2"/>
                </template>
            </template>
        </v-app-bar>
        <v-main class="d-flex flex-column">
            <v-sheet id="home"
            color="background"
            class="d-flex flex-column align-center text-center mx-auto py-12"
            min-height="80vh"
            >
                <v-spacer/>
                <v-avatar
                class="mb-12"
                color="primary"
                size="300"
                variant="elevated"
                image="~/assets/img/drawing.svg"
                ></v-avatar>
                <div class="mx-12">
                <h1 class="text-h1 mb-4">
                    Hi, I'm <span class="font-weight-bold text-primary">Max</span>
                </h1>
                <p class="text-h6">
                    A self-taught software developer focused on modern full stack solutions for today's web.
                </p>
                </div>
                <v-spacer/>
            </v-sheet>
            <v-divider/>
            <v-sheet id='skills'
            class="py-4 "
            color="background">
                <v-chip-group show-arrows>
                    <v-spacer></v-spacer>
                    <v-chip>Render</v-chip>
                    <v-chip>Python</v-chip>
                    <v-chip>SQL</v-chip>
                    <v-chip>PostgreSQL</v-chip>
                    <v-chip>Django</v-chip>
                    <v-chip>Django REST framework</v-chip>
                    <v-chip>HTML</v-chip>
                    <v-chip>CSS</v-chip>
                    <v-chip>JavaScript</v-chip>
                    <v-chip>VueJS</v-chip>
                    <v-chip>Vuetify</v-chip>
                    <v-chip>Nuxt</v-chip>
                    <v-chip>Git</v-chip>
                    <v-chip>GitHub</v-chip>
                    <v-spacer></v-spacer>
                </v-chip-group>
            </v-sheet>
            <v-divider/>
            <v-sheet id="about"
            color="background"

            class="d-flex align-center justify-center py-12 px-2"
            >
            <v-btn icon="mdi-chevron-left" variant="plain" @click="quote == 0 ? quote = quotes.length -1 : quote--"></v-btn>
                <v-card
                variant="flat"
                color="background"
                max-width="1024"
                min-height="140"
                class="flex-fill"
                >
                    <v-card-title
                    class="text-h3 font-weight-regular"
                    >
                        About <span class="font-weight-bold text-primary">Me</span>
                    </v-card-title>
                    <v-card-text>
                        <blockquote class="blockquote px-0">
                            <v-window v-model="quote">
                                <v-window-item v-for="q in quotes" :key="q">
                                    {{ q }}
                                </v-window-item>                                
                            </v-window>
                        </blockquote>
                    </v-card-text>
                </v-card>
                <v-btn icon="mdi-chevron-right" variant="plain" @click="quote == quotes.length - 1 ? quote = 0 : quote++"></v-btn>
            </v-sheet>
            <v-divider/>
            <v-sheet id="project"
            class="d-flex flex-wrap justify-center mx-auto py-6" 
            color="background"
            max-width="1440"
            >
            <div class="d-flex flex-wrap justify-center ">
                <v-card
                min-width="260"
                class="ma-6"
                >
                    <v-card-title>Database</v-card-title>
                    <v-card-text>
                        <v-list class="bg-background">
                            <v-list-item>Django ORM</v-list-item>
                            <v-list-item>Psycopg 2.9</v-list-item>
                            <v-list-item>PostgreSQL 15</v-list-item>
                            <v-list-item>Render DB</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <v-card
                min-width="260"
                class="ma-6"
                >
                    <v-card-title>RESTful API</v-card-title>
                    <v-card-text>
                        <v-list class="bg-background">
                            <v-list-item>Django REST framework</v-list-item>
                            <v-list-item>Django</v-list-item>
                            <v-list-item>Gunicorn</v-list-item>
                            <v-list-item>Render Web Service</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex flex-wrap justify-center">
                <v-card
                min-width="260"
                class="ma-6"
                >
                    <v-card-title>Admin Site</v-card-title>
                    <v-card-text>
                        <v-list class="bg-background">
                            <v-list-item>Vuetify</v-list-item>
                            <v-list-item>Nuxt</v-list-item>
                            <v-list-item>VueJS</v-list-item>
                            <v-list-item>Render Static Site</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <v-card
                min-width="260"
                class="ma-6"
                >
                    <v-card-title> User Site</v-card-title>
                    <v-card-text>
                        <v-list class="bg-background">
                            <v-list-item>Vuetify</v-list-item>
                            <v-list-item>Nuxt</v-list-item>
                            <v-list-item>VueJS</v-list-item>
                            <v-list-item>Render Static Site</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </div>
            </v-sheet>
            <v-divider/>
            <v-sheet id="contact" 
            class="d-flex justify-center" 
            color="background">
            <v-card max-width="1024" variant="flat" color="background" min-width="260" class="flex-fill mx-xs-0 mx-sm-4 my-12 pa-6">
                <v-card-title
                    class="text-h3 font-weight-regular pb-8"
                    >
                        Contact <span class="font-weight-bold text-primary">Me</span>
                    </v-card-title>
                    <v-form @submit.prevent="send" ref="contact_form">
                        <v-text-field
                            v-model="contact.email"
                            label="Email"
                            :error-messages="errors.email"
                            class="mb-2"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="contact.subject"
                            label="Subject"
                            :error-messages="errors.subject"
                            class="mb-2"
                            required
                        ></v-text-field>
                        <v-textarea 
                            v-model="contact.message"
                            label="Message"
                            :error-messages="errors.message"
                            class="mb-2"
                            required
                        ></v-textarea>
                        <div class="d-flex">
                        <v-card-text>
                        <ul v-if="errors.non_field_errors" class="text-error">
                            <li v-for="error in errors.non_field_errors" class="mb-2">{{ error }}</li>
                        </ul>
                        <v-scroll-y-reverse-transition>
                            <p v-if="sent" class="text-success text-subtitle-1">You message has been sent!</p>
                        </v-scroll-y-reverse-transition>
                        </v-card-text> 
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn 
                            :color="sent ? 'success': undefined"
                            type="submit"
                            :disabled="sending"
                            :loading="sending"
                            :append-icon="sent ? 'mdi-send-check' : 'mdi-send'"
                            >Send</v-btn>
                        </v-card-actions>
                        </div>
                    </v-form>
                </v-card>
            </v-sheet>
        </v-main>
    </v-layout>
</template>
<script setup>
definePageMeta({layout: false})
import { useGoTo } from 'vuetify'
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()

const account = useState('account', () => {} )
const logout = () =>{
    account.value = null
    token.value = null
    navigateTo('/')
}
const goTo = useGoTo()

const quote = ref(0)
const quotes = ref([
    "Hello! I'm a self-taught software developer, about to begin a new chapter at college, eagerly seeking opportunities in the IT realm to kickstart my professional journey.",
    "I proudly present my sole creation – a web app serving as my personal website and portfolio, a testament to my efforts understanding technologies such as Nuxt, Python, JavaScript, PostgreSQL, Django REST framework, and more.",
    "Although more intertested in the intricacies of application design and architecture, I've explored my creative side by leveraging tools like Figma, Inkscape, GIMP, and several AI tools to enhance my web app's aesthetic appeal.",
    "My learning journey extends beyond coding, delving into C, Linux, Data Structures and Algorithms. Hours of YouTube lectures from MIT, CalTech, Harvard, and Yale, alongside tutorials and official documentation, have been my constant companions.",
    "As a native Spanish speaker who became proficient in English, I conquered language barriers through internet-driven self-education, reflecting my determination and adaptability.",
    "Fueled by an unwavering passion for all things tech, my burning curiosity for Computer Science and the more Math-related aspects of programming had been the driving force behind my pursuit of knowledge.",
    "My enthusiasm for coding extends beyond my personal projects, as I eagerly anticipate diving into the challenges and opportunities that lie ahead during my college journey.",
    "Join me as I continue to explore the ever-evolving landscape of software development, driven by my commitment to innovation and continuous learning.",
])
const contact_form = ref()
const contact = ref({
    email: '', 
    message: '', 
    subject: '',
})

const sent = ref(false)
const sending = ref(false)
const errors = ref({ 
    email: [], 
    message: [], 
    subject: [],
    non_field_errors: [] 
})

const send = async() => {
    sending.value = true
    await apiFetch('contact/', { method: 'POST', body: contact.value })
    .then(() => { 
        sent.value = true
        errors.value = { email: [], message: [], subject: [], non_field_errors: [] }
        contact_form.value.reset() 
    })
    .catch((error) => { 
        sent.value = false
        errors.value = error.data 
    })
    .finally(()=>{sending.value = false})
}
</script>
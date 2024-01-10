<template>
    <v-layout>
        <v-app-bar app scroll-behavior="elevate" color="background" style="position:fixed;">
            <v-spacer/>
            <v-btn text @click="scrollTo('home')" class="mx-2">Home</v-btn>
            <v-btn text @click="scrollTo('skills')" class="mx-2">Skills</v-btn>
            <v-btn text @click="scrollTo('about')" class="mx-2">About</v-btn>
            <v-btn text @click="scrollTo('project')" class="mx-2">Project</v-btn>
            <v-btn text :to="{path: '/login'}" class="mx-2">Login</v-btn>
            <v-spacer/>
        </v-app-bar>
        <v-main
        class="d-flex flex-column"
        >
            <v-sheet
            id="home"
            color="background"
            class="d-flex flex-column align-center text-center mx-auto py-12"
            min-height="80vh"
            >
                <v-spacer/>
                <v-avatar
                class="mb-12"
                color="primary"
                size="300"
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
            <v-sheet
            id='skills'
            max-width="1440"
            class="mx-auto px-12 py-4"
            color="background">
            <v-chip-group 
                variant="outlined" 
                class="d-flex justify-space-around">
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
                </v-chip-group>
            </v-sheet>
            <v-divider/>
            <v-sheet
            id="about"
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
                                <v-window-item v-for="q in quotes" key="q">
                                    {{ q }}
                                </v-window-item>                                
                            </v-window>
                        </blockquote>
                    </v-card-text>
                </v-card>
                <v-btn icon="mdi-chevron-right" variant="plain" @click="quote == quotes.length - 1 ? quote = 0 : quote++"></v-btn>
            </v-sheet>
            <v-divider/>
            <v-sheet
            id="project"
            class="d-flex flex-wrap justify-center mx-auto pa-6" 
            color="background"
            max-width="1440"
            >
            <div class="d-flex flex-wrap justify-center ">
                <v-card
                min-width="260"
                class="ma-6"
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
            <!--
            <v-card width="800" class="ma-8 pa-6">
                <v-card-title>Hire me</v-card-title>
                <v-card-text>
                    <v-text-field
                        label="email"
                    ></v-text-field>
                    <v-text-field
                        label="Message"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" variant="elevated">Submit</v-btn>
                </v-card-actions>
            </v-card>
            -->
        </v-main>
    </v-layout>
</template>
<script setup>
definePageMeta({layout: false})
const scrollTo = (element) =>{ document.getElementById(element).scrollIntoView() }
const quote = ref(0)
const quotes = ref([
    "Hello! I'm a self-taught software developer, about to begin a new chapter at college, eagerly seeking opportunities in the IT realm to kickstart my professional journey.",
    "I proudly present my sole creation – a web app serving as my personal website and portfolio, a testament to my efforts understanding technologies such as Nuxt, Python, JavaScript, PostgreSQL, Django REST framework, and more.",
    "Although more intertested in the intricacies of application design and architecture, I've explored my creative side by leveraging tools like Figma, Inkscape, GIMP, and several AI tools to enhance my web app's aesthetic appeal.",
    "My learning journey extends beyond coding, delving into C, Linux, Data Structures and Algorithms. Hours of YouTube lectures from MIT, CalTech, Harvard, and Yale, alongside tutorials and official documentation, have been my constant companions.",
    "As a native Spanish speaker turned proficient in English, I conquered language barriers through internet-driven self-education, reflecting my determination and adaptability.",
    "Fueled by an unwavering passion for all things tech, my burning curiosity for computer science and the more mathy aspects of programing had been the driving force behind my relentless pursuit of knowledge.",
    "My enthusiasm for coding extends beyond my personal projects, as I eagerly anticipate diving into the challenges and opportunities that lie ahead during my college journey.",
    "Join me as I continue to explore the ever-evolving landscape of software development, driven by a commitment to innovation and continuous learning.",
])
</script>
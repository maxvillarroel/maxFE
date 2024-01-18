<template>
    <v-timeline align="start" class="mx-12" >
      <v-timeline-item size="small">
        <div>
            <h2 class="mt-n1 headline font-weight-light mb-4"> i18n </h2>
            <div>
            "Enhance user experience with a new internationalization feature powered by Nuxt/i18n. Seamlessly switch between Spanish (Chile) and English (US) with localized content, ensuring a tailored experience for users in different regions. Improve accessibility and broaden the app's global appeal.
            </div>
        </div>
      </v-timeline-item>
      <v-timeline-item size="small">
        <div>
          <h2 class="mt-n1 headline font-weight-light mb-4">
            blog
          </h2>
          <div>
            "Implement a blog section with Nuxt/Content to craft articles in Markdown covering a diverse range of IT-related topics. Create and manage content to enhance SEO for better visibility. This blog will serve as a personal knowledge base, showcasing my understanding of various technologies and sharing insights with users and potential employers."</div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>
<script setup>
definePageMeta({middleware: ['auth',]})
</script>
  
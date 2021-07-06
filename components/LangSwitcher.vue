<template>
  <ul class="d-flex mb-0 lang-selector pl-3 list-unstyled">
    <li v-for="locale in availableLocales" :key="locale.code">
      <nuxt-link
        class="d-block lang-link"
        :class="locale.code === currentLocale.code ? 'active-lang' : null"
        rel="alternate"
        :hreflang="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <template v-if="locale.code === 'en'">
          <img src="flags/en.svg" alt="en" :title="locale.name" />
        </template>
        <template v-else>
          <img src="flags/ko.svg" alt="ko" :title="locale.name" />
        </template>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LangSwitcher',
  components: {},
  data() {
    return {
      currentLang: 'PL',
      langOpen: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
    currentLocale() {
      return this.$i18n.localeProperties
    },
  },
}
</script>

<style lang="scss"></style>

<template>
  <div class="page">
    <div class="landing-page position-relative d-flex flex-column flex-grow-1">
      <Header />
      <div class="container content">
        <div class="row">
          <div class="col-12 text-center">
            <img
              class="img-fluid mb-4"
              src="~assets/images/embrace-gamercoin.png"
              alt="Embrace GamerCoin"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="main-header mb-0">{{ $t('mainHeader') }}</h1>
            <h2 class="main-sub-header">{{ $t('mainSubHeader') }}</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-9 col-xxl-7">
            <div class="box text-center m-auto">
              <h3 class="text-center">
                {{ $t('airdropUnavalibleTop') }} <br />
                {{ $t('airdropUnavalibleBottom') }}
                <a href="mailto:team@gamerhash.com" class="text-green"
                  >team@gamerhash.com</a
                >
              </h3>
            </div>
          </div>
        </div>
      </div>
      <footer class="mb-5 mt-auto main-content">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="
                  d-flex
                  flex-wrap
                  mt-4
                  justify-content-center
                  flex-md-nowrap
                  justify-content-md-between
                  border-cta
                "
              >
                <div class="copyright">{{ $t('copyright') }}</div>
                <a
                  href="https://account.gamerhash.io/en/p/privacy-policy"
                  class="privacy d-block"
                  >{{ $t('privacyPolicy') }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div class="page-bottom">
      <div class="page-bottom-inner">
        <div class="rocket">
          <img src="~assets/svg/big-rocket.svg" alt="rocket" />
        </div>
        <div class="astro">
          <img src="~assets/images/thinking.png" alt="astro" />
        </div>
        <div class="planet">
          <img src="~assets/svg/planet.svg" alt="planet" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
}
</script>

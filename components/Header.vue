<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <a href="./" class="logo"><GHXLogo /> </a>
        <div class="col-auto ml-auto pl-0">
          <div class="d-flex align-items-center">
            <a
              href="https://www.facebook.com/GamerHashApp/"
              target="_blank"
              class="social-icons"
            >
              <FBicon />
            </a>

            <a
              href="https://twitter.com/GamerHashCom"
              target="_blank"
              class="social-icons"
            >
              <TwitterIcon />
            </a>

            <a
              href="https://discord.com/invite/XXzk6hb"
              target="_blank"
              class="social-icons"
            >
              <DiscordIcon />
            </a>

            <a
              href="https://t.me/joinchat/KN7AOBQvrP58x619Fyg95A"
              target="_blank"
              class="social-icons"
            >
              <Ticon />
            </a>

            <lang-switcher />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import GHXLogo from '~/assets/svg/gamerhash_logo.svg?inline'
import FBicon from '~/assets/svg/fb.svg?inline'
import TwitterIcon from '~/assets/svg/twitter.svg?inline'
import DiscordIcon from '~/assets/svg/discord.svg?inline'
import Ticon from '~/assets/svg/telegram.svg?inline'

export default {
  name: 'Header',

  components: { GHXLogo, FBicon, TwitterIcon, DiscordIcon, Ticon },
}
</script>

<style></style>

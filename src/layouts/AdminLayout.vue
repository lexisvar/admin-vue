<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'AdminLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
    currentRouteName() {
      return this.$route.name
    },
  },
  watch: {
    currentRouteName(val) {
      console.log(val)
      if (val != 'Login' && !this.user) {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'Login' })
        // this.$router.push('/login')
      }
      if (val == 'Login' && this.user) {
        this.$router.push({ name: 'AdminHome' })
      }
    },
  },
}
</script>

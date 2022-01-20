<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="(event) => setSidebarVisible(event)"
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler class="d-none d-lg-flex" @click="toogleSidebarVisible()" />
  </CSidebar>
</template>

<script>
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
import { mapGetters } from 'vuex'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  setup() {
    return {
      logoNegative,
      sygnet,
    }
  },
  computed: {
    ...mapGetters({
      sidebarUnfoldable: 'admin/sidebarUnfoldable',
      sidebarVisible: 'admin/sidebarVisible',
    }),
  },
  methods: {
    setSidebarVisible(event) {
      this.$store.dispatch('admin/setSideBarVisible', event)
    },
    toogleSidebarVisible() {
      this.$store.dispatch('admin/toggleSidebar')
    },
  },
}
</script>

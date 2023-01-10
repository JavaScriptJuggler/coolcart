<template>
  <div>
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footerbar />
  </div>
</template>
<script>
import navbar from "../components/nav.vue";
import footerbar from "../components/footer.vue";
export default {
  name: "app",
  components: {
    navbar,
    footerbar
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

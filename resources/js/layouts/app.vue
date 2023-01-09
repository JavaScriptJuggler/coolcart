<template>
  <div>
    <navbar></navbar>
    <transition name="scale" mode="out-in">
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
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>

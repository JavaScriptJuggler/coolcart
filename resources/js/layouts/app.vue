<template>
  <div>
    <!-- conditional rendring of navbar -->
    <navbar></navbar>
    <!-- fade transition on page change and css is in css file -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- conditional rendring of footer -->
    <footerbar />
  </div>
</template>
<script>
import navbar from "../components/frontend/nav.vue";
import footerbar from "../components/frontend/footer.vue";
export default {
  name: "app",
  components: {
    navbar,
    footerbar
  }
};
</script>

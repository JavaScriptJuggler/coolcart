<template>
  <div>
    <loader v-if="showLoader"></loader>
    <section class="home_banner_area mb-40">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content row">
            <div class="col-lg-12">
              <p class="sub text-uppercase">men Collection</p>
              <h3>
                <span>Show</span> Your
                <br />Personal
                <span>Style</span>
              </h3>
              <h4>Fowl saw dry which a above together place.</h4>
              <a class="main_btn mt-40" href="#">View Collection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <policies></policies>
    <feature_products></feature_products>
    <offer></offer>
    <bestsellers></bestsellers>
  </div>
</template>
<script>
import policies from "../../components/frontend/home/policies.vue";
import feature_products from "../../components/frontend/home/featureProducts.vue";
import offer from "../../components/frontend/home/offer.vue";
import bestsellers from "../../components/frontend/home/bestsellers.vue";
import loader from "../../components/frontend/loader.vue";
export default {
  name: "home",
  data() {
    return {
      showLoader: false
    };
  },
  components: {
    policies,
    feature_products,
    offer,
    bestsellers,
    loader
  }
};
</script>

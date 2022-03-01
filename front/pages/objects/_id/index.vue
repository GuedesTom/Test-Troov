<template>
  <div>
    <Navbar />
    {{photo}}
    {{ nom }}
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  data() {
    return {
      object: [],
    };
  },
  mounted() {
      this.id = this.$route.params.id
  },
  async asyncData({ $axios }) {
    const object = await $axios.$get("/api/object/"+ this.$route.params.id);
    return { object };
  },
};
</script>

<style></style>

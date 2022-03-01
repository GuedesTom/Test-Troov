<template>
  <div>
    <Navbar />
    {{ nom }}
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  data: () => ({
      nom: null
  }),
  mounted() {
      this.nom = this.$route.params.id
  },
};
</script>

<style></style>

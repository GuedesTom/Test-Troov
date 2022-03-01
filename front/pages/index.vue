<template>
  <div>
    <Navbar />
    <main>
      <b-container>
        <b-row>
          <b-col md="12">
            <ul>
              <li v-for="(object, index) in objects" :key="index">
                <nuxt-link
                  :to="{ name: 'objects-id', params: { id: object.nom } }"
                  >{{ object.nom }}</nuxt-link
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "@nuxtjs/axios"
export default {
  components: { Navbar },
  data() {
    return {
      objects: [],
    };
  },
  async asyncData({ $axios }) {
    const objects = await $axios.$get("/api/object")
    return {objects}
  },
};
</script>

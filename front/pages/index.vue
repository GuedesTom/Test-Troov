<template>
  <div>
    <Navbar />
    <main>
      <b-container>
        <b-row>
          <b-col md="12">
            <ul>
              <div
                class="card border-success mb-3"
                style="max-width: 18rem"
                v-for="(object, index) in objects"
                :key="index"
              >
                <nuxt-link
                  class="list-group-item list-group-item-action"
                  :to="{ name: 'objects-id', params: { id: object._id } }"
                >
                  <div class="card-header bg-transparent border-success">
                    {{ object.nom }}
                  </div>
                  <div class="card-body text-success">
                    <img :src="object.photo" style="width: 50%; height: auto" />
                  </div>
                  <div class="card-footer bg-transparent border-success">
                    {{ object.description }}
                  </div>
                </nuxt-link>
              </div>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "@nuxtjs/axios";
export default {
  components: { Navbar },
  data() {
    return {
      objects: [],
    };
  },
  async asyncData({ $axios }) {
    const objects = await $axios.$get("/api/object");
    return { objects };
  },
};
</script>

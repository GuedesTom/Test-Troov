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
export default {
  components: { Navbar },
  data() {
    return {
      objects: [],
    };
  },
  async asyncData() {
    return {
      objects: [
        {
          nom: "object 1",
          description: "description object 1",
          photo: "photo object 1",
        },
        {
          nom: "object 2",
          description: "description object 2",
          photo: "photo object2",
        },
      ],
    };
  },
};
</script>

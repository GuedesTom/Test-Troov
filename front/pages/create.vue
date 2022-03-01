<template>
  <div>
    <Navbar />
    <div class="form-group">
      <h1>Create Object</h1>
      <label for="nomObject">Nom</label>
      <input
        v-model="nom"
        type="text"
        class="form-control"
        name="nom"
        placeholder="Entrer Nom"
      />
    </div>
    <div class="form-group">
      <label for="descriptionObject">Description</label>
      <input
        v-model="description"
        type="text"
        class="form-control"
        name="description"
        placeholder="Entrer description"
      />
    </div>
    <div class="form-group">
      <label for="photoObject">Photo</label>
      <input
        v-model="photo"
        type="text"
        class="form-control"
        name="photo"
        placeholder="URL photo"
      />
    </div>
    <button class="btn btn-primary" @click="signupHandler">Submit</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  data() {
    return {
      nom: "",
      description: "",
      photo: null,
    };
  },
  methods: {
    async signupHandler() {
      const data = {
        nom: this.nom,
        description: this.description,
        photo: this.photo,
      };
      console.log(data);
      try {
        await this.$axios.post("/api/object", data);
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <Navbar />
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        name="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
      />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
      email: null,
      password: null,
    };
  },
  methods: {
    async signupHandler() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      try {
        const res = await this.$axios.post("/api/user/signup", data);
        console.log(res);
      } catch (e) {
        console.log(e.message);
      }
    },
    
  },
};
</script>

<style></style>

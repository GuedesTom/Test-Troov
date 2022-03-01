<template>
  <div>
    <Navbar />
    <Notification :message="error" v-if="error" />
    <div class="form-group">
      <h1>LOGIN</h1>
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
    <button class="btn btn-primary" @click="signupHandler">Submit</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Notif from "@/components/Notif";
export default {
  components: { Notif, Navbar },

  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style></style>

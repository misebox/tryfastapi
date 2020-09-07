<template lang="pug">
v-layout.justify-center
  v-flex.text-center.justify-center.xs12.sm6.md6.lg4
    v-card.elevation-12.mt-10
      v-toolbar(color="primary" dark flat)
        v-toolbar-title Sign In
        v-spacer
        v-tooltip(bottom)
          template(v-slot:activator="{ on }")
            v-btn(
              to="/"
              icon
              large
              v-on="on"
            )
              v-icon mdi-login
      v-card-text.justify-center.align-center
        v-form(v-model="valid" :disabled="lock")
          v-row: v-col
            v-text-field(
              v-model="username"
              validate-on-blur=true
              :rules="rules.name"
              :counter="20"
              label="Username"
              required
            )
          v-row: v-col
            v-text-field(
              v-model="email"
              validate-on-blur=true
              :rules="rules.email"
              :counter="256"
              label="Email"
              required
            )
          v-row: v-col
            v-text-field(
              v-model="password"
              validate-on-blur=true
              :rules="rules.password"
              label="Password"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 12 characters"
              counter
              @click:append="showPassword = !showPassword"
            )
          v-row: v-col.justify-right(cols="12").d-flex.justify-end
            v-btn(@click="submit") Sign Up
</template>

<script>
import { ApiClient, UserCreate, DefaultApi } from '~/generated/';
export default {
  data() {
    return {
      lock: false,
      showPassword: false,
      valid: false,
      username: '',
      email: '',
      password: '',
      rules: {
        name: [
          v => !!v || 'Name is required',
          v => v.length >= 3 || 'Name must be longer or equal than 3 characters',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) && v.length <= 256 || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
          v => v.length >= 12 && v.length <= 256 || 'Password length must be between 12 and 256 characters',
        ]
      }
    }
  },
  computed: {
  },
  methods: {
    submit() {
      this.lock = true;
      const that = this;
      function cb(error, data, response) {
        if (200 <= response.code && response.code < 300) {
          that.$router.push('/');
        } else {
          that.lock = false;
        }
      }
      const user = new UserCreate(this.username, this.email, this.password, true, true);
      const dapi = new DefaultApi();
      dapi.usersCreateUsersCreatePost(user, cb)
    }
  }
}
</script>
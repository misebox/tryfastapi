<template lang="pug">
v-layout.justify-center
  v-card(class="elevation-12")
    v-toolbar(color="primary" dark flat)
      v-toolbar-title Login form
      v-spacer
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-btn(
            to="/"
            icon
            large
            v-on="on"
          )
            v-icon mdi-code-tags
        span Source
    v-card-text
      v-form(v-model="valid")
        v-container
          v-row: v-col(cols="12" md="4")
            v-text-field(
              v-model="username"
              validate-on-blur=true
              :rules="rules.name"
              :counter="3"
              label="Username"
              required
            )
          v-row: v-col(cols="12" md="4")
            v-text-field(
              v-model="email"
              validate-on-blur=true
              :rules="rules.email"
              :counter="10"
              label="Email"
              required
            )
          v-row: v-col(cols="12" md="4")
            v-text-field(
              v-model="password"
              validate-on-blur=true
              :rules="rules.password"
              :counter="10"
              label="Password"
              required
            )
</template>

<script>
export default {
  data() {
    return {
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
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
          v => v.length <= 12 || 'Password must be longer or equal than 12 characters',
        ]
      }
    }
  },
  computed: {
  }
}
</script>
<template>
  <div style="margin-left: auto; margin-right: auto;">
    <p style="color: black; margin-top: 5rem">
      Сайт на реконструкции.
    </p>
    <p style="color: black; margin-top: 2rem">
      Введите пароль, чтобы продолжить.
    </p>
    <input
      v-model="password"
      type="password"
      style="margin-top: 2rem; color: black"
    />
  </div>
</template>
<script>
export default {
  layout: 'password',
  data: () => ({
    password: ''
  }),
  watch: {
    password(value) {
      this.$store.dispatch('setPassword', value)
      if (value === 'strongpassword') {
        this.$router.push('/')
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.password = localStorage.password || ''
    })
  }
}
</script>

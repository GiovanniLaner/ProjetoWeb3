<template>
  <section class="register">
    <h2>Register your company:</h2>

    <form>
      <div>
        <input type="text" v-model='company.cp' placeholder="Enter your CNPJ.">
      </div>
      <div>
        <input type="text" placeholder="Enter your company name.">
      </div>
      <div>
        <input type="text" placeholder="Enter your capital.">
      </div>
      <div>
        <input type="text" placeholder="Enter your services.">
      </div>
      <div>
        <input type="text" placeholder="Enter your service value.">
      </div>
      <div>
        <input type="text" placeholder="Enter your company size.">
      </div>
      <button type="button">Cadastrar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style scoped>
p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>

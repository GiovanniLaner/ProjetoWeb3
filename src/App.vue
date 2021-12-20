<template>
  <div id="app">

    <Header/>
    <Menu/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Seja bem vindo ao Union of Clouds"/>
    <router-view></router-view>

    <section class="register">
      <h2>Register your company:</h2>
<!-- save -->
      <form @submit.prevent="save">
        <div>
          <input type="text" v-model='company.cpnj' placeholder="Enter your CNPJ.">
        </div>
        <div>
          <input type="text" v-model='company.companyname' placeholder="Enter your company name.">
        </div>
        <div>
          <input type="text" v-model='company.capital' placeholder="Enter your capital.">
        </div>
        <div>
          <input type="text" v-model='company.service' placeholder="Enter your services.">
        </div>
        <div>
          <input type="text" v-model='company.servicevalue' placeholder="Enter your service value.">
        </div>
        <div>
          <input type="text" v-model='company.companytype' placeholder="Enter your company size.">
        </div>
        <button type="button" v-show='company.id == 0'>Register</button>
        <button type="button" v-show='company.id!=0'>Change</button>
      </form>
    </section>
<!-- save -->
<!-- findById -->
    <h2>Find by ID</h2>
    <form @submit.prevent="findById">
      <div>
        <input type="text" v-model='company.id' placeholder="Enter the ID.">
      </div>
      <button type="button">Find</button>
    </form>
    <h3>Consulted company:</h3>
    <p>
      <br/> Code: {{company.id}}
      <br/> CNPJ: {{company.cnpj}}
      <br/> Company Name: {{company.companyName}}
      <br/> Capital: {{company.capital}}
      <br/> Service: {{company.service}}
      <br/> Service Value:R$ {{company.serviceValue}}
      <br/> Company Type: {{company.companyType}}
    </p>
<!-- findById -->
<!-- findAll -->
    <h1>Companies Amount {{companies.length}} </h1>
    <h2>Companies table</h2>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>CNPJ</th>
          <th>company name</th>
          <th>capital</th>
          <th>service</th>
          <th>service value</th>
          <th>company type</th>
          <th>Delete</th>
          <th>Change</th>
        </tr>
      </thead>
      <tfoot>
          <tr>
            <th>id</th>
            <th>CNPJ</th>
            <th>company name</th>
            <th>capital</th>
            <th>service</th>
            <th>service value</th>
            <th>company type</th>
            <th>Delete</th>
            <th>Change</th>
          </tr>
      </tfoot>
      <tbody>
        <tr v-for="company in companies" :key="company.id">
          <td>{{company.id}}</td>
          <td>{{company.cnpj}}</td>
          <td>{{company.companyName}}</td>
          <td>{{company.capital}}</td>
          <td>{{company.service}}</td>
          <td>R$ {{company.serviceValue}}</td>
          <td>{{company.companyType}}</td>
          <td><button type="button" @click="deleteCompany(company)">Delete</button></td>
          <td><button type="button" @click="updateCompany(company)">Change</button></td>
        </tr>
      </tbody>
    </table>
<!-- findAll -->
    <Footer/>
  </div>
</template>

<script>


import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import CompanyServices from './services/CompanyServices'


export default {
  data() {
    return{
      companies: [],
      company: {
        id: 0,
        cnpj: '',
        companyname: '',
        capital: 0.0,
        service: '',
        servicevalue: 0.0,
        companytype: ''

      }
    }
  },
  name: 'App',
  components: {
    Header,
    Footer,
    Menu
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      CompanyServices.findAll().then(response => {
        this.companies = response.data;
      });
    },
    findById() {
      CompanyServices.findById(this.company).then(response => {
        this.company = response.data;
      })
    },
    save() {
      CompanyServices.save(this.company).then(response => {
        this.companies = response.data;
        this.findAll();
        this.company = {};
      })
    },
    deleteCompany(company) {
      if(confirm("Do you want to delete?")) {
          CompanyServices.delete(company).then(response => {
            if(response.status == 200) {
              alert("Deleted!");
              this.findAll()
            } else {
              alert("Delete canceled!");
            }
            this.company = response.data;
          });
      }
    },//fecha delete
    updateCompany(company) {
          this.company = company;

    }
  }//fecha methods
}//fecha export
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
a {
  margin: 10px;
}
</style>

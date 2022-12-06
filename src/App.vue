<template>
  <div id="app">
    <Homepage/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue';

import axios from 'axios'


export default {
  name: 'App',
  components: {
    Homepage,
    axios,
    data: {
      array: [
        {
          'nome': 'pippo'
        },
        {
          'nome': 'pino'
        }
      ]
    }
  },

  mounted() {


const instance = axios.create({
  URL: 'https://data.mongodb-api.com/app/data-hthnm/endpoint/data/v1/action/find',
  headers: {
            "api-key":'2O3jlUI9BXPZR72RKYBcaDB6eObcjw4Dh1msrbAAkVeJinmZDTFGtm6eHu3aWVJr',
            "Content-Type": "application/json",
            
            },
  Body:{
      "dataSource": "Cluster0",
      "database": "mean-api",
      "collection": "test_vehicles",
      "filter": {}
    }
  });


  console.log(instance);

    
    axios.post('https://data.mongodb-api.com/app/data-hthnm/endpoint/data/v1/action/find', {

            headers: {
            "api-key":'2O3jlUI9BXPZR72RKYBcaDB6eObcjw4Dh1msrbAAkVeJinmZDTFGtm6eHu3aWVJr',
            "Content-Type": "application/json",
            
            },
         Body:{
        "dataSource": "Cluster0",
        "database": "mean-api",
        "collection": "test_vehicles",
        "filter": {}
      }
        })
        .then(response => {
            
            console.log(response.data);
        })
       .catch(function (error) {
             console.log(error);
        });

        

  }

}
</script>

<style lang="scss">
@import'~bootstrap/dist/css/bootstrap.css';
 @import "./assets/scss/style.scss";

#app {
   font-family: $font;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

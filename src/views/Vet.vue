<template>
  <v-main>
    <p>{{vet.name}}</p>
    <p>Soy la página principal del veterinario</p>
  </v-main>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Vet',
  data(){
    return{
      vet:{}
    }
  },
  mounted(){
    let db = firebase.firestore()
    let uid= this.$route.params.id

    db.collection("vets").where("uid", "==", uid)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let vetDates = doc.data()
          console.log(vetDates)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    })

  },
  computed:{
  },
  methods:{

  }
}
</script>

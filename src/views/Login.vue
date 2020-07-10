<template>
  <v-main>
      <v-container>
        <v-row aling="center" justify="center">
          <v-col cols="12" sm="8" md="4">
             <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    label="Contraseña"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="login">Iniciar Sesión</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    async login(){
      try{
      let sign = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      let token = firebase.auth().currentUser.getIdToken()
      console.log(token)
      if(!token){
        alert('Lo siento tiene que volver a iniciar sesión')
        return
      }

      this.$store.commit('setToken', token.i)

      this.$router.push(`vet/${sign.user.uid}`)
      }catch(e){
        console.log(e)
        alert('El usuario y/o contraseña no son correctos')
      }
    }
  }
}
</script>

<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon v-if="isAuth" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>UVI24</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="!isAuth"><router-link to="/login">Login</router-link></v-btn>
      <v-btn v-if="isAuth" color="error" @click="logout()">Logout</v-btn>
      <v-btn v-if="!isAuth"><router-link to="/registro">Regístrate</router-link></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nombre de Usuario</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "MainNav",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Tu Perfil" },
        { title: "Clientes" },
        { title: "Cerrar Sesión" }
      ]
    };
  },
  computed:{
    isAuth(){
      return this.$store.state.isAuth
    }
  },
  methods:{
    logout(){
      this.$store.commit("logout")
			this.$router.push("/")
    }
  }
};
</script>

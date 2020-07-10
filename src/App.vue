<template>
  <v-app>
    <v-main>
      <MainNav />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import MainNav from '@/components/MainNav'

export default {
  name: 'App',

  components: {
    HelloWorld,
    MainNav
  },
  data: () => ({
    //
  }),
};
</script>

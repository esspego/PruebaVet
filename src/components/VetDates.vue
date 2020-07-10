<template>
  <v-main>
    <v-simple-table>
      <tbody>
        <tr>
          <td>Nombre:</td>
          <td>{{ vetInfo.name }}</td>
        </tr>
        <tr>
          <td>Apellido:</td>
          <td>{{ vetInfo.surname }}</td>
        </tr>
        <tr>
          <td>Centro Veterinario:</td>
          <td>{{ vetInfo.vetcenter }}</td>
        </tr>
        <tr>
          <td>Dirección:</td>
          <td>{{ vetInfo.address }}</td>
        </tr>
        <tr>
          <td>Ciudad:</td>
          <td>{{ vetInfo.city }}</td>
        </tr>
        <tr>
          <td>Código Postal:</td>
          <td>{{ vetInfo.postalcode }}</td>
        </tr>
        <tr>
          <td>País:</td>
          <td>{{ vetInfo.country }}</td>
        </tr>
        <tr>
          <td>Correo Electrónico:</td>
          <td>{{ vetInfo.email }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-main>
</template>
<script>
export default {
  name: "VetDates",
  props: ["vetInfo"]
};
</script>

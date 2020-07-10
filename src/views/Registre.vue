<template>
  <div>
    <v-container>
      <v-row aling="center" justify="center">
        <v-col cols="12" md="6">
          <v-form id="formRegistre">
            <v-text-field
              label="Nombre"
              v-model="name"
              :rules="inputRules"
              required
            >
            </v-text-field>

            <v-text-field
              label="Apellidos"
              v-model="surname"
              :rules="inputRules"
              required
            >
            </v-text-field>

            <v-text-field
              label="Centro Veterinario"
              v-model="vetcenter"
              :rules="inputRules"
              required
            >
            </v-text-field>

            <v-text-field label="Dirección" v-model="address"> </v-text-field>

            <v-text-field label="Ciudad" v-model="city"> </v-text-field>

            <v-text-field label="Código Postal" v-model="postalcode">
            </v-text-field>

            <v-text-field label="País" v-model="country"> </v-text-field>

            <v-text-field
              label="Correo Electrónico"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            >
            </v-text-field>

            <v-text-field
              label="Contraseña"
              type="password"
              v-model="password"
              :rules="inputRules"
              required
            >
            </v-text-field>

            <v-text-field
              label=" Repetir Contraseña"
              type="password"
              v-model="repeatPassword"
              :rules="inputRules"
              required
            >
            </v-text-field>

            <v-checkbox
              v-model="privacyPolitic"
              label="He leído y acepto la política de privacidad"
            >
            </v-checkbox>
          </v-form>

          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title>Datos del Veterinario </v-card-title>
                <v-card-text>
                  Estos son los datos que has introducido</v-card-text
                >
                <VetDates :vetInfo="newVet" />
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialog = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <v-btn @click="dialog = true">Comprobar datos</v-btn>
          <v-btn @click="createUser()">Registrar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import firebase from "firebase";
import VetDates from "@/components/VetDates";

export default {
  name: "Registre",
  components: {
    VetDates
  },
  data() {
    return {
      name: "Pepe",
      surname: "Puentes",
      vetcenter: "clínica los pajaritos",
      address: "c/arcoiris",
      city: "Málaga",
      postalcode: "29006",
      country: "España",
      email: "",
      password: "123456a",
      repeatPassword: "123456a",
      privacyPolitic: false,
      emailRules: [
        v => !!v || "Campo obligatorio",
        v => /.+@.+\..+/.test(v) || "Debe ser un email válido"
      ],
      inputRules: [v => !!v || "Campo obligatorio"],
      dialog: false
    };
  },
  computed: {
    newVet() {
      let vet = {
        name: this.name,
        surname: this.surname,
        vetcenter: this.vetcenter,
        address: this.address,
        city: this.city,
        postalcode: this.postalcode,
        country: this.country,
        email: this.email
      };
      return vet;
    }
  },
  methods: {
    checkPassword() {
      if (this.password !== this.repeatPassword) {
        alert("Las contraseñas no coinciden");
        return false;
      }
      return true;
    },
    checkPolitic() {
      if (this.privacyPolitic === false) {
        alert("Debe de aceptar la política de privacidad para registrarse");
        return false;
      }
      return true;
    },
    async createUser() {
      try {
        let checkPassword = this.checkPassword();
        let checkPolitic = this.checkPolitic();
        if (!checkPassword || !checkPolitic) {
          return;
        }

        let auth = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.saveUser(auth.user);
        this.$router.push("login");
      } catch (e) {
        console.log(e);
        alert("Ha ocurrido un error, por favor vuelva a intentarlo");
      }
    },
    async saveUser(user) {
      try {
        let db = firebase.firestore();
        let dbVets = db.collection("vets");
        this.newVet.uid = user.uid;
        let saveVet = dbVets.doc(user.uid).set(this.newVet);
      } catch (e) {
        console.log(e);
        alert("Ha ocurrido un error, por favor vuelva a intentarlo");
      }
    }
  }
};
</script>

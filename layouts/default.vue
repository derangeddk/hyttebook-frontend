<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <nuxt-link to="/" style="color:inherit; text-decoration:inherit">Hytte Index</nuxt-link>
      <v-spacer />
      <!-- <div class="d-sm-none">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item href="mailto:fischer-support@deranged.dk">
              Support
            </v-list-item>
            <v-list-item nuxt to="/logistics" v-if="auth.user">
              Bestillingsliste
            </v-list-item>
            <v-list-item nuxt to="/" v-if="auth.user">
              Dashboard
            </v-list-item>
            <v-list-item nuxt to="/projects" v-if="auth.user">
              Projekter
            </v-list-item>
            <v-list-item nuxt to="/products" v-if="auth.user">
              Produkter
            </v-list-item>
            <v-list-item v-if="auth.user" disabled>
              {{ auth.user.name }}
            </v-list-item>
            <v-list-item :href="config.modelUrl">
              FLP
            </v-list-item>
          </v-list>
        </v-menu>
      </div> -->
      <!-- <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text href="mailto:fischer-support@deranged.dk">Support</v-btn>
        <v-btn text nuxt to="/logistics" v-if="auth.user">
          Bestillingsliste
        </v-btn>
        <v-btn text nuxt to="/" v-if="auth.user">
          Dashboard
        </v-btn>
        <v-btn text nuxt to="/projects" v-if="auth.user">
          Projekter
        </v-btn>
        <v-btn text nuxt to="/products" v-if="userShouldHaveAccess">
          Produkter
        </v-btn>
        <v-btn text v-if="auth.user" disabled>
          {{ auth.user.name }}
        </v-btn>
        <v-btn text :href="config.modelUrl">
          FLP
        </v-btn>
      </v-toolbar-items> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!--v-footer>
      <span>&copy; 2019</span>
    </v-footer-->
  </v-app>
</template>

<script>

export default {
  data() {
    return {
    };
  }
};
</script>

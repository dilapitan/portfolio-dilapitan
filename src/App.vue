<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="background"
      app
    >
      <br /><br />
      <v-list>
        <v-list-item href="https://dilapitan.dev/" target="_blank">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Profile</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Projects</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/study">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Study</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/tags">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Tags</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://codepen.io/dilapitan" target="_blank">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Codepen</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://github.com/dilapitan" target="_blank">
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-none">Github</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="background"
      elevation="0"
      :class="{
        'pl-10': $vuetify.breakpoint.mdAndUp,
        'pr-10': $vuetify.breakpoint.mdAndUp,
        'pt-10': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xsOnly"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-img
        src="@/assets/dominic.png"
        class="shrink mr-2"
        contain
        :width="`${$vuetify.breakpoint.mdAndUp ? '60' : '40'}`"
      ></v-img>

      <v-btn text>
        <span class="mr-2 text-h6 text-none font-weight-bold">Dominic</span>
      </v-btn>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn text href="https://dilapitan.dev/" target="_blank">
          <span class="text-none"> Profile </span>
        </v-btn>
        <v-btn text to="/">
          <span class="text-none"> Projects </span>
        </v-btn>
        <v-btn text to="/study">
          <span class="text-none"> Study </span>
        </v-btn>
        <v-btn text to="/tags">
          <span class="text-none"> Tags </span>
        </v-btn>
        <v-btn text href="https://codepen.io/dilapitan" target="_blank">
          <span class="text-none"> Codepen </span>
        </v-btn>
        <v-btn text href="https://github.com/dilapitan" target="_blank">
          <span class="text-none"> Github </span>
        </v-btn>
      </template>
    </v-app-bar>

    <v-card color="background" flat height="100%">
      <v-main>
        <template v-if="$vuetify.breakpoint.mdAndUp"> <br /><br /> </template>
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
}
</script>

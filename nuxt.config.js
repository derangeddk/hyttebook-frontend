import colors from 'vuetify/es5/util/colors';

module.exports = {
    env: { },
    css: ["~/css/main.scss"],
    mode: "spa",
    buildModules: [
      // Simple usage
      '@nuxtjs/vuetify',
    ],
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        light: true,
        themes: {
          light: {
            primary: '#66a9ad',
            accent: colors.grey.lighten3,
            secondary: colors.amber.lighten3,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3
          }
        }
      }
    }
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rouge: "#de3d29",
        vert: "#52a64b",
        jaune: "#E2C91D",
        noir: "#000000",
        blanc: "#ffffff",
        gris: "#FCFCFC",
        grisfonc: "#4B5563",
      },

      fontFamily: {
        "reggae-by-aslam": "REGGAE by ASLAM",
        prompt: "Prompt",
        roboto: "Roboto",
        spinnaker: "Spinnaker",
        "open-sans": "Open Sans",
      },

      fontsize: {
        sm: "0.6875rem",
        base: "0.8125rem",
        lg: "0.875rem",
        xl: "0.9375rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2.3125rem",
      },

      borderRadius: {
        none: "0",
        xs: "0.25rem",
        sm: "0.3125rem",
        default: "0.375rem",
        lg: "0.625rem",
        xl: "0.9375rem",
        "2xl": "2.1875rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
    },
  },
  plugins: [],
};

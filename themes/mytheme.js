import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
// bg-gray-100/90 dark:bg-gray-900/90
const MyPreset = definePreset(Aura, {
  primary: {},
  semantic: {
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    balckAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    blue: {
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#473FE0",
      500: "#2A22C7",
      600: "#1F18A3",
      700: "#191485",
      800: "#19147A",
      900: "#E6E6FA",
    },
    gray: {
      50: "#E6EAEB",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#72839E",
      600: "#4A5568",
      700: "#2D3340",
      800: "#1C2434",
      900: "#131A25",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#DF484A",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#3BD671",
      600: "#33B861",
      700: "#2DA356",
      800: "#1C6636",
      900: "#113D20",
    },
    primary: {
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#473FE0",
      500: "#2A22C7",
      600: "#1F18A3",
      700: "#191485",
      800: "#19147A",
      900: "#E6E6FA",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    myButton: {
      paddingX: ".5rem",
      paddingY: ".5rem",
    },
    colorScheme: {
      light: {
        //
      },
      // dark: {
      //     whiteAlpha:{
      //         100: '{ blackAlpha.100 }',
      //         200: '{ blackAlpha.200 }',
      //         300: '{ blackAlpha.300 }',
      //         400: '{ blackAlpha.400 }',
      //         500: '{ blackAlpha.500 }',
      //         600: '{ blackAlpha.600 }',
      //         700: '{ blackAlpha.700 }',
      //         800: '{ blackAlpha.800 }',
      //         900: 'black',
      //     },
      //     blackAlpha:{
      //         100: '{ whiteAlpha.100 }',
      //         200: '{ whiteAlpha.200 }',
      //         300: '{ whiteAlpha.300 }',
      //         400: '{ whiteAlpha.400 }',
      //         500: '{ whiteAlpha.500 }',
      //         600: '{ whiteAlpha.600 }',
      //         700: '{ whiteAlpha.700 }',
      //         800: '{ whiteAlpha.800 }',
      //         900: '{ whiteAlpha.900 }',
      //     },
      // }
    },
  },
  components: {
    button: {
      paddingX: "{myButton.paddingX}",
      paddingY: "{myButton.paddingY}",
      primary: {
        color: "{blue.500}",
        background: "{gray.600}",
      },
      colorScheme: {
        light: {
          // root: {

          // },
          primary: {
            background: "{ gray.200 }",
            hoverBackground: "{ green.500 }",
            hoverColor: " { whiteAlpha.900 }",
            borderColor: " { gray.300 }",
            hoverBorderColor: " { green.600 }",
          },
        },
        dark: {
          primary: {
            background: "white",
          },
        },
      },
    },
    // toggleswitch: {
    //     extend: {
    //         root: {
    //             myDisabledOpacity: '0.7'
    //         },
    //         handle: {
    //             myCheckedDisabledBackground: '{primary.color}'
    //         }
    //     }
    // },
    css: ({ dt }) => `
            .p-toggleswitch.p-disabled .p-toggleswitch-slider {
                opacity: ${dt("toggleswitch.my.disabled.opacity")};
            }

            .p-toggleswitch.p-disabled .p-toggleswitch-handle {
                background: ${dt(
                  "toggleswitch.my.checked.disabled.background"
                )};
            }
            `,
  },
});

export default {
  preset: MyPreset,
  options: {
    prefix: "p",
    darkModeSelector: ".dark",
    cssLayer: false,
  },
};

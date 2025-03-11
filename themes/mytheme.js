import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
const MyPreset = definePreset(Aura, {
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
  semantic: {
    white: "#ffffff",
    black: "#111111",
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
    blackAlpha: {
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
      10: "whitesmoke",
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
    zinc: {
      10: "whitesmoke",
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
      paddingX: "1rem",
      paddingY: ".5rem",
    },
    borderRadius: "40px",
    borderColor: "{gray.200}",
    hoverBorderColor: "{gray.300}",
    darkBorderColor: "{gray.700}",
    darkHoverBorderColor: "{gray.600}",
    //   focusRing: {
    //     width: '2px',
    //     style: 'dashed',
    //     color: '{primary.color}',
    //     offset: '1px'
    // },
    //   formField: {
    //     hoverBorderColor: '{primary.color}'
    // },
  },
  components: {
    button: {
      paddingX: "{myButton.paddingX}",
      paddingY: "{myButton.paddingY}",
      borderRadius: "{borderRadius}",
      transitionDuration: "150ms",
      // gap: "2px",
      colorScheme: {
        light: {
          secondary: {
            background: "{gray.100}",
            activeBackground: "{gray.200}",
            hoverBackground: "{gray.200}",
            borderColor: "{borderColor}",
            hoverBorderColor: "{hoverBorderColor}",
          },
          success: {
            color: "{gray.100}",
          },
          outlinedSuccess: {
            hoverBackground: "{green.600}",
            activeBackground: "transparent",
          },
        },
        dark: {
          secondary: {
            background: "{gray.900}",
            activeBackground: "{gray.800}",
            hoverBackground: "{gray.800}",
            borderColor: "{darkBorderColor}",
            hoverBorderColor: "{darkHoverBorderColor}",
          },
          outlinedSuccess: {
            borderColor: "{primary.500}",
            hoverBackground: "{primary.600}",
            color: "{gray.100}",
          },
          success: {
            background: "{primary.500}",
            activeBackground: "{primary.700}",
            borderColor: "{primary.600}",
            activeBorderColor: "{primary.700}",
            hoverBackground: "{primary.600}",
            hoverBorderColor: "{primary.700}",
            color: "{gray.100}",
            activeColor: "{gray.100}",
            hoverColor: "{gray.100}",
          },
        },
      },
    },
    menu: {
      listPadding: "0",
      shadow: "none",
      background: "transparent",
      borderColor: "transparent",
      itemFocusBackground: "transparent",
      colorScheme: {
        light: {
          color: "{gray.900}",
          background: "{white}",
          item: {
            color: "{gray.900}",
          },
          submenuLabel: {
            color: "{gray.900}",
          },
          // extend: {
          //   root: '!bg-gray-200 !border-none'
          // }
          // background: "transparent",
          // borderColor: "transparent",
        },
        dark: {
          color: "{gray.100}",
          item: {
            color: "gray.100",
          },
          submenuLabel: {
            color: "gray.100",
          },
          background: "{gray.800}",
          borderColor: "transparent",
        },
      },
    },
    toggleswitch: {
      colorScheme: {
        light: {
          background: "{gray.100}",
          handleBackground: "{white}",
          handleHoverBackground: "{gray.100}",
          hoverBackground: "{gray.200}",
          borderColor: "{borderColor}",
          hoverBorderColor: "{hoverBorderColor}",
          shadow: "0 1px 3px 0 {gray.300}",
        },
        dark: {
          checkedBackground: "{gray.900}",
          handleCheckedBackground: "{gray.200}",
          handleCheckedHoverBackground: "{gray.400}",
          checkedHoverBackground: "{gray.800}",
          checkedBorderColor: "{darkBorderColor}",
          checkedHoverBorderColor: "{darkHoverBorderColor}",
          disabledBackground: "{gray.900}",
          shadow: "0 1px 3px 0 {gray.900}",
        },
      },
      css: ({ dt }) => `
      `,
    },
    card: {
      bodyGap: "10px",
      colorScheme: {
        light: {
          background: "{white}",
        },

        dark: {
          background: "{gray.800}",
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          background: "{ whiteAlpha.800 }",
          filledBackground: "red",
          filledHoverBackground: "primary",
          borderColor: "{ gray.300 }",
          hoverBorderColor: "{ gray.500 }",
          focusBorderColor: "{ gray.400 }",
          color: "{gray.900}",
          borderRadius: "{borderRadius}",
        },
        dark: {
          background: "{ gray.800 }",
          filledBackground: "",
          filledHoverBackground: "",
          borderColor: "{ gray.700 }",
          hoverBorderColor: "{ gray.500 }",
          focusBorderColor: "{ gray.600 }",
          color: "{gray.100}",
          borderRadius: "{borderRadius}",
        },
      },
    },
    menubar: {
      background: "transparent",
      hoverBackground: "transparent",
      borderColor: "none",
      item: {
        focusBackground: "none",
        activeBackground: "none",
      },
      colorScheme: {
        light: {},
        dark: {},
      },
    },
    skeleton: {
      colorScheme: {
        light: {
          background: "{gray.100}",
        },
        dark: {
          background: "{gray.900}",
        },
      },
    },
    dock: {
      colorScheme: {
        light: {
          background: "{gray.100}",
          borderColor: "transparent",
        },
        dark: {
          background: "{gray.900}",
          borderColor: "transparent",
        },
      },
    },
    tooltip: {
      colorScheme: {
        light: {
          background: "{gray.100}",
          color: "{gray.900}",
        },
        dark: {
          background: "{gray.800}",
          color: "{gray.100}",
        },
      },
    },
    select: {
      colorScheme: {
        light: {
          background: "{gray.100}",
          borderColor: "{gray.200}",
          hoverBorderColor: "{gray.300}",
          focusBorderColor: "{green.500}",
          optionSelectedBackground: "transparent",
          optionSelectedFocusBackground: "transparent",
        },
        dark: {
          background: "{gray.900}",
          borderColor: "{gray.700}",
          hoverBorderColor: "{gray.600}",
          focusBorderColor: "{primary.500}",
          optionSelectedBackground: "transparent",
          optionSelectedFocusBackground: "transparent",
        },
      },
    },
  },
});

export default {
  preset: MyPreset,
  options: {
    prefix: "p",
    darkModeSelector: ".dark",
    // cssLayer: false,
  },
};

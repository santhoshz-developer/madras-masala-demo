export interface Theme {
  colors: {
    black: string;
    white: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    green: string;
    grey: string;
    navy: string;
    dark: string;
    lightnav: string;
    lightgreen: string;
    lightgrey: string;
    light: string;
    icon: string;
    shadow: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#ffc107",
    background: "#f8f9fa",
    text: "#343a40",
    green: "#46D200",
    grey: "#474A55",
    navy: "#11142D",
    dark: "#212121",
    white: "#fff",
    black: "#000",
    lightnav: "#e4e4e4",
    lightgreen: "#F0F7EC",
    lightgrey:"#9A9AB0",
    light:"#ECECEC",
    icon:"#222631",
    shadow:"#0000000F"
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
};

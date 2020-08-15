const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

const customMediaQuery = (maxWidth: string | number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};

export default {
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  darkGrayColor: "#999",
  lightGrayColor: "#c7c7c7",
  successColor: "#3D8939",
  infoColor: "#358597",
  redColor: "#ED4956",
  blueColor: "#3897f0",
  darkBlueColor: "#003569",
  boxBorder: BOX_BORDER,
  borderRadius: BORDER_RADIUS,
  whiteBox: `
    border:${BOX_BORDER};
    border-radius:${BORDER_RADIUS};
    background: white;
  `,
  maxWidth: "730px",
  media
};

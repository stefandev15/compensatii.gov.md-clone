import localFont from "@next/font/local";

const onest = localFont({
  src: [
    {
      path: "./OnestRegular.ttf",
      weight: "400",
    },
    {
      path: "./OnestMedium.ttf",
      weight: "500",
    },
    {
      path: "./OnestBold.ttf",
      weight: "700",
    },
  ],
});

export { onest };

import personasImage from "../assets/ServiceSectionimg/image1.png";
import sketchesImage from "../assets/ServiceSectionimg/image2.png";
import takeawaysImage from "../assets/ServiceSectionimg/image3.png";
import overviewImage from "../assets/ServiceSectionimg/image4.png";
import typographyImage from "../assets/ServiceSectionimg/image5.png";
import moodboardImage from "../assets/ServiceSectionimg/image6.png";

export const SERVICES = [
  {
    id: "strategy",
    eyebrow: "What can we do for you",
    title: "Strategy and Insight",
    intro: "We interrogate what others assume. Then we build the brief behind the brief.",
    items: [
      "Brand strategy & positioning",
      "Messaging & tone of voice",
      "Audience & competitor research",
      "Workshops & creative sprints",
    ],
    cta: { label: "Contact", href: "#contact" },

    // The card is a collage of separate images. Each one is placed on a
    // 24-column x 10-row grid: col / row are CSS grid lines ("start / end").
    collage: {
      label: "Strategy workshop boards: personas, sketches, typography, takeaways, moodboard and brand overview",
      images: [
        { id: "personas",   alt: "Audience personas board",              col: "1 / 13",  row: "1 / 6",  tint: "#fde4e1", src: personasImage },
        { id: "sketches",   alt: "Hand-drawn concept sketches",          col: "13 / 17", row: "1 / 4",  tint: "#f1f1f1", src: sketchesImage },
        { id: "notes",      alt: "Research notes",                       col: "13 / 17", row: "4 / 6",  tint: "#e9e9e9", src: sketchesImage },
        { id: "typography", alt: "Typography and industry logos board",  col: "17 / 25", row: "1 / 6",  tint: "#fde4e1", src: typographyImage },
        { id: "takeaways",  alt: "Key takeaways by section",             col: "1 / 8",   row: "6 / 11", tint: "#efefef", src: takeawaysImage },
        { id: "moodboard",  alt: "Campaign moodboard",                   col: "8 / 20",  row: "6 / 11", tint: "#fde4e1", src: moodboardImage },
        { id: "overview",   alt: "Brand overview document",              col: "20 / 25", row: "6 / 11", tint: "#f4f4f4", src: overviewImage },
      ],
    },
  },
];
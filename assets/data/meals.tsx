import { Ionicons } from "@expo/vector-icons";

export const promos = [
  "https://cdn.pixabay.com/photo/2020/11/23/14/31/black-friday-5769903_960_720.png",
  "https://cdn.pixabay.com/photo/2022/11/02/17/19/holiday-7565539_640.jpg",
  "https://cdn.pixabay.com/photo/2022/03/15/13/19/sale-7070341_640.png",
  "https://cdn.pixabay.com/photo/2014/09/04/11/03/supermarket-435452_640.jpg",
];

export interface Music {
  id: number;
  name: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  duration: string;
  image: string;
};

export const orders = [
  {
    id: "#0012345",
    status: "On Delivery",
    itemQty: 12,
    icon: "cube-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#feab02",
    iconContainerBg: "bg-[#fff3cd]",
  },
  {
    id: "#0012341",
    status: "Completed",
    itemQty: 12,
    icon: "cube-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#fff",
    iconContainerBg: 'bg-primary',
  },
  {
    id: "#0012342",
    status: "Cancelled",
    itemQty: 12,
    icon: "cube-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#fff",
    iconContainerBg: "bg-red-500",
  },
  {
    id: "#0012343",
    status: "Completed",
    itemQty: 12,
    icon: "cube-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#fff",
    iconContainerBg: 'bg-primary',
  },
];

export const musics: Music[] = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    releaseYear: 2019,
    duration: "3:20",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-mixtape-cover-album-cover-design-template-96960c1beb15051df4263b62c116b201.webp?ts=1738686989",
  },
  {
    id: 2,
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    genre: "Pop",
    releaseYear: 2020,
    duration: "3:23",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-best-cover-album-music-art-trap-mixtap-design-template-da75cef8c1e5a75d88369379ccdb5449.webp?ts=1736690451",
  },
  {
    id: 3,
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    genre: "Pop",
    releaseYear: 2021,
    duration: "2:21",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hot-mixtape-cover-album-cover-design-template-f20577c009bd5f1412a52245f7749444.webp?ts=1729317645",
  },
  {
    id: 4,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    releaseYear: 2019,
    duration: "3:20",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-mixtape-cover-album-cover-design-template-96960c1beb15051df4263b62c116b201.webp?ts=1738686989",
  },
];


export const musicCategories = [
  {
    name: "Rock",
    bgColor: "rgba(255, 87, 34, .7)",
    icon: "musical-notes-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Hip-Hop",
    bgColor: "rgba(41, 163, 125, .7)",
    icon: "mic-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Electronic",
    bgColor: "rgba(72, 177, 175, .7)",
    icon: "headset-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Jazz",
    bgColor: "rgba(170, 118, 97, .7)",
    icon: "musical-note-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Pop",
    bgColor: "rgba(255, 193, 7, .7)",
    icon: "radio-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Reggae",
    bgColor: "rgba(76, 175, 80, .7)",
    icon: "sunny-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Classical",
    bgColor: "rgba(103, 58, 183, .7)",
    icon: "library-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
  {
    name: "Metal",
    bgColor: "rgba(158, 0, 89, .7)",
    icon: "flash-outline" as keyof typeof Ionicons.glyphMap,
    img: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
  },
];
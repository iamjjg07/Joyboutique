export type Category = "Ready to wear" | "Occasion" | "Atelier";

export type Piece = {
  id: string;
  name: string;
  price: number;
  category: Category;
  fabric: string;
  note: string;
  image: string;
  alt: string;
};

export const CATEGORIES = ["All", "Ready to wear", "Occasion", "Atelier"] as const;
export type Filter = (typeof CATEGORIES)[number];

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;

export const pieces: Piece[] = [
  {
    id: "slip",
    name: "First Light Slip",
    price: 248,
    category: "Ready to wear",
    fabric: "Ivory silk",
    note: "A bias slip with thin straps and an ankle hem. Cut to move when you cross a room, not to announce it.",
    image: "/looks/slip.jpg",
    alt: "A woman in an ivory silk slip dress standing in morning window light",
  },
  {
    id: "linen",
    name: "Harbour Shirt Dress",
    price: 186,
    category: "Ready to wear",
    fabric: "Stone linen",
    note: "Washed linen, a self belt, sleeves meant to be rolled. The dress you put on and then forget you are wearing.",
    image: "/looks/linen.jpg",
    alt: "A woman in a stone linen shirt dress against a pale wall",
  },
  {
    id: "coat",
    name: "Threshold Coat",
    price: 420,
    category: "Atelier",
    fabric: "Charcoal wool",
    note: "A long coat for the walk between night and morning. Soft shoulder, hidden closure, room for a knit underneath.",
    image: "/looks/coat.jpg",
    alt: "A woman in a long charcoal wool coat in a boutique doorway",
  },
  {
    id: "column",
    name: "Quiet Column",
    price: 168,
    category: "Ready to wear",
    fabric: "Poplin and crepe",
    note: "A tucked ivory shirt and a high-waisted column skirt. Wear them as a set, or let the skirt stand on its own.",
    image: "/looks/column.jpg",
    alt: "A woman in an ivory shirt and cream column skirt in sunlight",
  },
  {
    id: "knit",
    name: "Dawn Knit",
    price: 154,
    category: "Ready to wear",
    fabric: "Oatmeal merino",
    note: "A soft neckline and a matching midi. The piece you reach for when the house is still quiet.",
    image: "/looks/knit.jpg",
    alt: "A woman seated in an oatmeal merino knit and midi skirt",
  },
  {
    id: "gown",
    name: "Morning Column",
    price: 640,
    category: "Occasion",
    fabric: "Ivory satin",
    note: "Floor length, a modest neck, no embellishment. For vows, dinners, and the hours that ask for stillness.",
    image: "/looks/gown.jpg",
    alt: "A woman in a floor-length ivory satin column gown by a window",
  },
  {
    id: "suit",
    name: "Ink Suit",
    price: 490,
    category: "Atelier",
    fabric: "Wool crepe",
    note: "Blazer and straight trouser, cut close but never sharp. Shown on the form in the atelier — come and try the cloth.",
    image: "/looks/suit.jpg",
    alt: "An ink wool suit on a dress form in a sunlit boutique",
  },
];

export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function pieceById(id: string) {
  return pieces.find((piece) => piece.id === id);
}

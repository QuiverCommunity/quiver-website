export type INFT = {
  name: string;
  imageUrl: string;
  category: "Silver" | "Platinium" | "Bronze" | "Diamond";
  crypto: "ETH" | "BTC";
  progress: "up" | "down" | "stable";
};

export type IBenefit = {
  name: string;
  category: string;
  items: string[];
};

export interface EqEntity {
  id: number;
  userid: string;
  itemname: string;
  itemnumber: string;
  rarity: string;
  insertDate: Date; // Typ obiektu Date
  updateDate: Date; // Dodaj, jeśli potrzebujesz
  username: string;
  ikona: string;
  fullIconUrl?: string;
}

export interface EqEntityDTO {
  id: number;
  userid: string;
  itemname: string;
  itemnumber: string;
  rarity: string;
  insertDate: string; // Typ string
  updateDate: string; // Typ string, jeśli potrzebujesz
}

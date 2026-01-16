
export interface Vehicle {
  id: string;
  model: string;
  series: string;
  type: 'Sedan' | 'SUV' | 'Coupe' | 'Electric';
  price: string;
  image: string;
  engine: string;
  power: string;
  acceleration: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
}

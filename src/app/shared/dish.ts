//class created for dish of menu card jisko import kiya menu.component.ts mai
import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}
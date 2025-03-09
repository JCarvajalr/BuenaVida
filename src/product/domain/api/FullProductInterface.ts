import { CategoryInterface } from "../category/AbstractCategory";
import { ImageInterface } from "../image/AbstractImage";

export default interface FullProductInterface {
    id: string;
    name: string;
    description: string;
    price: number;
    state: boolean;
    stock: number;
    image: ImageInterface;
    category: CategoryInterface;
}
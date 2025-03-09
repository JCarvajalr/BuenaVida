import MySqlProductInterface from "../../../../sql/domain/product/MySqlProductInterface";
import NullImage from "../../../domain/image/NullImage";
import Image from "../../../domain/image/Image";

export default class GetterImage {
    public get(name: string): Image {
        if (name.length === 0){
            return new NullImage();
        }
        let path = "";
        return new Image({
            name: name,
            path: path,
        })
    }
}
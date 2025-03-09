import MySqlProductInterface from "../../../../mysql/domain/product/MySqlProductInterface";
import NullImage from "../../../domain/image/NullImage";
import Image from "../../../domain/image/Image";

export default class GetterImage {
    public get(mySqlProduct: MySqlProductInterface): Image[] {
        return [new NullImage()];
    }
}
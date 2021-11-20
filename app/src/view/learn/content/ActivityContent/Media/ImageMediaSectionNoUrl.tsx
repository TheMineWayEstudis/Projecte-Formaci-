import IMedia from "./IMedia";
import { Image } from 'antd';
import Module from "module";

export default class ImageMediaSectionNoUrl implements IMedia {
    image: any;

    constructor(image: any) {
        this.image = image;
    }

    get(): any {
        return (
            <Image
                src={this.image["default"]} width="100%"
            />
        );
    }
}
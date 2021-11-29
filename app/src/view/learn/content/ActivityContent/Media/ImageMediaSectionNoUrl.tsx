import IMedia from "./IMedia";
import { Image } from 'antd';
import Module from "module";

export default class ImageMediaSectionNoUrl implements IMedia {
    image: any;
    percent: number;

    constructor(image: any, percent: number = 100) {
        this.image = image;
        this.percent = percent;
    }

    get(): any {
        return (
            <Image
                src={this.image["default"]} width={`${this.percent}%`}
            />
        );
    }
}
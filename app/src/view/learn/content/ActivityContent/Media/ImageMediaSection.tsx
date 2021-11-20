import IMedia from "./IMedia";
import { Image } from 'antd';

export default class ImageMediaSection implements IMedia {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    get(): any {
        return (
            <Image
                src={this.url} width="100%"
            />
        );
    }
}
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import IActivityContent from "./IActivitySection";

export default class DownloadSection implements IActivityContent {
    fileUrl: string;
    title: string;

    constructor(title: string, fileUrl: string) {
        this.title = title;
        this.fileUrl = fileUrl;
    }

    get() {
        return (
            <a href={this.fileUrl}><Button icon={<DownloadOutlined/>}>{this.title}</Button></a>
        );
    }
}
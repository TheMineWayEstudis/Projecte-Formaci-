import { Col, Row, Image } from "antd";
import IActivityContent from "./IActivitySection";
import IMedia from "./Media/IMedia";
import TextSection from "./TextSection";

/**
 * Es fa servir per crear seccions de text
 */
export default class TextWithMediaSection implements IActivityContent {
    textComponent: TextSection;
    media: IMedia;
    title?: string;

    constructor(textComponent: TextSection, media: IMedia) {
        this.media = media;
        this.textComponent = textComponent;
    }

    get(): any {
        return (
            <Row gutter={24}>
                <Col md={12}>
                    {this.textComponent.get()}
                </Col>
                <Col md={12}>
                    {this.media.get()}
                </Col>
            </Row>
        );
    }
}
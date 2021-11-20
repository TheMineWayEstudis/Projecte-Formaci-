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
    customWidth?: number;

    constructor(textComponent: TextSection, media: IMedia, customWidth?: number) {
        this.media = media;
        this.textComponent = textComponent;
        this.customWidth = customWidth;
    }

    get(): any {
        return (
            <Row gutter={24}>
                <Col md={this.customWidth === undefined ? 12 : this.customWidth}>
                    {this.textComponent.get()}
                </Col>
                <Col>
                    {this.media.get()}
                </Col>
            </Row>
        );
    }
}
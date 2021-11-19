import { Col, Row, Image } from "antd";
import IActivityContent from "./IActivitySection";
import TextSection from "./TextSection";

/**
 * Es fa servir per crear seccions de text
 */
export default class TextWithImageSection implements IActivityContent {
    textComponent: TextSection;
    imageUrl: string;
    title?: string;

    constructor(textComponent: TextSection, imageUrl: string) {
        this.imageUrl = imageUrl;
        this.textComponent = textComponent;
    }

    get(): any {
        return (
            <Row gutter={24}>
                <Col md={12}>
                    {this.textComponent.get()}
                </Col>
                <Col md={12}>
                    <Image src={this.imageUrl} width="100%"/>
                </Col>
            </Row>
        );
    }
}
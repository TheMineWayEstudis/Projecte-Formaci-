import { Col, Row, Image } from "antd";
import IActivityContent from "./IActivitySection";
import IMedia from "./Media/IMedia";
import TextSection from "./TextSection";

/**
 * Es fa servir per crear seccions de text
 */
export default class TextWithMediaSection implements IActivityContent {
    component: IActivityContent;
    media: IMedia;

    constructor(component: IActivityContent, media: IMedia) {
        this.media = media;
        this.component = component;
    }

    get(): any {
        return (
            <Row gutter={24}>
                <Col sm={24} lg={12} xl={12} xxl={16}>
                    {this.component.get()}
                </Col>
                <Col sm={24} lg={12} xl={12} xxl={8}>
                    {this.media.get()}
                </Col>
            </Row>
        );
    }
}
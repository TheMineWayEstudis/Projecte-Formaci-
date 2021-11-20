import { Checkbox, Col, Row } from "antd";
import IActivityContent from "./IActivitySection";

export default class ListSection implements IActivityContent {
    list: string[];
    checkable?: boolean;
    title?: string;

    constructor(list: string[], title?: string, checkable?: boolean) {
        this.list = list;
        this.checkable = checkable;
        this.title = title;
    }

    private getTitle() {
        return (
            <h2>{this.title}</h2>
        );
    }

    get() {
        if (this.checkable) {
            return (
                <Row>
                    {this.title && this.getTitle()}
                    {this.list.map((e: string) => {
                        return (
                            <Col span={24}>
                                <Checkbox>
                                    {e}
                                </Checkbox>
                            </Col>
                        )
                    })}
                </Row>
            );
        }

        return (
            <>
                {this.title && this.getTitle()}
                <ul>
                    {this.list.map((e: string) => {
                        return <li>{e}</li>
                    })}
                </ul>
            </>
        );
    }
}
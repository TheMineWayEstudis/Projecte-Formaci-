import { Alert } from "antd";
import { type } from "os";
import IActivitySection from "./IActivitySection";

/**
 * Es fa servir per crear seccions d'alerta
 */
export default class AlertSection implements IActivitySection {
    component: IActivitySection;
    title?: string;
    type: "success" | "info" | "warning" | "error";

    constructor(component: IActivitySection, type: "success" | "info" | "warning" | "error", title: string = "Alerta") {
        this.component = component;
        this.title = title;
        this.type = type;
    }

    get(): any {
        return (
            <Alert message={this.title} description={this.component.get()} type={this.type} showIcon/>
        );
    }
}
import { Divider } from "antd";
import IActivitySection from "./ActivityContent/IActivitySection";

export class ActivityContent {
    title: string;
    description: string;
    content: IActivitySection[];
    
    constructor(title: string, description: string, content: IActivitySection[]) {
        this.title = title;
        this.description = description;
        this.content = content;
    }

    // Retorna l'activitat
    getActivity(): any {
        return (
            <>
                <h1 style={{fontWeight: 'bold'}}>{this.title}</h1>
                <p style={{textAlign: 'justify'}}>{this.description}</p>
                <Divider/>
                {
                    this.content.map((c: IActivitySection) => c.get())
                }
                <Divider/>
            </>
        );
    }
}
import IActivitySection from "./IActivitySection";

/**
 * Es fa servir per crear seccions de text
 */
export default class TextSection implements IActivitySection {
    text: string;
    title?: string;

    constructor(text: string, title?: string) {
        this.text = text;
        this.title = title;
    }

    get(): any {
        return (
            <>
                {this.title && <h1>{this.title}</h1>}
                <p style={{textAlign: 'justify'}}>{this.text}</p>
            </>
        );
    }
}
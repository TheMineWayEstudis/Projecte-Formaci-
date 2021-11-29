import IActivitySection from "./IActivitySection";

/**
 * Es fa servir per crear seccions de múltiples text
 */
export default class MultiTextSection implements IActivitySection {
    texts: IActivitySection[];

    constructor(texts: IActivitySection[]) {
        this.texts = texts;
    }

    get(): any {
        return this.texts.map((text: IActivitySection) => text.get())
    }
}
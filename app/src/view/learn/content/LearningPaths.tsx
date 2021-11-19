import Activities from "./Activities";
import Activity from "./Activity";

export default class LearningPaths {
    static get values(): {[id: string]: {name: string, activities: Activity[], progress: number}} {
        return {
            'F1': {
                name: "Instal·lació de WordPress",
                activities: Activities.F1Activities,
                progress: this.getProgress('F1'),
            },
        }
    }

    static getProgress(learningPathId: string): number {
        return 0;
    }
}
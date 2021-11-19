import CookiesService from "../../../services/cookies_service";
import Activities from "./Activities";
import Activity from "./Activity";

export default class LearningPaths {
    static get values(): {[id: string]: {name: string, activities: Activity[], progress: number}} {
        return {
            'F1': {
                name: "Instal·lació de WordPress",
                activities: Activities.F1Activities,
                progress: Math.floor((this.getProgress('F1') * 100) / Activities.F1Activities.length),
            },
        }
    }

    static getProgress(learningPathId: string): number {
        return CookiesService.get(`LearningPath_${learningPathId}`, 0) as number;
    }

    static updateProgress(learningPathId: string, set: number, bypass?: boolean): number {
        const progress: number = CookiesService.get(`LearningPath_${learningPathId}`, 0) as number;
        if(progress >= set && !bypass) return progress;

        return CookiesService.setOrUpdate(`LearningPath_${learningPathId}`, set) as number;
    }
}
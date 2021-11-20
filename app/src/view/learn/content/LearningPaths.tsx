import CookiesService from "../../../services/cookies_service";
import Activities from "./Activities";
import Activity from "./Activity";

export default class LearningPaths {
    static get values(): {[id: string]: {name: string, activities: Activity[], progress: number}} {
        return {
            'DINAHOSTING_SETUP': {
                name: "Instal·lar WordPress mitjançant Dinahosting",
                activities: Activities.DINAHOSTING_SETUP_Activities,
                progress: Math.floor((this.getProgress('DINAHOSTING_SETUP') * 100) / Activities.DINAHOSTING_SETUP_Activities.length),
            },
            'F1': {
                name: "Instal·lació de WordPress",
                activities: Activities.F1_Activities,
                progress: Math.floor((this.getProgress('F1') * 100) / Activities.F1_Activities.length),
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
import CookiesService from "../../../services/cookies_service";
import Activities from "./Activities";
import Activity from "./Activity";

export default class LearningPaths {
    static get values(): {[id: string]: {name: string, activities: Activity[], progress: number}} {
        return {
            'DINAHOSTING_SETUP': {
                name: "Instal·lar WordPress mitjançant Dinahosting",
                activities: Activities.DINAHOSTING_SETUP_Activities,
                progress: this.getPercentProgress(this.getProgress('DINAHOSTING_SETUP'), Activities.DINAHOSTING_SETUP_Activities.length),
            },
            'FTP': {
                name: "Ús d'FTP",
                activities: Activities.FTP_Activities,
                progress: this.getPercentProgress(this.getProgress('FTP'), Activities.FTP_Activities.length),
            },
            'ADDITIONAL': {
                name: "Utilitats addicionals",
                activities: Activities.ADDITIONAL_Activities,
                progress: this.getPercentProgress(this.getProgress('ADDITIONAL'), Activities.ADDITIONAL_Activities.length),
            },
        }
    }

    static getProgress(learningPathId: string): number {
        return CookiesService.get(`LearningPath_${learningPathId}`, 0) as number;
    }

    static getPercentProgress(n: number, len: number): number {
        return Math.floor((n * 100) / len);
    }

    static updateProgress(learningPathId: string, set: number, bypass?: boolean): number {
        const progress: number = CookiesService.get(`LearningPath_${learningPathId}`, 0) as number;
        if(progress >= set && !bypass) return progress;

        return CookiesService.setOrUpdate(`LearningPath_${learningPathId}`, set) as number;
    }
}
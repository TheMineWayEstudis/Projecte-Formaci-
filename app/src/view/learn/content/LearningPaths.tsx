import CookiesService from "../../../services/cookies_service";
import Activities from "./Activities";
import Activity from "./Activity";

export default class LearningPaths {
    static get values(): {[id: string]: {name: string, activities: Activity[], progress: number}} {
        return {
            'DINAHOSTING_SETUP': {
                name: "Instal·lar WordPress",
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
            'WIDGETS': {
                name: "Ús de widgets",
                activities: Activities.WIDGETS_Activities,
                progress: this.getPercentProgress(this.getProgress('WIDGETS'), Activities.WIDGETS_Activities.length),
            },
            'PLUGINS': {
                name: "Ús de plugins",
                activities: Activities.PLUGINS_Activities,
                progress: this.getPercentProgress(this.getProgress('PLUGINS'), Activities.PLUGINS_Activities.length),
            },
            'CSS': {
                name: 'CSS',
                activities: Activities.CSS_Activities,
                progress: this.getPercentProgress(this.getProgress('CSS'), Activities.CSS_Activities.length),
            }
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
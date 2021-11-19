import { ActivityContent } from "./ActivityContent";
import Activities from "./Activities";
import LearningPaths from "./LearningPaths";

export default class Activity {
    content: ActivityContent;
    name: string;
    id: string;

    private static activities: Activity[] | null = null; // <-- Activitats ordenades
    private constructor(id: string, name: string, content: ActivityContent) {
        this.id = id;
        this.name = name;
        this.content = content;
    }

    // Crea una nova instància de la classe 'Activity' i l'emmagatzema a memoria amb l'índex 'id'
    static create(id: string, name: string, content: ActivityContent): Activity {
        return new Activity(id, name, content);
    }

    public static getActivities(learningPath: string): Activity[] {
        if (!this.activities) this.activities = LearningPaths.values[learningPath].activities;
        return this.activities;
    }
}
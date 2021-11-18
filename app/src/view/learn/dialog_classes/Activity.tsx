import { ActivityContent } from "./ActivityContent";

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
    private static create(id: string, name: string, content: ActivityContent): Activity {
        return new Activity(id, name, content);
    }

    // Crea totes les activitats
    private static createActivities(): Activity[] {
        return [
            Activity.create(
                'install-0',
                'Instal·lar WordPress',
                new ActivityContent(
                    'Instal·lació',
                    '...',
                ),
            ),
            Activity.create(
                'install-1',
                'Instal·lar WordPress P2',
                new ActivityContent(
                    'Instal·lació 2',
                    '...',
                ),
            ),
        ];
    }

    public static getActivities(): Activity[] {
        if (!this.activities) this.activities = this.createActivities();
        return this.activities;
    }
}
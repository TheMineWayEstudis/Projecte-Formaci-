import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";

export default class Activities {
    static get F1Activities(): Activity[] {
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
}
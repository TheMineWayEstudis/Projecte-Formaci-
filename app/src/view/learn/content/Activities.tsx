import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import TextSection from "./ActivityContent/TextSection";
import TextWithImageSection from "./ActivityContent/TextWithImageSection";

export default class Activities {
    static get F1Activities(): Activity[] {
        return [
            Activity.create(
                'install-0',
                'Primeres passes',
                new ActivityContent(
                    'Instal·lació del gestor de continguts',
                    'Començem realitzant la instal·lació del gestor de continguts des la web de Wapps.',
                    [
                        new TextSection(
                            '...',
                        ),
                    ],
                ),
            ),
            Activity.create(
                'install-1',
                'Servei FTP',
                new ActivityContent(
                    'Primeres passes amb el servei FTP',
                    'El servei FTP (File Transfer Protocol) permet realitzar transferencies de fitxers. En aquest cas ens pot servir per realitzar pujades al nostre servidor.',
                    [
                        new TextSection(
                            '...',
                        ),
                    ],
                ),
            ),
            Activity.create(
                'install-2',
                'Components de  WordPress',
                new ActivityContent(
                    'Primeres passes amb el servei FTP',
                    'El servei FTP (File Transfer Protocol) permet realitzar transferencies de fitxers. En aquest cas ens pot servir per realitzar pujades al nostre servidor.',
                    [
                        new TextSection(
                            '...',
                        ),
                    ],
                ),
            ),
        ];
    }
}
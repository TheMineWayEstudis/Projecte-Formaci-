import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import ImageMediaSection from "./ActivityContent/Media/ImageMediaSection";
import TextSection from "./ActivityContent/TextSection";
import TextWithMediaSection from "./ActivityContent/TextWithMediaSection";

export default class Activities {
    static get F1Activities(): Activity[] {
        return [
            Activity.create(
                'install-0',
                'Primeres passes',
                new ActivityContent(
                    'Instal·lació del gestor de continguts',
                    'En aquest mòdul aprendrem a instal·lar el gestor de continguts partint de zero.',
                    [
                        new TextWithMediaSection(
                            new TextSection(
                                'Prim',
                            ),
                            new ImageMediaSection(
                                '',
                            ),
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
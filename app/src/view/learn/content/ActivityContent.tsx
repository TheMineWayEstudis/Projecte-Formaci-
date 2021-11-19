export class ActivityContent {
    title: string;
    description: string;
    video?: string;
    
    constructor(title: string, description: string, video?: string) {
        this.title = title;
        this.description = description;
        this.video = video;
    }

    // Retorna l'activitat
    getActivity(): any {
        return (
            <>
                <h3>{this.title}</h3>
                <p>{this.description}</p>
            </>
        );
    }
}
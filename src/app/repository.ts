export class Repository {
    name: string;
    html_url: string;
    description: string;
    constructor(name: string, html_url:string, description:string){
        this.name = name;
        this.html_url = html_url;
        this.description = description;
    }
}

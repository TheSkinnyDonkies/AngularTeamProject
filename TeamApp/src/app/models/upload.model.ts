export class Upload {
    $key: string;
    name: string;
    file: File;
    url: string;
    progress: number;
    createdOn: any = new Date();

    constructor(currentFile: File) {
        this.file = currentFile ;
    }
}

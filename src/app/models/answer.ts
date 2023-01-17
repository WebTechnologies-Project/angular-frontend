export class Answer {
    id: number;
    content: string;
    fieldID: number;

    constructor( fieldId: number, content: string) {
        this.fieldID = fieldId;
        this.content = content;
    }
    
}
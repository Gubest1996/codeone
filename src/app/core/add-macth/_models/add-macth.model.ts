export class AddMacth {
    competition: string;
    body: number;
    dateClose: Date;
    statusOfColse: boolean;

    clear() {
        this.competition = '';
        this.body = undefined;
        this.dateClose = undefined;
        this.statusOfColse = false;
    }
}

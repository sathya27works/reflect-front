export class Report {
    reportsData: reportsData[] = [];
    constructor() {
        this.reportsData.push(new reportsData());
    }
}

export class reportsData {
    userName: string;
    questionNo: number;
    question: string;
    selectedAnswer: string;
    userScore: number;
  static map: any;
}
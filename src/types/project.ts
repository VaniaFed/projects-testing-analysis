export interface Project {
    id: string;
    name: string;
    programmingLanguage: string;
    numberOfLinesOfCode: string;
    coveragePercent: string;
    numberOfBugs: number;
    dateLastUpdate: string;
    dateLastChange: string;
    status: 'passed' | 'failed';
}

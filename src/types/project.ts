export interface Project {
    id: string;
    name: string;
    programmingLanguage: string;
    numberOfLinesOfCode: number;
    classChangesPercent: number;
    coveragePercent: number;
    numberOfBugs: number;
    dateLastUpdate: string;
    dateLastChange: string;
    status: 'passed' | 'failed' | 'in progress';
}

export class User {
    name1: string
    name2: string
    name3: string
    email: string
    projectIDList: Array<number>
    constructor(name1: string, name2: string, name3: string, email: string, projects: Array<number>) {
        this.name1 = name1
        this.name2 = name2
        this.name3 = name3
        this.email = email
        this.projectIDList = projects
    }
}
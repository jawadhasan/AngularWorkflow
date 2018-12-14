export class MilestoneStus{
    id: number;
    name: string;
}
export class Milestone{
    id: number;
    name: string;
    projectId: number;
    milestoneStatusId: number;
}

export class Project {
    id: number;
    name: string;
    milestones: Milestone[];

    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
        this.milestones = new Array<Milestone>();
    }
}


export class UserProfile{
    id: string;
    firstName: string;
    lastName: string;
    userPermissions: UserPermission[];
}

export class UserPermission{
    userProfileId: string;
    projectId: number;
    value: string;
}
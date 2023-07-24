export interface member {
    id:number;
    name:string;
    kfu_id:string;
    section:string;
    role:string; 

}
export interface section{
    title:string;
    mission:string;
    leader:string; 
}

export interface page{
        title:string;
        path: string;
        icon:string;
}
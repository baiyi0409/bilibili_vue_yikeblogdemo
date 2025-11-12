//回复内容
export type ReplyData = {
    id:number;
    article?:{
        id:number;
        title:string;
    };
    user:{
        id:string|number;
        name:string;
        imgurl:string;
    };
    comment:string;
    moment:string;
    complaint?:number;
};
import { type ReplyData } from "../../utils/interface";

export type CommentProps={
    pageSize:number;
}

export type ReplyProps={
    content:ReplyData;
    isComment:boolean;
}
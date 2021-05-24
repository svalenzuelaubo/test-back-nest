import { DeleteResult } from "typeorm";

export class UsersDto {
    email: string;
    password: string;
    admin :boolean;
    DeleteResult: DeleteResult;   
}
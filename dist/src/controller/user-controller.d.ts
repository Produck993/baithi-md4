import { Request, Response } from "express";
declare class UserController {
    getAll(req: Request, res: Response): Promise<void>;
    getCreateUserForm: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    getUpdate: (req: Request, res: Response) => Promise<void>;
    postupdateUser: (req: Request, res: Response) => Promise<void>;
    sortBranch(req: Request, res: Response): Promise<void>;
    searchByName(req: Request, res: Response): Promise<void>;
    getDetail(req: Request, res: Response): Promise<void>;
}
declare const _default: UserController;
export default _default;

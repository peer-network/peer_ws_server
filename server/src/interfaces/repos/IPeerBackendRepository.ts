import { IClientErrorCases } from "../../../src/utils/errors/IClientErrorCases";
import { Result } from "../../../src/domain/Result";
import { Model } from "../../domain/Model";
import { CodeDescription } from "../../../src/utils/errors";

export interface IBackendRepository {
    getHelloData(): Promise<Model.HelloData>;
    getUserIdByToken(token : string): Promise<Result<Model.HelloData, CodeDescription>>;
}
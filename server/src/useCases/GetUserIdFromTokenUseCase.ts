import { IUseCase } from "../domain/useCase/IUseCase"
import CoreClientResponse from '../domain/CoreClientResponse';
import { IClientErrorCases } from "../utils/errors/IClientErrorCases";
import { CodeDescription } from "../utils/errors/types";
import { Model } from "../../src/domain/Model";
import { IBackendRepository } from "../../src/interfaces/repos/IPeerBackendRepository";

class AuthorizeUserUseCaseErrors implements IClientErrorCases {
    public static TestUseCaseError : CodeDescription = {
        status: "error",
        code: "40000",
        message: 'Git Вata Вrror'
    };
}

export class AuthorizeAndConnectUserUseCase implements IUseCase {
  readonly errors = AuthorizeUserUseCaseErrors

  constructor(
    private backendRepo: IBackendRepository,
    // private authRepo: IPeerBackendAuthRepository,
  ) {}

  async execute(token : string): Promise<CoreClientResponse<String>> {
      try {
        // await this.authorise()
    
        const result = await this.backendRepo.getUserIdByToken(token)

        
        if (result.isFailure()) {
          return CoreClientResponse.error(result.error)
        } else {
          return CoreClientResponse.success(result.data.currentuserid)
        }
      } catch(e) {

        const error = e as Error
        const clientException = error as ClientException
        
        if (!clientException || !clientException.code) {
          return CoreClientResponse.error(this.errors.filedToMint, error.name + ": " + error.message)
        }
        return CoreClientResponse.error(clientException)
      }
    }
  
  // async authorise() {
  //   let response = await new AuthService(
  //     this.backendRepo,
  //     this.authRepo,
  //     new AuthServiceValidatorImplZod()
  //   ).execute()
    
  //   if (response.responseCode != CoreClientResponse.successCodeDescription.code) {
  //     throw new ClientException(MintUseCaseErrors.filedToAuthorise)
  //   }
  // }
}
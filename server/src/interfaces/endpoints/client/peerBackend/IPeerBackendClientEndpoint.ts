import { IClientErrorCases } from '../../../../../src/utils/errors/IClientErrorCases';
import { Result } from '../../../../../src/domain/Result';
import { Model } from '../../../../domain/Model'
import { CodeDescription } from '../../../../src/utils/errors';

export interface IPeerBackendClientEndpoint {
  getHello(): Promise<Model.HelloData>;
  validateAccessToken(token : String) :  Promise<Result<Model.HelloData, CodeDescription>>
}

export interface IPeerBackendClientAuthEndpoint {
  login(): Promise<Model.LoginData>;
}

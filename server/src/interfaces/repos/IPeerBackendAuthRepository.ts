import { Model } from '../../domain/Model';

export interface IPeerBackendAuthRepository {
    getTokenData(): Promise<Model.LoginData>
}
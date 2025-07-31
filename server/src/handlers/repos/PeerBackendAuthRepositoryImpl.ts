import { IPeerBackendAuthRepository } from "../../interfaces/repos/IPeerBackendAuthRepository";
import { IPeerBackendClientAuthEndpoint } from "../../interfaces/endpoints/client/peerBackend/IPeerBackendClientEndpoint";
import { Model } from '../../domain/Model';

export class PeerBackendAuthRepositoryImpl implements IPeerBackendAuthRepository {
    private peerBackendAuthEnpoint : IPeerBackendClientAuthEndpoint
    
    constructor(peerBackendAuthEnpoint : IPeerBackendClientAuthEndpoint) {
        this.peerBackendAuthEnpoint = peerBackendAuthEnpoint
    }
    async getTokenData(): Promise<Model.LoginData> {
        return await this.peerBackendAuthEnpoint.login()
    }
}
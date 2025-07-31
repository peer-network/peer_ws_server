import { IBackendRepository } from "../../interfaces/repos/IPeerBackendRepository";
import { Model } from "../../domain/Model";
import { IPeerBackendClientEndpoint, IPeerBackendClientAuthEndpoint } from "../../interfaces/endpoints/client/peerBackend/IPeerBackendClientEndpoint";
import PeerBackendClientAuthEndpointImpl from "../endpoint/client/PeerBackendAuth/PeerBackendClientAuthEndpointImpl";
import PeerBackendClientEndpointImpl from "../endpoint/client/PeerBackend/PeerBackendClientEndpointImpl";
import { Result } from "../../../src/domain/Result";
import { CodeDescription } from "../../../src/utils/errors";

export class PeerBackendRepositoryImpl implements IBackendRepository {
    private peerBackendEnpoint : IPeerBackendClientEndpoint
    private peerBackendAuthEnpoint : IPeerBackendClientAuthEndpoint
    
    constructor(
        peerBackendEnpoint : IPeerBackendClientEndpoint = new PeerBackendClientEndpointImpl(),
        peerBackendAuthEnpoint : PeerBackendClientAuthEndpointImpl = new PeerBackendClientAuthEndpointImpl(),
    ) {
        this.peerBackendEnpoint = peerBackendEnpoint
        this.peerBackendAuthEnpoint = peerBackendAuthEnpoint
    }
    async getHelloData(): Promise<Model.HelloData> {
        return await this.peerBackendEnpoint.getHello()
    }
        
    async getUserIdByToken(token : string): Promise<Result<Model.HelloData, CodeDescription>> {
        return await this.peerBackendEnpoint.validateAccessToken(token)
    }
}
import { IPeerBackendClientAuthEndpoint } from '../../../../interfaces/endpoints/client/peerBackend/IPeerBackendClientEndpoint'
import { Model } from '../../../../domain/Model';
import PeerBackendLogin from '../../../../utils/login'

export default class PeerBackendClientAuthEndpointImpl implements IPeerBackendClientAuthEndpoint {
    async login(): Promise<Model.LoginData> {
        const dto = await PeerBackendLogin.login()

        const entity = dto.toEntity()

        return entity
    }
}
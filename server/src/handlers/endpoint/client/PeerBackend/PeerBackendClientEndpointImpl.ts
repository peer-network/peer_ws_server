import { gql } from '../../../../../infrastructure/gql/generated-types/client/gql';
import { IPeerBackendClientEndpoint } from '../../../../interfaces/endpoints/client/peerBackend/IPeerBackendClientEndpoint'
import { HELLO_REQUREST, VERIFY_ACCESS_TOKEN_REQUREST}   from "../../../../../infrastructure/gql/queries/queries"
import { clientManager } from '../../../../app/api/client/client'
import { PeerBackendDTO } from './PeerBackendEndpointDTO';
import { Model } from '../../../../domain/Model';
import { ClientExceptionImpl } from '../../../../utils/errors/ClientException';
import { ClientErrorCases, IClientErrorCases } from '../../../../utils/errors/IClientErrorCases';
import { Result } from '../../../../../src/domain/Result';
import { CodeDescription } from '../../../../../src/utils/errors';
import { ClientException } from '../../../../../src/utils/errors/IClientException';
import CoreClientResponse from '../../../../../src/domain/CoreClientResponse';

class PeerBackendClientEndpointErrors implements IClientErrorCases {
    public static GenericError : CodeDescription = {
        status: "error",
        code: "40000",
        message: 'Failed to verify token : data is NUll'
    };
}

export default class PeerBackendClientEndpointImpl implements IPeerBackendClientEndpoint {
    
    async getHello() : Promise<Model.HelloData> {
        const response = await clientManager.client.query({
            query: gql(HELLO_REQUREST),
            variables: {},
        });
        const dto = new PeerBackendDTO.HelloDTO(
            response.data.hello?.currentVersion,
            response.data.hello?.currentuserid,
            response.data.hello?.wikiLink,
        )
        const entity = dto.toEntity()

        return entity
    }

    async validateAccessToken(token : string) : Promise<Result<Model.HelloData, CodeDescription>> {
        const response = await clientManager.client.query({
            query: gql(VERIFY_ACCESS_TOKEN_REQUREST),
            variables: { token }
        });

        const responseData = response.data.verifyAccessToken

        console.log(response.data.verifyAccessToken)

        if (!responseData) {
            return Result.fail(PeerBackendClientEndpointErrors.GenericError)
        }

        try {
            const dto = new PeerBackendDTO.HelloDTO(
                response.data.verifyAccessToken?.currentVersion,
                response.data.verifyAccessToken?.currentuserid,
                response.data.verifyAccessToken?.wikiLink,
            )
            const entity = dto.toEntity()

            return Result.succeed(entity)
        } catch(e) {
        
            const error = e as Error
            const clientException = error as ClientException
            
            if (!clientException || !clientException.code) {
                return CoreClientResponse.error(this.errors.filedToMint, error.name + ": " + error.message)
            }
            return CoreClientResponse.error(clientException)
        }
        
        
    }
}
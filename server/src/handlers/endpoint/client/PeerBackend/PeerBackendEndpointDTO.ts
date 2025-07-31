import { HelloQuery } from '../../../../../infrastructure/gql/generated-types/client/graphql'
import { Model } from '../../../../domain/Model'

export namespace PeerBackendDTO {
    export class LoginDTO {
        constructor(
            public status : string,
            public ResponseCode : string,
            public accessToken : string | undefined,
            public refreshToken : string | undefined
        ) {}

        toEntity(): Model.LoginData {
            return new Model.LoginData(
                this.status,
                this.ResponseCode,
                this.accessToken,
                this.refreshToken
            )
        }
    }
      
    export class HelloDTO {
        public currentVersion: string;
        public currentuserid: string;
        public wikiLink: string;

    constructor(
        currentVersion: string | null | undefined,
        currentuserid: string | null | undefined,
        wikiLink: string | null | undefined
    ) {
        if (typeof currentVersion !== 'string') {
            throw new Error(`Invalid currentVersion: expected string, got ${typeof currentVersion}`);
        }

        if (typeof currentuserid !== 'string') {
            throw new Error(`Invalid currentuserid: expected string, got ${typeof currentuserid}`);
        }

        if (typeof wikiLink !== 'string') {
            throw new Error(`Invalid wikiLink: expected string, got ${typeof wikiLink}`);
        }

        this.currentVersion = currentVersion;
        this.currentuserid = currentuserid;
        this.wikiLink = wikiLink;
    }

        toEntity(): Model.HelloData {
            return new Model.HelloData(
                this.currentVersion,
                this.currentuserid,
                this.wikiLink
            );
        }
    }
}
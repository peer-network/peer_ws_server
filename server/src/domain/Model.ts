export namespace Model {
    export class LoginData {
        constructor(
            public status : string ,
            public ResponseCode : string,
            public accessToken : string | undefined,
            public refreshToken : string | undefined
        ) {}
    }
    
    export class HelloData {
        constructor(
            public currentVersion: string,
            public currentuserid: string| null | undefined,
            public wikiLink: string
        ) {}
        
    };

    export class UserToken {
        constructor(
            public userid : string,
            public walletid : string,
            public tokenAmount : number
        ){}
    }

    export enum DayFilterType {
        D0 = 'D0',
        D1 = 'D1',
        D2 = 'D2',
        D3 = 'D3',
        D4 = 'D4',
        D5 = 'D5',
        M0 = 'M0',
        W0 = 'W0',
        Y0 = 'Y0'
      }
}
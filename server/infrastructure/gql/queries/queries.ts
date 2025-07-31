export const HELLO_REQUREST = /* GraphQL */`
    query Hello {
        hello {
            currentuserid
            currentVersion
            wikiLink
            lastMergedPullRequestNumber
            companyAccountId
        }
    }

`

export const VERIFY_ACCESS_TOKEN_REQUREST = /* GraphQL */`
    query VerifyAccessToken($token: ID!) {
        verifyAccessToken(token: $token) {
            currentuserid
            currentVersion
            wikiLink
            lastMergedPullRequestNumber
            companyAccountId
        }
    }
`

import {Observable} from 'rxjs'
import {PackageType} from './package-type'
import {OwnerType} from './owner-type'

export interface PackagesClientParams {
  token: string
  packageOwner: string
  packageOwnerType?: OwnerType
  packageName: string
  packageType: PackageType
}

export interface DeleteVersionParams extends PackagesClientParams {
  versionId: number
}

export interface PackagesClient {
  deleteVersion(params: DeleteVersionParams): Observable<boolean>
}

// import {getOctokit} from '@actions/github'
// import {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'
//
// export async function getOwnerType(): Promise<RestEndpointMethodTypes["users"]["getByUsername"]["response"]> {
//
//   const octokit = getOctokit('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')
//
//   return octokit.rest.users.getByUsername({
//     username: 'trent-j'
//   })
// }
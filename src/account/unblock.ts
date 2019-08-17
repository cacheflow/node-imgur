import { Client } from '../client';
import {
  ImgurApiResponse,
  AuthenticationRequiredResponse
} from '../responses';
import createUnblockUrl from '../helpers/createUnblockUrl';



export default async function unblock(
  client: Client,
  username: string,
): Promise<ImgurApiResponse | AuthenticationRequiredResponse> {

  return client.delete(`${createUnblockUrl(username)}`);
}


import { ACCOUNT_URI } from '../endpoints';

/**
 * Accepts username and albumHash of album to
 * be deleted and returns the constructed album deleted URL endpoint
 *
 * @param username
 * @param albumHash
 * @returns https://api.imgur.com/3/account/{{username}}/album/{{albumHash}}

 */

const createAlbumDeletionUrl = (username: string, albumHash: string) => {
  return `${ACCOUNT_URI}/${username}/album/${albumHash}`;
}

export default createAlbumDeletionUrl;

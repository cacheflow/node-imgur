import { Client } from '../client';
import { GET_IMAGE_URI } from '../endpoints';

export function getImage(client: Client) {
  return client.get(GET_IMAGE_URI);
}

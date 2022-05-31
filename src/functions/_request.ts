import fetch from 'node-fetch';

export default async function _request(url:string) {
  const response = await fetch(url);
  const body = JSON.parse(await response.text());

  return body;
}
import crypto from "crypto-js";
export const getHash = (id, data, prev) => {
  let combineData = data + prev + id;
  let hashDigest = crypto.SHA256(combineData);
  let crypticElements = getCrypticElements(hashDigest);
  console.log(crypticElements.hash + " " + crypticElements.nonce);
  return crypticElements;
};

const getCrypticElements = (hashDigest) => {
  let nonce = 1234;
  let hmacDigest = crypto.HmacSHA512(hashDigest, "" + nonce);
  let hash = crypto.enc.Base64.stringify(hmacDigest);
  return { hash: hash, nonce: nonce };
};

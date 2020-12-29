import crypto from "crypto-js";
export const getHashElements = (id, data, prev) => {
  let hash = "ee";
  let nonce = 1;
  do {
    hash = getHash(data, nonce, prev, id);
    nonce++;
  } while (!hash.startsWith("0000"));
  return { hash: hash, nonce: nonce };
};

export const getHash = (data, nonce, prev, id) => {
  let combineData = data + nonce + prev + id;
  let hashDigest = crypto.SHA256(combineData);
  let hash = crypto.enc.Hex.stringify(hashDigest);
  return hash;
};

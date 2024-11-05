// bob.js
const crypto = require("crypto");

const receivedMessage = "I want some apples";
const receivedSignature = "982fe429161b530e25d7fd55af4aefbe7e4d09f1e8a7a447371600547a0dad629d80f3b0d5e940b4eaa66d48cd996569ca5964506a47c6f448b74ca11ab7d6237fd087bc4f3e4c24dca50652b32bd4a4939be33a11b4c4f0176810e34fd3ea7c69ec0d2d66adead9a5e5c2df4b90f412578524f06234f59519209e8fa5db1d1b605f9a97327c2bc413f3edbfb6e36fdd9a71e6aef4d246d0c9405519d444f2dd6dec7751de7e6a4763f72e9f1db84532363d973c74be89673e6cc485353360ef327c56c1bfcb5bd242eb68c5690c4d8b7441dcf38ae8a4b51909ea0054afad5473c7fef556b514a6124bd762273ca1171531f70c637cb43c516f61bb1ed1f441"; // Replace with actual signature from alice.js
const alicePublicKeyPem = 
`-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA2hXXG8s6IzQVEPUaGzZMn3WdMjnEiMOk/LlxZ/y5K37Dnpao6AoC
x4fMfAStthkQkJqqSmcrjzfbByQTrNGDu1nj5+xNjgujpsFygOnXbxoOsW8qF7JM
HgGF0PDOp1NJWKi7ftojRWZfZcbNfcUiqjUn7ggrPBMaA413BDElZrqC4BdVcoUe
oqRfSy/MwxVF2ujN4sUe2VH5EIpkvt+CYNWuKN78Zd3hbU26cLpBvC73pcIqKouZ
RvFrf9F9R2G9YmkauOgWnwA0J9bgNPXRegS2SjlR4E8KaxdhwEMlPY/6cL8XSQVq
k3Jm/vcOo9mEdilY0xjUSbcdkBLi+2i+8wIDAQAB
-----END RSA PUBLIC KEY-----`;

const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

const verifier = crypto.createVerify("sha256");
verifier.update(receivedMessage);
verifier.end();
const isVerified = verifier.verify(alicePublicKey, receivedSignature, "hex");

console.log("Signature Verification:", isVerified);
console.log("Message:", receivedMessage);

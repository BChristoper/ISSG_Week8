
const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
});

const message = "I want some apples";

const signer = crypto.createSign("sha256");
signer.update(message);
signer.end();
const signature = signer.sign(privateKey, "hex");

console.log("Signature:", signature);
console.log("Message:", message);
console.log("Public Key (PEM):", publicKey.export({ type: "pkcs1", format: "pem" }));

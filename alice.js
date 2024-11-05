const crypto = require('crypto');



const alicePrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEettVUcOKbRT7
lpvCzePreW4g+NR+AwruXXmx23J57u/wU0DSYsJRm3AgQUja8IDciwCmmMZPzFUK
Kp1JXmFPztONvJIsanTajPKVVOVfYhK12bndEBNekPsaXP0nAkuNQWVIeZ4Sfd21
coikN6MWuhGxkjnv0GKDCSe763lzULCRzXk4PabE85Qts1Ahvn/qbLTJbViRuHPh
JLyqhh4lqSd+2atTwl6iMuFCzaC4ELTJtNx3JHCoGjhI21G8woQ4zhdv/y3rMU2e
/aUTBqDtprjW2UkjK5I4yAq6drdcCHe2LdN+0HuDTE2yBgcDV+oBVsqdBhXqOd2V
E5dgwwanAgMBAAECggEAALBKvxu1J9gmOy2CqHLVSivkrwWAPsLSK0mB/C9M0VDJ
+X/2ABn4ti8clcuOYeoQeyiaw3q3zNIABRpm7uz/dVEM9itQVD4frVM4itc/bvXZ
vLzUuHAhr6XdcD23ZQdOh+Ic5N1vdUwiPOXeXoj6L6gbGMUhu9pX0tkmd2bY+znH
5s4/xuQ0EDTO6vD8DOWL+eQ1ga+iGTr6i9aUITi0it8qJVrNQj2YpvPSvTUQDgum
l+F7obcq0tw91vEolHD+x0t+VBRkDu7XdgrqWMSXurGGx5oK9jIpaKHR1K8C7tYV
y+xYHIm8uFNaVsvYzgvmheSlPPIRWM8SVQ3xB0PY7QKBgQDnA47CHXUBWsYuF9c1
NcFG55sSd1blgbfLtA3iUMGq4O1828FEkv6xahqeepK6LLEnFSijtxiO1ASr2sFD
NHdqHFLjRilz755HjxEGOz7IToNh6IeObtfk8osiU7MgXG9/MB8aqUTSbmFgr+Pm
3SzUFIHx5eTCvKTa8inm0DqrnQKBgQDZuxpKZV2X6ygFvM8TJCm4sJXmMvLqBRsY
uLVCOL0/BjOtn+vq/x1m1wyt9nrNrpXJS7M3FIbEfIYAWyhMRpDY7JbROdy0m0gi
1XB6Mcm+ckXrPTNYI8Acux33VP8V4u9OxsOtfHFns8ODE4j+DYguHeeJCe5KELIq
D35+hDBSEwKBgE+UOilEXHoK+xoFvGzoB5yVTCYgVh7ZgKb7b4z2pMBom2bXjMxC
ltom4uSU9NaNbrk34LgE6sDI6JMK2Gh+OmSjPSptkPoPIUclUYgEAKyf30JrB8dZ
B6Ympyc8DginzwDRYuWcScjznTfhX3C34ClupxTdTOCIe4Gwyh5ovM1BAoGBAIKC
H0Emv1IXd3bw9KKBk6yL1F4Wffp+Mv6/gI6AGheT7RgOesfyQTpqfsQrsPJmyovN
H1BNsnZGOcAu49nMlnggYEprR3rOdQ/EJlZoT4gjUPuvRH55d2cBVfXx8bC5xT3P
8Gyl4ggJ/ZAs/nlhvRX/gNBornegyFpjzSuiqqAXAoGBANWSWMBJB+mz3558NSgp
FX1TaXDBhoePMpP1Uy+1Gc8XxdXN8g3lQtgy875tUV0ZAcYSJBCRIALpW7WltKVE
6dXi1eYHV6i24VyEgVD+DRduI2Yyz2xmVsXK+/ofPyc5WODHMkUcG3M+WxqWOLoH
vk+1Dlrbv5xDaSGN4l30pdLJ
-----END PRIVATE KEY-----`;

const bobPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuwRJdXa1Jd8oHlJahV2C
wiHFEJdfgI5Z/0PdN5HGOSLlZCr0+ZTN1LGTrMtQwHgLKL7USOitdjVayXJkXVs6
/Mc5qsJHDB22HWQ8e57IiflOjIelZuRs/24Oj06oiTvbb5xZFCgmkXsSrWU3G5EW
0C7fZzx2tI2PrbZ7bXli6Ng0IqBtcEwpFmfJYFX1oOyiJy1uhZOvnGxtA3H6UABG
7MLs/1Xk75rRT07ZlZS3EbM6DjLPq5XpM6zcabM67dBfC0tc/a5rxeIm2CTomoMW
wQAKCZ05qgjNRuQX/GJWyJUoCozH7xI3gmAt5EfB7y20sDIMqYeQyh+xAtm/7YEe
kQIDAQAB
-----END PUBLIC KEY-----`;

const message = "I want some apples";  

const sign = crypto.createSign('SHA256');  
sign.update(message);  
sign.end();  
const signature = sign.sign(alicePrivateKey, 'hex'); 

const encryptedMessage = crypto.publicEncrypt(bobPublicKey, Buffer.from(message)).toString('hex');  

console.log("Signature:", signature);
console.log("Message:", encryptedMessage);

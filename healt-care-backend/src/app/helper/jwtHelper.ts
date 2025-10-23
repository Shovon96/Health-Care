import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const generateToken = (payload: { email: string, role: string }, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn } as SignOptions);
    return token;
}

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload
}

export const JwtHelper = {
    generateToken,
    verifyToken
}
import { UserStatus } from "@prisma/client";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs";
import { JwtHelper } from "../../helper/jwtHelper";
import config from "../../../config";

const loginUser = async (payload: { email: string, password: string }) => {

    const user = await prisma.user.findUniqueOrThrow({
        where: { email: payload.email, status: UserStatus.ACTIVE }
    });

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new Error('Incorrect password');
    }

    const accessToken = JwtHelper.generateToken({
        email: user.email,
        role: user.role
    }, config.jwt_secret as string, config.accesstoken_expires_in as string);

    const refreshToken = JwtHelper.generateToken({
        email: user.email,
        role: user.role
    }, config.jwt_secret as string, config.refreshtoken_expires_in as string);

    const { password, ...userWithoutPassword } = user;

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange,
        user: userWithoutPassword
    }}


export const AuthService = {
    loginUser
}  
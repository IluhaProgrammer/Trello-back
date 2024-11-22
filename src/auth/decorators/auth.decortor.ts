import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../guards/guard.jwt";

export const Auth = () => UseGuards(JwtAuthGuard)
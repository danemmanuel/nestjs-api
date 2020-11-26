import { MiddlewareConsumer, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { authUserSchema } from '../../users/joi/auth-user.joi';
import { valid } from 'joi';

export const bodyValidatorMiddleware: MiddlewareConsumer =
  // tslint:disable-next-line:ban-types
  async (req: Request, res: Response, next: Function) => {
    const result = valid(req.body, authUserSchema);

    if (result.error) {
      const errorMessage = result.error.name;
      const message: string = errorMessage.replace(/["]/g, '');

      return next(new BadRequestException(`Validation failed: ${message}`));
    }

    next();
  };

import { Request, Response } from 'express';
import { confirmUserError, getErrorMessage } from '../../helper';
import userServices from '../../models/user';
import { IUser } from '../../types/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response) => {
  try {
    const user = req.body as Pick<IUser, "username" | "password">
    const foundUser = await userServices.findOne({ username: user.username });
    if (!foundUser) {
      return res.status(400).send({message:'Username is not correct', status: 401});
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (!isMatch) {
      return res.status(401).send({message:'Password is not correct', status: 401});
    }
    const token = jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.username }, process.env.SECRET_KEY || '', {
      expiresIn: '1 days',
    });
    res.status(200).send({ user: { _id: foundUser._id?.toString(), name: foundUser.username }, token });
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const register = async (req: Request, res: Response) => {
  const user = req.body as Pick<IUser, "username" | "password">
  if (confirmUserError(user, res)) {
    return
  }
  const foundUser = await userServices.findOne({ username: user.username });
    if (foundUser) {
      return res.status(401).send({message:"Username already exist", status: 401});
    
    }
  try {
    await userServices.create(req.body);
    res.status(200).send({message:'Registration successful', user});
  } catch (error: any) {
    return res.status(500).send({message:getErrorMessage(error.message), status: 500});
  }
}
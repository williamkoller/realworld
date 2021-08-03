import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';
import { CreateUser } from '@/core/types/user';
import { register, OutsideRegister } from './register';

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso.`;
};

const data: CreateUser = {
  username: 'William Koller',
  email: 'williamkoller404@gmail.com',
  password: 'william123!',
};

it('Deveria cadastrar um usuário com sucesso', async () => {
  return pipe(
    data,
    register(registerOk),
    TE.map((result) =>
      expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso.`),
    ),
  )();
});

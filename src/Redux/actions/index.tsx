import { UserType } from '../../helpers/types';

export const LOGINUSER = 'LOGINUSER';

export const loginUser = ({  id, imie, isAdmin, isLekarz, isPacjent, login, miasto, nazwisko, password, pesel }: UserType) => ({
    type: LOGINUSER,
    payload: {
        id,
        imie,
        isAdmin,
        isLekarz,
        isPacjent,
        login,
        miasto,
        nazwisko,
        password,
        pesel
    }
});


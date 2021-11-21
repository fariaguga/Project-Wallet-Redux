export const USER_LOGIN = 'USER_LOGIN';

export function emailToStore(email) {
  return {
    type: USER_LOGIN,
    payload: {
      email,
    },
  };
}

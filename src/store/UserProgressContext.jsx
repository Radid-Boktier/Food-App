import { createContext, useReducer } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

function userProgressReducer(state, action) {
  if (action.type === 'Show-Card') {
    return { ...state, progress: 'cart' };
  }
  if (action.type === 'Hide-Card') {
    return { ...state, progress: '' };
  }
  if (action.type === 'Show-Checkout') {
    return { ...state, progress: 'checkout' };
  }
  if (action.type === 'Hide-Checkout') {
    return { ...state, progress: '' };
  }
  return state;
}

export function UserProgressContextProvider({ children }) {
  const [userProgress, dispatcUserAction] = useReducer(userProgressReducer, {
    progress: '',
  });

  function showCart() {
    dispatcUserAction({ type: 'Show-Card' });
  }
  function hideCart() {
    dispatcUserAction({ type: 'Hide-Card' });
  }
  function showCheckout() {
    dispatcUserAction({ type: 'Show-Checkout' });
  }
  function hideCheckout() {
    dispatcUserAction({ type: 'Hide-Checkout' });
  }

  const userProgressContext = {
    progress: userProgress.progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext value={userProgressContext}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;

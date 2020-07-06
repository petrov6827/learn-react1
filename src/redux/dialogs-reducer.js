const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  messages: [
    { id: 1, message: 'Привет пошли на футбол' },
    { id: 2, message: 'Ты где был?' },
    { id: 3, message: 'Занятия отменяются' },
    { id: 4, message: 'Скидываемся по 200 руб' },
  ],
  dialogs: [
    { id: 1, name: 'Алексей Бокс' },
    { id: 2, name: 'Антон Футбол' },
    { id: 3, name: 'Наташка Плавание' },
    { id: 4, name: 'Миша Парашют' },
    { id: 5, name: 'Андрей ' },
    { id: 6, name: 'Борис борцуха' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_POST_TEXT,
  body: body,
});

export default dialogsReducer;

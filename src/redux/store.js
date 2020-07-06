import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
        { id: 2, message: "It's my second post", likesCount: '5' },
        { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
      ],
      newPostText: '123',
    },

    dialogsPage: {
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
      newMessageBody: '',
    },
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

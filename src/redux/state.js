import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            postsData: [
                {id: 1, message: "I think it's great!", likesCount: 35},
                {id: 2, message: "Hi! how are you?", likesCount: 27},
                {id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27},
                {id: 4, message: "Today is sunny", likesCount: 27},
                {id: 5, message: "I think, I have wil great anything.", likesCount: 27},
                {id: 6, message: "Hi! how are you?", likesCount: 27},
                {id: 7, message: "It's my first postaret", likesCount: 58}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData:[
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your ReacT!"},
                {id: 3, message: "You!"}
            ],
            dialogsData: [
                {id: 1, name: "John"},
                {id: 2, name: "Kate"},
                {id: 3, name: "Margaret"},
                {id: 4, name: "Ken"},
                {id: 5, name: "Buch"},
                {id: 6, name: "Jack"},
                {id: 7, name: "Rosa"}
            ],
            newMessageText: ''
        },
        sidebar:{
            bestfriends:[
                {id:1, name: "John", img: 'https://pbs.twimg.com/profile_images/438132278318071808/qIJjSA3h.jpeg'},
                {id:2, name: "Margaret", img: 'https://yt3.ggpht.com/a/AGF-l78BBd8rWUJ6QL5hINMuCK-A_lbuuC4pYCjBzQ=s900-c-k-c0xffffffff-no-rj-mo'},
                {id:3, name: "Shon", img: 'https://irs3.4sqi.net/img/general/original/40701818_TB6Ybm5jjWuRNjoyakIqTZPWQ6wf7WfngTUwyn2Vn3U.jpg'}
            ]
        }
    },
    _rerenderTree() {
        console.log('Observer undefined');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderTree = observer;;  // observer - наблюдатель, паттерн
    },
    
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._rerenderTree(this._state);
    }
}


window.store = store;


export default store;
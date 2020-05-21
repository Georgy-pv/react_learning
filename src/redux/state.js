let rerenderTree = () => {
    console.log('State was change')
}

let state = {
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
        newPostText: 'it-samurai'
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
        ]
    },
    sidebar:{
        bestfriends:[
            {id:1, name: "John", img: 'https://pbs.twimg.com/profile_images/438132278318071808/qIJjSA3h.jpeg'},
            {id:2, name: "Margaret", img: 'https://yt3.ggpht.com/a/AGF-l78BBd8rWUJ6QL5hINMuCK-A_lbuuC4pYCjBzQ=s900-c-k-c0xffffffff-no-rj-mo'},
            {id:3, name: "Shon", img: 'https://irs3.4sqi.net/img/general/original/40701818_TB6Ybm5jjWuRNjoyakIqTZPWQ6wf7WfngTUwyn2Vn3U.jpg'}
        ]
    }
};

window.state=state;

export let addPost = () =>{
    let newPost = {id:8, message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText='';
    rerenderTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}

export const subs = (observer) =>{
    rerenderTree = observer;  // observer - наблюдатель, паттерн
}

export default state;
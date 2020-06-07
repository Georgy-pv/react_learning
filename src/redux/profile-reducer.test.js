import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: "I think it's great!", likesCount: 35},
        {id: 2, message: "Hi! how are you?", likesCount: 27},
        {id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27},
        {id: 4, message: "Today is sunny", likesCount: 27},
        {id: 5, message: "I think, I have wil great anything.", likesCount: 27},
        {id: 6, message: "Hi! how are you?", likesCount: 27},
        {id: 7, message: "It's my first postaret", likesCount: 58}
    ]
};

test('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('REACT');
    
    //2. action
    let newState = profileReducer(state, action);
    
    //3. expectation
    expect(newState.postsData.length).toBe(8) 
  }); 

test('new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('REACT');
    
    //2. action
    let newState = profileReducer(state, action);
    
    //3. expectation
    expect(newState.postsData[7].message).toBe('REACT') 
  }); 

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    
    //2. action
    let newState = profileReducer(state, action);

     //3. expectation
     expect(newState.postsData.length).toBe(6) 
  }); 

test("after deleting length of messages shouldn't be decrement if Id incorrect", () => {
    // 1. test data
    let action = deletePost(1000);
    
    //2. action
    let newState = profileReducer(state, action);

     //3. expectation
     expect(newState.postsData.length).toBe(7) 
  }); 
  


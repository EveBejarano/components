import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return(
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        textComment="Nice blog fam" 
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 3:00PM" 
        textComment="Nice blog dude" 
        avatarImg={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Frank" 
        timeAgo="Today at 2:00AM" 
        textComment="Nice blog bro" 
        avatarImg={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));




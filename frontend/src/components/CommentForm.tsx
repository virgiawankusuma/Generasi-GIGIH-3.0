import { useState } from 'react';

interface ICommentFormProps {
  onAddComment: ({ username, comment }: { username: string, comment: string }) => void;
}

export default function CommentForm({ onAddComment }: ICommentFormProps) {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  function onUsernameChangeEventHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function onCommentChangeEventHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function onSubmitEventHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username || !comment) {
      alert('Please fill out the form');
      return;
    }

    onAddComment({ 
      username,
      comment,
    });

    setUsername('');
    setComment('');

    alert('Comment added');
  }

  return(
    <form 
      className="flex flex-col gap-y-2"
      onSubmit={(e) => onSubmitEventHandler(e)}
    >
      <input
        className="bg-white/10 rounded-md p-2"
        placeholder="Username"
        value={username}
        onChange={(e) => onUsernameChangeEventHandler(e)}
      />
      <textarea
        className="bg-white/10 rounded-md p-2"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => onCommentChangeEventHandler(e)}
      />
      <button
        className="bg-primary text-white/90 rounded-md p-2 hover:bg-accent transition-all duration-200"
        type="submit"
      >
        Add Comment
      </button>
    </form>
  )
}
import { ICommentProps } from '../types/commentProps';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

interface IVideoDetailCommentsProps {
  comments: ICommentProps[];
  onAddComment: ({ username, comment }: { username: string, comment: string }) => void;
}

export default function VideoDetailComments({ comments, onAddComment }: IVideoDetailCommentsProps) {
  return (
    <section className="container xl:px-4 my-5">
      <div className="rounded-lg bg-gradient-to-b from-black/30 to-black/50 p-4">
        <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">Comments</h2>
        <CommentForm 
          onAddComment={onAddComment}
        />
        <div className="flex flex-wrap mt-8 max-h-96 overflow-y-auto hide-scroll-bar gap-y-3">
          {
            comments
            .sort((a, b) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime())
            .map(comment => (
              <CommentCard 
                key={comment._id} 
                comment={comment} 
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
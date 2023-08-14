import { ICommentProps } from '../types/commentProps';
import CommentCard from './CommentCard';

export default function VideoDetailComments({ comments }: { comments: ICommentProps[] }) {
  return (
    <section className="container xl:px-4 my-5">
      <div className="rounded-lg bg-gradient-to-b from-black/30 to-black/50 p-4">
        <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">Comments</h2>
        <div className="flex flex-wrap">
          {
            comments.map((comment) => (
              <CommentCard key={comment._id} comment={comment} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
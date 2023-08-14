import { FaUser } from 'react-icons/fa';
import { ICommentProps } from '../types/commentProps';

export default function CommentCard({ comment }: { comment: ICommentProps }) {
  return (
    <div className="flex bg-white/10 p-3 rounded-md w-full gap-x-3 items-center mb-3">
      <FaUser className="text-3xl text-white bg-accent rounded-full p-1"/>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-x-1 items-center">
          <h3 className="text-white text-sm sm:text-base font-semibold">{comment.Username}</h3>
          ⋅
          <span className="text-white/60 text-xs sm:text-sm">{new Date(comment.Timestamp).toLocaleDateString()}</span>
        </div>
        <p className="text-white text-xs sm:text-sm">{comment.Comment}</p>
      </div>
    </div>
  );
}
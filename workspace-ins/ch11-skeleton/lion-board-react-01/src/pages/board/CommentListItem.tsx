import { Link } from "react-router";

function CommentListItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            className="w-8 mr-2 rounded-full"
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1767106161/user-apeach_ol8y1n.png"
            alt="어피치 프로필 이미지"
          />
          <Link to="" className="text-orange-400">어피치</Link>
        </div>
        <time className="text-gray-500" dateTime="2026.01.05 14:11:22">2026.01.05 14:11:22</time>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p className="whitespace-pre-wrap text-sm flex-1">아는 내용이구만...</p>
        <form action="#" className="inline ml-2">
          <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
        </form>
      </div>
    </div>
  );
}

export default CommentListItem;
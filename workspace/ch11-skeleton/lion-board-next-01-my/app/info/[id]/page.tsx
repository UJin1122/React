import Link from "next/link";
import Image from "next/image";

export default function InfoDetail({ params }: { params: { id: string } }) {
  return (
    <main className="flex-1 container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <form action="/info">
          <div className="font-semibold text-xl">제목 : React란?</div>
          <div className="text-right text-gray-400">
            <div>작성자 : 네오</div>
            <div>2026.01.03 14:00:00</div>
          </div>
          <div className="mb-4">
            <div>
              <p className="w-full p-2 whitespace-pre-wrap">React는 UI를 구성하기 위한 JavaScript 라이브러리로, 컴포넌트 기반 구조를 사용해 재사용성과 유지보수성이 뛰어납니다.<br />상태 관리와 가상 DOM을 통해 사용자와 빠르게 상호작용하는 동적 웹 앱을 만들 수 있습니다.</p>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Link href="/info" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</Link>
            <Link href={`/info/${params.id}/edit`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</Link>
            <button type="submit" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </div>
        </form>
      </section>

      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Image
                className="w-8 mr-2 rounded-full"
                src="https://res.cloudinary.com/ddedslqvv/image/upload/v1767106161/user-apeach_ol8y1n.png"
                width={32}
                height={32}
                alt="어피치 프로필 이미지"
              />
              <a href="" className="text-orange-400">어피치</a>
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

        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Image
                className="w-8 mr-2 rounded-full"
                src="https://res.cloudinary.com/ddedslqvv/image/upload/v1767106161/user-muzi_tapfzr.png"
                width={32}
                height={32}
                alt="네오 프로필 이미지"
              />
              <a href="" className="text-orange-400">네오</a>
            </div>
            <time className="text-gray-500" dateTime="2026.01.03 15:11:22">2026.01.03 15:11:22</time>
          </div>
          <div className="flex justify-between items-start mb-2">
            <p className="whitespace-pre-wrap text-sm flex-1">와~ 신세계네요...</p>
            <form action="#" className="inline ml-2">
              <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
            </form>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
          <form action="#">
            <div className="mb-4">
              <textarea
                rows={3}
                cols={40}
                className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="내용을 입력하세요."
                name="comment"></textarea>

              <p className="ml-2 mt-1 text-sm text-red-500">
                내용은 필수입니다.
              </p>

            </div>
            <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
          </form>
        </div>

      </section>

    </main>
  );
}

import Container from "@/components/_common/_Container";
import Contents from "@/components/contents/Contents";
import Text from "@/components/_common/_Text";
import ResultContainer from "@/components/sajuTable/ResultContainer";

export default function Home() {
  return (
    <Container>
      {/* 메인 첫번쨰 이미지 */}
      <Contents src="/img/contents-01.png" alt="제 1장 안내 이미지">
        <Text className="absolute left-[17%] bottom-[6%]" fz={16}>
          이제 본격적으로 <br />
          ㅇㅇ님의 사주팔자를
          <br />
          분석해볼 차례네요.
        </Text>
      </Contents>

      {/* 메인 두번째 이미지 */}
      <Contents src="/img/contents-02.png" alt="제 1장 로딩 이미지"></Contents>

      {/* 메인 세번째 이미지 */}
      <Contents
        className="-translate-y-[20%] z-10"
        src="/img/contents-03.png"
        alt="제 1장 결과 이미지"
      >
        <Text className="absolute left-[15.5%] top-[13%]" fz={16}>
          제가 ㅇㅇ님의 사주를
          <br />
          보기 쉽게 표로 정리했어요.
        </Text>
      </Contents>

      {/* 결과 표 */}
      <ResultContainer />
    </Container>
  );
}

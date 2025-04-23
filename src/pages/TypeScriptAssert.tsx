import React from 'react';

// assert 함수 정의 - 컴포넌트 외부에 작성
function assert(
  // Asserts 조건
  condition: unknown,
  // Asserts 조건에 해당하지 않을 경우, throw 할 에러
  // string을 넘기는 경우, `new Error()` 를 감싸서 throw 합니다.
  // @default new Error()
  error: Error | string = new Error(),
): asserts condition {
  if (!condition) {
    throw typeof error === 'string' ? new Error(error) : error;
  }
}

const TypeScriptAssert: React.FC = () => {
  // null이 가능한 accountId 상태 관리
  const [accountId, setAccountId] = React.useState<string | null>(null);

  const handleClick = () => {
    try {
      assert(accountId !== null, 'accountId가 null입니다!');
      // accountId가 null이 아닌 경우, 이 라인이 실행됨
      console.log('Account ID:', accountId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      TypeScript
      <div>
        <button onClick={() => setAccountId('user123')}>Set Account ID</button>
        <button onClick={() => setAccountId(null)}>Set Account ID to null</button>
        <button onClick={handleClick}>Check Account ID</button>
      </div>
      <div>현재 Account ID: {accountId || 'null'}</div>
    </div>
  );
};

export default TypeScriptAssert;

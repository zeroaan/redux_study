# redux_saga

<br />

### delay

- 설정된 시간 이후에 resolve하는 Promise객체를 리턴한다.
- 예시: delay(1000) → 1초 기다리기

<br />

### put

- 특정 액션을 dispatch하도록 한다.
- 예시: put({type: "ADD_NUMBER"}) → ADD_NUMBER action을 dispatch한다.

<br />

### takeEvery

- 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
- 예시: takeEvery(SET_NUMBER, changeSaga) → 들어오는 모든 SET_NUMBER 액션에 대해 changeSaga 함수가 실행된다.

<br />

### takeLatest

- 기존에 진행 중이던 작업이 있다면 취소 처리하고, 가장 마지막으로 실행된 작업만 수행한다.
- 예시: takeLatest(SET_NUMBER, changeSaga) → 만약 SET_NUMBER 액션이 클릭시 발생하는 액션이라면 여러 번 클릭했어도 마지막 한 번만 실행된다.

<br />

### call

- 동기적으로 실행되며 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수이다.
- 예시: call(addNumber, 4) → addNumber(4)와 같다.

<br />

### fork

- call과 다르게 비동기적으로 함수가 실행된다.
- 예시: fork(addNumber, 5) → addNumber(5)와 같다.

<br />

### all

- all 함수를 사용해서 제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve될때까지 기다린다.
- 예시: yield all([testSaga1(), testSaga2()]) → testSaga1()과 testSaga2()가 동시에 실행되고, 모두 resolve될 때까지 기다린다.

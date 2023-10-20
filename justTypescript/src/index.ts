abstract class Abs_Navigation {
  abstract el: Element | null; // 추상화 요소 (null이거나 요소임) 자식 클래스는 반드시 가지고 있어야 함.
  protected id: number; // 자손도 접근 가능한 id
  private _selector: string; // 선택자, 자식 class에서도 접근할 수 없다.

  constructor(selector: string) {
    // 생성자
    this._selector = selector; // selector 초기화
    this.id = Math.floor(Math.random() * 1000); // id 초기화
  }

  get selector(): string {
    // selector의 getter
    return this._selector;
  }

  set selector(value: string) {
    // selector의 setter
    this._selector = value;
    // selector는 외부에서 접근할 수 없으므로 selector에 의존하는 el도 같이 setter
    this.el = document.querySelector(value);
  }

  abstract active(index: number): void; // 추상화된 메서드, 자식 클래스는 반드시 이 함수를 포함해야함
}

class Navigation extends Abs_Navigation {
  el: Element | null = null; // 추상화 요소를 선언함. (null값으로 초기화)

  constructor(selector: string) {
    // 생성자 함수
    super(selector); // selector를 설정해 주기 위해서 보내줌.
    this.el = document.querySelector(selector); // el 정의
  }

  active(index: number): void {
    // 부모 클래스에서 추상화 된 메서드 정의
    console.log(`활성 인덱스: ${index}`);
  }
}

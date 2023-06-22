export interface PropsType {}
export interface StateType {}

export default class Component<P extends PropsType, S extends StateType> {
  target: Element; // 해당 컴포넌트가 들어갈 Element
  props: P;
  state: S;

  constructor(target: Element, props: P) {
    this.target = target;
    this.props = props;
    this.state = {} as S; // 빈 객체 할당
    this.setup(); // state 초기값 선언, api호출 등 렌더링 되기 전
    this.mount(); // 마운트
    this.setEvent(); // 이벤트 할당.
  } // 생성자
  setup() {} // 기본적인 선언 및 할당
  template() {
    return "";
  }
  /**
   * render : innerHTML에 작성한 템플릿을 넣어준다.
   */
  render() {
    const template = this.template();
    if (template) {
      this.target.innerHTML = template;
    }
  }
  /**
   * mount : render 호출 후 didMount 호출한다.
   */
  mount() {
    this.render();
    this.didMount();
  }
  /**
   * update : render 호출 후 didUpdate호출을 하게 된다.
   */
  update(): void {
    this.render();
    this.didUpdate();
  }

  // 생명주기 메서드
  didMount() {}
  didUpdate() {}

  /**
   * 변한 요소만 업데이트 하고 다른 요소들은 그대로 가져갈 수 있도록 nextState를 선언.
   * 그 후 상태가 정말 바뀌었다면 state를 바꿔주고, update를 호출하게 된다. 
   */
  setState(newState: Partial<S>) {
    const nextState = { ...this.state, ...newState };
    if (JSON.stringify(this.state) === JSON.stringify(newState)) {
      return;
    }
    this.state = nextState;
    this.update();
  } // state 업데이트

  //event 등록
  setEvent() {}
  addEvent() {}
}

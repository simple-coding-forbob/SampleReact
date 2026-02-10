const messages = {
  // TODO: 화면에 표시할 유효성 에러 메세지입니다.
  required: "필수 입력입니다.",
  number: "숫자로 입력해주세요",
  age: "최소 1살 이상입니다.",
  email: "유효한 이메일을 입력하세요",
  missMatch: "비밀번호가 일치하지 않습니다",
  minLength: (len: number) => `${len}자 이상 입력해주세요.`,

  // TODO: 일반 에러/성공메세지
  contactAdmin: "오류가 발생했습니다. 관리자에게 문의하세요",
  save: "저장되었습니다",
  update: "수정되었습니다",
  delete: "삭제되었습니다.",
};

export default messages;

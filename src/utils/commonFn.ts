import bcrypt from "bcryptjs";



// 비밀번호 검증 함수
async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

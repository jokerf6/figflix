export class validation {
  public validName(name: string) {
    if (name.length < 3) {
      return false;
    }
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  }
  public validEmail(email: string) {
    if (email.length < 8) {
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  public validPassword(password: string) {
    if (password.length < 8) {
      return false;
    }
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
  }
}

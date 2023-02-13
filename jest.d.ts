declare namespace jest {
  interface Matchers<R> {
    toCompile(emit: boolean = true): R;
    notToCompile(): R;
    toCompileAndBeEqualTo(expected): R;
  }
}
import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt(); // 테스트 케이스 개수
        sc.nextLine(); // 개행 문자 소비

        for (int i = 0; i < T; i++) {
            String str = sc.nextLine();
            System.out.println(isVPS(str));
        }
    }

    public static String isVPS(String str) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (ch == '(') {
                stack.push(ch);
            } else if (ch == ')') {
                if (stack.isEmpty()) {
                    return "NO"; // 닫는 괄호인데 짝이 없음
                } else {
                    stack.pop(); // 짝 맞는 여는 괄호 제거
                }
            }
        }

        // 스택이 비어 있으면 VPS
        return stack.isEmpty() ? "YES" : "NO";
    }
}
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int testCase = sc.nextInt();  // 테스트 케이스 개수
        sc.nextLine();  // 개행 문자 처리

        for (int i = 0; i < testCase; i++) {
            String quiz = sc.nextLine();  // OX 문자열
            int score = 0;
            int streak = 0;

            for (int j = 0; j < quiz.length(); j++) {
                if (quiz.charAt(j) == 'O') {
                    streak++;
                    score += streak;
                } else {
                    streak = 0;
                }
            }

            System.out.println(score);
        }
    }
}

import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        
        boolean[] students = new boolean[31];
        
        for (int i = 0; i < 28; i++) {
            int num = sc.nextInt();
            students[num] = true; // 제출한 사람
        }
        
        for (int i = 1; i <= 30; i++) {
            // false인 학생이 과제 제출 안함
            if (!students[i]) {
                System.out.println(i);
            }
        }
        
        sc.close();
    }
}
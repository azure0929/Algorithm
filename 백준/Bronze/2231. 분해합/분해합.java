// 완전탐색
// 자연수 N이 주어졌을 때, 그 수의 분해합 출력
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 입력된 수
        
        int result = 0; // 생성자
        
        for (int i = 0; i < N; i++) {
            int sum = i;
            int temp = i;
            
            // 각 자리수 더하기
            while (temp > 0) {
                sum += temp % 10;
                temp /= 10;
            }
            
            if (sum == N) {
                result = i;
                break; // 가장 작은 생성자 찾으면 멈춤
            }
        }
        
        System.out.println(result);
        sc.close();
    }
}
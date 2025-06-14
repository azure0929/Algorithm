import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] cards = new int[n];
        
        for (int i = 0; i < n; i++) {
            cards[i] = sc.nextInt(); // 카드에 적힌 수 입력 받도록
        }
        
        int maxSum = 0;
        
        // 세 장을 뽑는 모든 조합 검사
        for (int i = 0; i < n - 2; i++) { // 첫 번째 카드 선택
            for (int j = i + 1; j < n - 1; j++) { // 두 번째 카드 선택
                for (int k = j + 1; k < n; k++) { // 세 번째 카드 선택
                    int sum = cards[i] + cards[j] + cards[k];
                    if (sum <= m && sum > maxSum) {
                        maxSum = sum;
                    }
                }
            }
        }
        
        System.out.println(maxSum);
    }
}
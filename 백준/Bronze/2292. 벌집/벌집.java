// 벌집의 몇 번째 '층'에 해당하는지 구함
// 1을 시작, 그 다음에는 6개의 칸 차지하는 2층...
// N이 주어졌을 때, N이 몇 번째 층에 속하는지
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        sc.close();
        
        int layer = 1;
        int count = 1;
        
        while (count < N) {
            count += 6 * layer;
            layer++;
        }
        
        System.out.println(layer);
    }
}
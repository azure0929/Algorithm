import java.util.Scanner;
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<Integer> set = new HashSet<>(); // 중복 제거
        
        for (int i = 0; i < 10; i++) {
            int num = sc.nextInt();
            set.add(num % 42); // 42로 나눈 나머지를 Set에 저장
        }
        System.out.println(set.size()); // 서로 다른 나머지 개수 출력
        
        sc.close();
    }
}
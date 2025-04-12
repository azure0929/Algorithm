import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        
        // 1부터 9까지 곱셈 결과를 출력한다.
        // System.out.println(N + " * " + i + " = " + (N * i));
        for (int i = 1; i <= 9; i++) {
            System.out.println(N + " * " + i + " = " + (N * i));
        }
    }
}
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        
        int number;
        int count = 0;
        
        for (int i = 0; i < N; i++) {
            number = sc.nextInt();
            
            for (int j = 2; j <= number; j++) {
                if (j == number) {
                    count++;
                }
                if (number % j == 0) {
                    break;
                }
            }
        }
        
        System.out.println(count);
    }
}
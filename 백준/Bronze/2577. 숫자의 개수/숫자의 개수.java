import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        int result = a * b * c;
        
        int[] count = new int[10];
        
        String str = Integer.toString(result);
        for (int i = 0; i < str.length(); i++) {
            int digit = str.charAt(i) - '0'; // 문자에서 숫자로 변환
            count[digit]++;
        }
        
        for (int i = 0; i < 10; i++) {
            System.out.println(count[i]);
        }
        
        sc.close();
    }
}
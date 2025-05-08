import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        char i = sc.next().charAt(0); // 한 글자 입력
        System.out.println((int) i); // 문자 -> 아스키 코드 값 출력
    }
}
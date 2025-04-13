import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int buddhistYear = sc.nextInt(); // 불기 연도 입력
        int adYear = buddhistYear - 543; // 서기 연도로 변환
        
        System.out.println(adYear);
    }
}
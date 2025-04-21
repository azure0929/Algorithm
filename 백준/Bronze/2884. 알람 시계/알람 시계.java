import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int H = sc.nextInt(); // 시
        int M = sc.nextInt(); // 분
        
        M -= 45; // 45분을 빼기
        
        if (M < 0) {
            M += 60; // 분이 음수이면 시에서 1시간 빼고 60분 더함
            H -= 1;
            
            if (H < 0) {
                H = 23;  // 시가 음수가 되면 하루 전날로 바꿔줌
            }
        }
        
        System.out.println(H + " " + M);
    }
}
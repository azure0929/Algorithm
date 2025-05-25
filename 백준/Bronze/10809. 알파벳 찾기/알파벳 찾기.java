import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] pos = new int[26];
        for (int i = 0; i < 26; i++) {
            pos[i] = -1; // 처음에는 모든 위치를 -1로 초기화
        }
        
        String s = new Scanner(System.in).nextLine(); // 사용자로부터 문자열 입력 받음
        for (int i = 0; i < s.length(); i++) {
            int idx = s.charAt(i) - 'a'; // 문자 'a'를 0번 인덱스로 하여 위치 계산
            if (pos[idx] == -1)
                pos[idx] = i;
        }
        
        for (int n : pos) {
            System.out.print(n + " "); // a부터 z까지 각 알파벳의 처음 등장 위치 출력
        }
    }
}
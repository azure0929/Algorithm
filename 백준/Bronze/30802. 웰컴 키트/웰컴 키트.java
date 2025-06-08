import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt(); // 총 인원 수
        int[] sizes = new int[6]; // 사이즈별 인원 수
        
        for (int i = 0; i < 6; i++) {
            sizes[i] = sc.nextInt();
        }
        
        int T = sc.nextInt(); // 티셔츠 한 묶음에 들어가는 수
        int P = sc.nextInt(); // 펜 한 묶음에 들어가는 수
        
        int tshirtBundles = 0;
        for (int i = 0; i < 6; i++) {
            tshirtBundles += (sizes[i] + T - 1) / T; // 올림 처리
        }
        
        int penBundles = N / P;
        int singlePens = N % P;
        
        System.out.println(tshirtBundles);
        System.out.println(penBundles + " " + singlePens);
        
        sc.close();
    }
}
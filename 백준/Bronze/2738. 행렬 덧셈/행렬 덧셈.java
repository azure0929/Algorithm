import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(); // 행의 개수 입력
        int M = sc.nextInt(); // 열의 개수 입력

        int[][] A = new int[N][M]; // 첫 번째 행렬 A
        int[][] B = new int[N][M]; // 두 번째 행렬 B

        // 첫 번째 행렬 A 입력 받기
        for (int i = 0; i < N; i++) {           // 각 행
            for (int j = 0; j < M; j++) {       // 각 열
                A[i][j] = sc.nextInt();         // 값 입력
            }
        }

        // 두 번째 행렬 B 입력 받기
        for (int i = 0; i < N; i++) {           // 각 행
            for (int j = 0; j < M; j++) {       // 각 열
                B[i][j] = sc.nextInt();         // 값 입력
            }
        }

        // 행렬 덧셈 결과 출력
        for (int i = 0; i < N; i++) {           // 각 행
            for (int j = 0; j < M; j++) {       // 각 열
                // A와 B의 같은 위치 값을 더해 출력
                System.out.print(A[i][j] + B[i][j] + " ");
            }
            // 한 행이 끝나면 줄 바꿈
            System.out.println();
        }

        sc.close();
    }
}
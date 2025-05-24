import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] arr = new int[8];
        for (int i = 0; i < 8; i++) {
            arr[i] = sc.nextInt();
        }
        
        boolean isAscending = true;
        boolean isDescending = true;
        
        for (int i = 0; i < 7; i++) {
            if (arr[i] != arr[i + 1] - 1) {
                isAscending = false;
            }
            if (arr[i] != arr[i + 1] + 1) {
                isDescending = false;
            }
        }
        
        if (isAscending) {
            System.out.println("ascending");
        } else if (isDescending) {
            System.out.println("descending");
        } else {
            System.out.println("mixed");
        }
        
        sc.close();
    }
}
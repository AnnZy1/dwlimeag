import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TestPassword {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "123456";
        String encodedPassword = "$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iwK8pQ/O";
        
        System.out.println("Raw password: " + rawPassword);
        System.out.println("Encoded password: " + encodedPassword);
        System.out.println("Match: " + encoder.matches(rawPassword, encodedPassword));
        
        // Also test encoding a new password
        String newEncoded = encoder.encode(rawPassword);
        System.out.println("New encoded: " + newEncoded);
        System.out.println("New match: " + encoder.matches(rawPassword, newEncoded));
    }
}
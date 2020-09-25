package mag.filedemo.filedemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class FiledemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FiledemoApplication.class, args);
	}

}

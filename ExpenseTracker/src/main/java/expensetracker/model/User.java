package expensetracker.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity

public class User {
	@Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    @NotEmpty
		@Size(min = 4, message = "username contain atleast 4 characters")
	    private String username;
		@Column(name = "user Password", length = 20)
		@NotEmpty
		@Size(min = 8, message = "Password length must be at least 8 characters")
//	    @Pattern(regexp = "^(?=.[a-z])(?=.[A-Z])(?=.*\\d).+$", 
//        message = "Password must contain uppercase, lowercase, and digits")
//	  
		private String password;
	    
	    @OneToMany(fetch = FetchType.EAGER)
	   
	    private Set<Expense> exp = new HashSet<>();
	    public User() {}

	    public User(String username, String password) {
	        this.username = username;
	        this.password = password;
	    }

		public int getId() {
			return id;
		}

		public String getUsername() {
			return username;
		}

		public String getPassword() {
			return password;
		}

		public void setId(int id) {
			this.id = id;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public Set<Expense> getExp() {
			return exp;
		}

		public void setExp(Set<Expense> exp) {
			this.exp = exp;
		}
		
	    
}

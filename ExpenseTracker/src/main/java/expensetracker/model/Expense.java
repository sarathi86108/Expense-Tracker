package expensetracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Expense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long eid;
	@NotEmpty
	@Size(min = 2, message = "expenses name should contain atleast 2 characters")
	private String expName;

	@Column(name = "remarks", unique = false, length = 50)
	@NotEmpty

	private String remarks;
	
	public long getExpAmount() {
		return expAmount;
	}
	public void setExpAmount(long expAmount) {
		this.expAmount = expAmount;
	}
	@Min(value = 0, message = "Amount must be at least 0")
    @Max(value = 1000000, message = "Amount must not exceed 1,000,000")
    
	private long expAmount;
	
	private long date;
	
	@ManyToOne
	
	private User user;
	
	public Long getEid() {
		return eid;
	}
	public String getExpName() {
		return expName;
	}
	public String getRemarks() {
		return remarks;
	}
	public long getDate() {
		return date;
	}
	public User getUser() {
		return user;
	}
	public void setEid(Long eid) {
		this.eid = eid;
	}
	public void setExpName(String expName) {
		this.expName = expName;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public void setDate(long date) {
		this.date = date;
	}
	public void setUser(User user) {
		this.user = user;
	}
	

}

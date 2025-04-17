package expensetracker.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import expensetracker.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUserId(Long userId);  // Use Long if your User ID is Long
}

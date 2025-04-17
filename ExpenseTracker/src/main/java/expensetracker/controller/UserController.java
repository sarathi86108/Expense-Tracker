package expensetracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import expensetracker.model.User;
import expensetracker.repository.UserRepository;
import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
   
    public User registerUser  (@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User loginUser( @Valid @RequestBody User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).orElse(null);
    }
}

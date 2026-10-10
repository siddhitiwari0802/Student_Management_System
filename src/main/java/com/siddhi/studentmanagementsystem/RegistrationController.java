package com.siddhi.studentmanagementsystem;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registrations")
public class RegistrationController {

    private final RegistrationRepository registrationRepository;

    public RegistrationController(
            RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    @PostMapping
    public Registration addRegistration(
            @RequestBody Registration registration) {

        return registrationRepository.save(registration);
    }

    @GetMapping("/{id}")
    public Registration getRegistration(@PathVariable Long id) {

        return registrationRepository
                .findById(id)
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteRegistration(@PathVariable Long id) {

        registrationRepository.deleteById(id);

        return "Registration deleted successfully";
    }
}
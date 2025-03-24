package com.example.LAB_s21.ex7;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FormController {

    @Autowired
    private CustomerService customerService; // Injecting service

    @GetMapping("/form")
    public String showForm(Model model) {
        model.addAttribute("customer", new Customer());
        return "customerForm"; // Ensure there is a customerForm.html file
    }

    @GetMapping("/viewCustomers")
    public String viewCustomers(Model model) {
        model.addAttribute("customers", customerService.getAllCustomers());
        return "viewCustomer"; // Ensure this matches the HTML file name
    }
}

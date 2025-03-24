package com.example.LAB_s21.ex7;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DemoController {

    private final CustomerService customerService;

    public DemoController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/demo1")
    public int demo1() {
        return 100;
    }

    @GetMapping("/demo2")
    public double demo2() {
        return 20.5;
    }

    @GetMapping("/demo3")
    public String demo3() {
        return "<h1>Welcome to Spring Boot</h1>";
    }

    @GetMapping("/demo4")
    public String demo4() {
        return "I Study at KLEF";
    }

    @GetMapping("/demo5/{id}")
    public String demo5(@PathVariable int id) {
        return "ID: " + id;
    }

    @GetMapping("/demo6/{a}/{b}")
    public String demo6(@PathVariable int a, @PathVariable int b) {
        return "Sum: " + (a + b);
    }

    @GetMapping("/demo7")
    public String demo7(@RequestParam int id) {
        return "ID: " + id;
    }

    @GetMapping("/demo8/{name}")
    public String demo8(@PathVariable String name) {
        return "Name: " + name;
    }

    @PostMapping(value = "/addcustomer", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String addCustomer(@ModelAttribute Customer customer) {
        customerService.addCustomer(customer);
        return "Customer Added Successfully";
    }

    @GetMapping("/viewcustomer")
    public List<Customer> viewCustomers() {
        return customerService.getAllCustomers();
    }

    @PostMapping("/updatecustomer/{id}")
    public String updateCustomer(@PathVariable Long id, @ModelAttribute Customer customer) {
        // Logic to update customer
        customer.setId(id);
        customerService.addCustomer(customer);
        return "Customer Updated Successfully";
    }

    @DeleteMapping("/deletecustomer/{id}")
    public String deleteCustomer(@PathVariable Long id) {
        // Logic to delete customer
        customerRepository.deleteById(id);
        return "Customer Deleted Successfully";
    }

    @GetMapping("/viewcustomer/{id}")
    public Customer getCustomer(@PathVariable Long id) {
        // Logic to get single customer
        return customerRepository.findById(id).orElseThrow();
    }

}

package com.model;

public class UserDto {

    private Long userId;
    private String username;
    private String address;
    private String paymentInfo;
    private String phoneNumber;
    private String emailAddress;

    // Constructor, getters, and setters
    // Constructor
    public UserDto(Long userId, String username, String address, String paymentInfo, String phoneNumber, String emailAddress) {
        this.userId = userId;
        this.username = username;
        this.address = address;
        this.paymentInfo = paymentInfo;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    // Getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPaymentInfo() {
        return paymentInfo;
    }

    public void setPaymentInfo(String paymentInfo) {
        this.paymentInfo = paymentInfo;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}

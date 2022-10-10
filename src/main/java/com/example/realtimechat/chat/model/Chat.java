package com.example.realtimechat.chat.model;

public class Chat {
    private String message;
    private int timestamp;
    private String sender;
    private String name;
    private String receiver;
    public Chat(String message, int timestamp, String sender, String name, String receiver) {
        this.message = message;
        this.timestamp = timestamp;
        this.sender = sender;
        this.name = name;
        this.receiver = receiver;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(int timestamp) {
        this.timestamp = timestamp;
    }
    public String getSender() {
        return sender;
    }
    public void setSender(String sender) {
        this.sender = sender;
    }
    public String getReceiver() {
        return receiver;
    }
    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }


}

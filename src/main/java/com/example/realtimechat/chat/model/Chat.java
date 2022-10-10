package com.example.realtimechat.chat.model;

public class Chat {
    private String message;
    private long timestamp;
    private String sender;
    private String name;
    private String receiver;
    public Chat(String message, long timestamp, String sender, String name, String receiver) {
        this.message = message;
        this.timestamp = timestamp;
        this.sender = sender;
        this.name = name;
        this.receiver = receiver;
    }
    public Chat(){
        this.message="null";
        this.timestamp = 0;
        this.sender = "null";
        this.name = "null";
        this.receiver = "null";
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
    public long getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(long timestamp) {
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

package com.example.realtimechat.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.realtimechat.chat.model.Chat;

@RestController
public class ChatController {
    
    @MessageMapping("/chat")
    @SendTo("/receive/chat")
    public Chat getChats(@RequestBody Chat chat){
        try{
            Thread.sleep(100);
            System.out.println(chat);

        }catch(InterruptedException e){
            e.printStackTrace();
        }
        return chat;
    }
}

/*
 * to connect with server -> "/connect"
 * to send message        -> "/sendchat"
 * to receive message     -> "/getchat"
 * 
 * 
 * 
 */
